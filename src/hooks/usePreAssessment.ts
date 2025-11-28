import { useState, useEffect, useCallback } from 'react';
import { UserRole } from './useUserPreferences';
import { AssessmentDomain, PreAssessmentResults } from '@/data/preAssessmentData';

const STORAGE_KEY = 'cip-academy-pre-assessment';

const defaultDomainScores: Record<AssessmentDomain, number> = {
  scope_assets: 0,
  training_people: 0,
  technical_controls: 0,
  incidents_recovery: 0,
  evidence_audit: 0,
};

export function usePreAssessment() {
  const [results, setResults] = useState<PreAssessmentResults>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setResults(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Failed to load pre-assessment results:', error);
    }
    setIsLoaded(true);
  }, []);

  const saveResults = useCallback((newResults: PreAssessmentResults) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newResults));
      setResults(newResults);
    } catch (error) {
      console.error('Failed to save pre-assessment results:', error);
    }
  }, []);

  const hasCompletedAssessment = useCallback((role: UserRole): boolean => {
    return !!results[role]?.completedAt;
  }, [results]);

  const getAssessmentResults = useCallback((role: UserRole) => {
    return results[role] || null;
  }, [results]);

  const submitAssessment = useCallback((
    role: UserRole,
    domainScores: Record<AssessmentDomain, number>
  ) => {
    const newResults = {
      ...results,
      [role]: {
        completedAt: new Date().toISOString(),
        domainScores,
      },
    };
    saveResults(newResults);
  }, [results, saveResults]);

  const clearAssessment = useCallback((role: UserRole) => {
    const newResults = { ...results };
    delete newResults[role];
    saveResults(newResults);
  }, [results, saveResults]);

  const getWeakestDomains = useCallback((role: UserRole, count: number = 2): AssessmentDomain[] => {
    const roleResults = results[role];
    if (!roleResults) return [];

    const sortedDomains = Object.entries(roleResults.domainScores)
      .sort(([, a], [, b]) => a - b)
      .slice(0, count)
      .map(([domain]) => domain as AssessmentDomain);

    return sortedDomains;
  }, [results]);

  const getRecommendedFocus = useCallback((role: UserRole) => {
    const roleResults = results[role];
    if (!roleResults) return null;

    const weakestDomains = getWeakestDomains(role, 2);
    const averageScore = Object.values(roleResults.domainScores).reduce((a, b) => a + b, 0) / 5;

    return {
      weakestDomains,
      averageScore,
      isStrong: averageScore >= 75,
      needsFoundations: roleResults.domainScores.scope_assets < 60 || averageScore < 50,
    };
  }, [results, getWeakestDomains]);

  const getAllResults = useCallback(() => results, [results]);

  const importResults = useCallback((importedResults: PreAssessmentResults) => {
    saveResults({ ...results, ...importedResults });
  }, [results, saveResults]);

  return {
    isLoaded,
    results,
    hasCompletedAssessment,
    getAssessmentResults,
    submitAssessment,
    clearAssessment,
    getWeakestDomains,
    getRecommendedFocus,
    getAllResults,
    importResults,
  };
}
