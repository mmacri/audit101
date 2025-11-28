import { useState, useEffect, useCallback } from 'react';
import { UserRole } from './useUserPreferences';

const STORAGE_KEY = 'cip-academy-scenario-progress';

export interface ScenarioProgress {
  [roleKey: string]: {
    completedAt?: string;
    lastNodeId?: string;
    pathTaken?: string[];
    outcomeType?: 'good' | 'neutral' | 'poor';
  };
}

export function useScenarioProgress() {
  const [progress, setProgress] = useState<ScenarioProgress>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setProgress(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Failed to load scenario progress:', error);
    }
    setIsLoaded(true);
  }, []);

  const saveProgress = useCallback((newProgress: ScenarioProgress) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
      setProgress(newProgress);
    } catch (error) {
      console.error('Failed to save scenario progress:', error);
    }
  }, []);

  const isScenarioComplete = useCallback((role: UserRole): boolean => {
    return !!progress[role]?.completedAt;
  }, [progress]);

  const getScenarioProgress = useCallback((role: UserRole) => {
    return progress[role] || null;
  }, [progress]);

  const updateScenarioProgress = useCallback((
    role: UserRole,
    nodeId: string,
    pathTaken: string[]
  ) => {
    const newProgress = {
      ...progress,
      [role]: {
        ...progress[role],
        lastNodeId: nodeId,
        pathTaken,
      },
    };
    saveProgress(newProgress);
  }, [progress, saveProgress]);

  const completeScenario = useCallback((
    role: UserRole,
    pathTaken: string[],
    outcomeType: 'good' | 'neutral' | 'poor'
  ) => {
    const newProgress = {
      ...progress,
      [role]: {
        completedAt: new Date().toISOString(),
        pathTaken,
        outcomeType,
      },
    };
    saveProgress(newProgress);
  }, [progress, saveProgress]);

  const resetScenario = useCallback((role: UserRole) => {
    const newProgress = { ...progress };
    delete newProgress[role];
    saveProgress(newProgress);
  }, [progress, saveProgress]);

  const getAllProgress = useCallback(() => progress, [progress]);

  const importProgress = useCallback((importedProgress: ScenarioProgress) => {
    saveProgress({ ...progress, ...importedProgress });
  }, [progress, saveProgress]);

  return {
    isLoaded,
    progress,
    isScenarioComplete,
    getScenarioProgress,
    updateScenarioProgress,
    completeScenario,
    resetScenario,
    getAllProgress,
    importProgress,
  };
}
