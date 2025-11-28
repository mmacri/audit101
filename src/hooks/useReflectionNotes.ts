import { useState, useEffect, useCallback, useRef } from 'react';
import { UserRole } from './useUserPreferences';

const STORAGE_KEY = 'cip-academy-reflection-notes';
const DEBOUNCE_MS = 1000;

export type ContextType = 'module' | 'mission' | 'scenario';

export interface ReflectionNote {
  updatedAt: string;
  text: string;
}

export type ReflectionNotesStore = Record<string, ReflectionNote>;

function getNoteKey(role: UserRole, contextType: ContextType, contextId: string): string {
  return `${role}:${contextType}:${contextId}`;
}

export function useReflectionNotes(role: UserRole | null) {
  const [notes, setNotes] = useState<ReflectionNotesStore>({});
  const [isLoaded, setIsLoaded] = useState(false);
  const debounceTimers = useRef<Record<string, NodeJS.Timeout>>({});

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setNotes(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Failed to load reflection notes:', error);
    }
    setIsLoaded(true);
  }, []);

  const saveNotes = useCallback((newNotes: ReflectionNotesStore) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newNotes));
      setNotes(newNotes);
    } catch (error) {
      console.error('Failed to save reflection notes:', error);
    }
  }, []);

  const getNote = useCallback((contextType: ContextType, contextId: string): string => {
    if (!role) return '';
    const key = getNoteKey(role, contextType, contextId);
    return notes[key]?.text || '';
  }, [role, notes]);

  const getNoteMetadata = useCallback((contextType: ContextType, contextId: string): ReflectionNote | null => {
    if (!role) return null;
    const key = getNoteKey(role, contextType, contextId);
    return notes[key] || null;
  }, [role, notes]);

  const setNote = useCallback((
    contextType: ContextType,
    contextId: string,
    text: string,
    immediate: boolean = false
  ) => {
    if (!role) return;

    const key = getNoteKey(role, contextType, contextId);

    // Clear existing debounce timer
    if (debounceTimers.current[key]) {
      clearTimeout(debounceTimers.current[key]);
    }

    const updateNote = () => {
      const newNotes = {
        ...notes,
        [key]: {
          updatedAt: new Date().toISOString(),
          text,
        },
      };
      
      // Remove empty notes
      if (!text.trim()) {
        delete newNotes[key];
      }
      
      saveNotes(newNotes);
    };

    if (immediate) {
      updateNote();
    } else {
      debounceTimers.current[key] = setTimeout(updateNote, DEBOUNCE_MS);
    }
  }, [role, notes, saveNotes]);

  const clearNote = useCallback((contextType: ContextType, contextId: string) => {
    if (!role) return;
    const key = getNoteKey(role, contextType, contextId);
    const newNotes = { ...notes };
    delete newNotes[key];
    saveNotes(newNotes);
  }, [role, notes, saveNotes]);

  const getNotesForRole = useCallback((targetRole: UserRole): ReflectionNotesStore => {
    const rolePrefix = `${targetRole}:`;
    const roleNotes: ReflectionNotesStore = {};
    
    Object.entries(notes).forEach(([key, value]) => {
      if (key.startsWith(rolePrefix)) {
        roleNotes[key] = value;
      }
    });
    
    return roleNotes;
  }, [notes]);

  const getAllNotes = useCallback(() => notes, [notes]);

  const importNotes = useCallback((importedNotes: ReflectionNotesStore) => {
    saveNotes({ ...notes, ...importedNotes });
  }, [notes, saveNotes]);

  const getNoteCount = useCallback((): number => {
    if (!role) return 0;
    const rolePrefix = `${role}:`;
    return Object.keys(notes).filter(key => key.startsWith(rolePrefix)).length;
  }, [role, notes]);

  // Cleanup debounce timers on unmount
  useEffect(() => {
    return () => {
      Object.values(debounceTimers.current).forEach(timer => clearTimeout(timer));
    };
  }, []);

  return {
    isLoaded,
    getNote,
    getNoteMetadata,
    setNote,
    clearNote,
    getNotesForRole,
    getAllNotes,
    importNotes,
    getNoteCount,
  };
}
