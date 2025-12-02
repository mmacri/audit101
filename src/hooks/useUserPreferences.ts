import { useState, useEffect, useCallback } from 'react';
import { Framework, Persona } from '@/types/frameworkTypes';

const PREFS_KEY = 'audit101-user-preferences';

// Legacy NERC CIP role types (kept for backward compatibility)
export type UserRole = 'compliance' | 'it-ot' | 'physical-security' | 'hr-training' | 'leadership' | 'other';
export type ExperienceLevel = 'new' | 'some' | 'experienced';

export const roleLabels: Record<UserRole, string> = {
  'compliance': 'Compliance / Risk Manager',
  'it-ot': 'IT / OT Engineer',
  'physical-security': 'Physical Security',
  'hr-training': 'HR / Training',
  'leadership': 'Leadership',
  'other': 'Other',
};

export const experienceLabels: Record<ExperienceLevel, string> = {
  'new': 'New to NERC CIP',
  'some': 'Some Experience',
  'experienced': 'Experienced',
};

export const roleModules: Record<UserRole, number[]> = {
  'compliance': [1, 3, 7, 9, 10, 11, 12],
  'it-ot': [1, 2, 5, 6, 7, 8, 11],
  'physical-security': [1, 2, 5, 7, 12],
  'hr-training': [1, 3, 4],
  'leadership': [1, 3, 10, 11, 12],
  'other': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
};

// Framework-specific persona/role selection (new system)
export interface FrameworkRoles {
  [framework: string]: Persona | null;
}

export interface UserPreferences {
  // Legacy NERC CIP fields
  role?: UserRole | null;
  experience?: ExperienceLevel | null;
  onboardingComplete?: boolean;
  
  // New framework-specific roles
  frameworkRoles: FrameworkRoles;
  firstName?: string;
}

const defaultPreferences: UserPreferences = {
  role: null,
  experience: null,
  onboardingComplete: false,
  frameworkRoles: {},
};

export function useUserPreferences() {
  const [preferences, setPreferences] = useState<UserPreferences>(defaultPreferences);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(PREFS_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Migrate old data if needed
        if (!parsed.frameworkRoles) {
          parsed.frameworkRoles = {};
        }
        setPreferences(parsed);
      }
    } catch (error) {
      console.error('Failed to load preferences:', error);
    }
    setIsLoaded(true);
  }, []);

  const savePreferences = useCallback((newPrefs: Partial<UserPreferences>) => {
    const updated = { ...preferences, ...newPrefs };
    try {
      localStorage.setItem(PREFS_KEY, JSON.stringify(updated));
      setPreferences(updated);
    } catch (error) {
      console.error('Failed to save preferences:', error);
    }
  }, [preferences]);

  // Legacy NERC CIP methods
  const completeOnboarding = useCallback((role: UserRole, experience: ExperienceLevel) => {
    savePreferences({ role, experience, onboardingComplete: true });
  }, [savePreferences]);

  const getRecommendedModules = useCallback(() => {
    if (!preferences.role) return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return roleModules[preferences.role];
  }, [preferences.role]);

  const isModuleRecommended = useCallback((moduleId: number) => {
    return getRecommendedModules().includes(moduleId);
  }, [getRecommendedModules]);

  // New framework-specific methods
  const setFrameworkRole = useCallback((framework: Framework, persona: Persona | null) => {
    const updated = {
      ...preferences,
      frameworkRoles: {
        ...preferences.frameworkRoles,
        [framework]: persona,
      },
    };
    try {
      localStorage.setItem(PREFS_KEY, JSON.stringify(updated));
      setPreferences(updated);
    } catch (error) {
      console.error('Failed to save framework role:', error);
    }
  }, [preferences]);

  const getFrameworkRole = useCallback((framework: Framework): Persona | null => {
    return preferences.frameworkRoles?.[framework] || null;
  }, [preferences]);

  const resetPreferences = useCallback(() => {
    localStorage.removeItem(PREFS_KEY);
    setPreferences(defaultPreferences);
  }, []);

  return {
    preferences,
    isLoaded,
    savePreferences,
    completeOnboarding,
    getRecommendedModules,
    isModuleRecommended,
    setFrameworkRole,
    getFrameworkRole,
    resetPreferences,
  };
}
