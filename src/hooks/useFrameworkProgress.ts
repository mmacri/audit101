import { useState, useEffect, useCallback } from 'react';
import { Framework, Persona, createFrameworkPersonaKey } from '@/types/frameworkTypes';

const STORAGE_KEY = 'audit101-framework-progress';

export interface StepProgress {
  stepNumber: number;
  completed: boolean;
  completedAt?: string;
}

export interface PersonaProgress {
  stepsCompleted: number[];
  completedAt?: string;
  lastAccessedAt: string;
}

export interface FrameworkProgress {
  [personaKey: string]: PersonaProgress;
}

export interface AllFrameworkProgress {
  [frameworkPersonaKey: string]: PersonaProgress;
}

const defaultPersonaProgress: PersonaProgress = {
  stepsCompleted: [],
  lastAccessedAt: new Date().toISOString(),
};

export function useFrameworkProgress(framework: Framework, persona: Persona) {
  const [allProgress, setAllProgress] = useState<AllFrameworkProgress>({});
  const [isLoaded, setIsLoaded] = useState(false);
  
  const personaKey = createFrameworkPersonaKey(framework, persona);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setAllProgress(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Failed to load framework progress:', error);
    }
    setIsLoaded(true);
  }, []);

  const saveProgress = useCallback((updated: AllFrameworkProgress) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      setAllProgress(updated);
    } catch (error) {
      console.error('Failed to save framework progress:', error);
    }
  }, []);

  const getCurrentProgress = useCallback((): PersonaProgress => {
    return allProgress[personaKey] || defaultPersonaProgress;
  }, [allProgress, personaKey]);

  const markStepComplete = useCallback((stepNumber: number) => {
    const current = getCurrentProgress();
    if (current.stepsCompleted.includes(stepNumber)) return;

    const updated = {
      ...allProgress,
      [personaKey]: {
        ...current,
        stepsCompleted: [...current.stepsCompleted, stepNumber].sort((a, b) => a - b),
        lastAccessedAt: new Date().toISOString(),
      },
    };
    saveProgress(updated);
  }, [allProgress, personaKey, getCurrentProgress, saveProgress]);

  const markStepIncomplete = useCallback((stepNumber: number) => {
    const current = getCurrentProgress();
    const updated = {
      ...allProgress,
      [personaKey]: {
        ...current,
        stepsCompleted: current.stepsCompleted.filter(s => s !== stepNumber),
        lastAccessedAt: new Date().toISOString(),
      },
    };
    saveProgress(updated);
  }, [allProgress, personaKey, getCurrentProgress, saveProgress]);

  const isStepComplete = useCallback((stepNumber: number): boolean => {
    const current = getCurrentProgress();
    return current.stepsCompleted.includes(stepNumber);
  }, [getCurrentProgress]);

  const getCompletionPercentage = useCallback((totalSteps: number): number => {
    const current = getCurrentProgress();
    return Math.round((current.stepsCompleted.length / totalSteps) * 100);
  }, [getCurrentProgress]);

  const markPersonaComplete = useCallback(() => {
    const current = getCurrentProgress();
    const updated = {
      ...allProgress,
      [personaKey]: {
        ...current,
        completedAt: new Date().toISOString(),
        lastAccessedAt: new Date().toISOString(),
      },
    };
    saveProgress(updated);
  }, [allProgress, personaKey, getCurrentProgress, saveProgress]);

  const isPersonaComplete = useCallback((): boolean => {
    const current = getCurrentProgress();
    return !!current.completedAt;
  }, [getCurrentProgress]);

  const getAllProgress = useCallback((): AllFrameworkProgress => {
    return allProgress;
  }, [allProgress]);

  const getFrameworkCompletion = useCallback((fw: Framework): { 
    personas: number; 
    total: number;
    percentage: number;
  } => {
    const personas = ['practitioners', 'tool-owners', 'leaders', 'auditors'] as Persona[];
    const completed = personas.filter(p => {
      const key = createFrameworkPersonaKey(fw, p);
      return allProgress[key]?.completedAt;
    }).length;
    
    return {
      personas: completed,
      total: personas.length,
      percentage: Math.round((completed / personas.length) * 100),
    };
  }, [allProgress]);

  return {
    isLoaded,
    getCurrentProgress,
    markStepComplete,
    markStepIncomplete,
    isStepComplete,
    getCompletionPercentage,
    markPersonaComplete,
    isPersonaComplete,
    getAllProgress,
    getFrameworkCompletion,
  };
}
