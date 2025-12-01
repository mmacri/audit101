import { useMemo } from 'react';
import { AllFrameworkProgress } from './useFrameworkProgress';
import { Framework, Persona, frameworkLabels, personaLabels, createFrameworkPersonaKey } from '@/types/frameworkTypes';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedAt?: string;
  category: 'framework' | 'persona' | 'milestone' | 'special';
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export function useAchievements(allProgress: AllFrameworkProgress) {
  const achievements = useMemo((): Achievement[] => {
    const badges: Achievement[] = [];

    // Framework completion badges
    const frameworks: Framework[] = [
      'nerc-cip', 'nist-800-53', 'cis-controls', 'nist-csf', 
      'sox-itgc', 'pci-dss', 'hipaa', 'coso', 'iso-27001'
    ];

    frameworks.forEach(framework => {
      const personas = ['practitioners', 'tool-owners', 'leaders', 'auditors'] as Persona[];
      const completedPersonas = personas.filter(p => {
        const key = createFrameworkPersonaKey(framework, p);
        return allProgress[key]?.completedAt;
      });

      // Individual persona badges
      personas.forEach(persona => {
        const key = createFrameworkPersonaKey(framework, persona);
        const progress = allProgress[key];
        badges.push({
          id: `${framework}-${persona}`,
          title: `${frameworkLabels[framework]} ${personaLabels[persona]}`,
          description: `Completed all steps in the ${personaLabels[persona]} path for ${frameworkLabels[framework]}`,
          icon: 'Award',
          earned: !!progress?.completedAt,
          earnedAt: progress?.completedAt,
          category: 'persona',
          rarity: 'common',
        });
      });

      // Framework mastery badge (all 4 personas)
      if (completedPersonas.length === 4) {
        badges.push({
          id: `${framework}-mastery`,
          title: `${frameworkLabels[framework]} Master`,
          description: `Completed all four persona paths in ${frameworkLabels[framework]}`,
          icon: 'Crown',
          earned: true,
          earnedAt: completedPersonas[completedPersonas.length - 1] 
            ? allProgress[createFrameworkPersonaKey(framework, completedPersonas[completedPersonas.length - 1])]?.completedAt 
            : undefined,
          category: 'framework',
          rarity: 'epic',
        });
      } else {
        badges.push({
          id: `${framework}-mastery`,
          title: `${frameworkLabels[framework]} Master`,
          description: `Complete all four persona paths in ${frameworkLabels[framework]} (${completedPersonas.length}/4)`,
          icon: 'Crown',
          earned: false,
          category: 'framework',
          rarity: 'epic',
        });
      }
    });

    // Cross-framework milestone badges
    const allPersonaCompletions = Object.values(allProgress).filter(p => p.completedAt).length;
    
    if (allPersonaCompletions >= 1) {
      badges.push({
        id: 'first-completion',
        title: 'First Steps',
        description: 'Completed your first persona path',
        icon: 'Sparkles',
        earned: true,
        earnedAt: Object.values(allProgress).find(p => p.completedAt)?.completedAt,
        category: 'milestone',
        rarity: 'common',
      });
    }

    if (allPersonaCompletions >= 5) {
      badges.push({
        id: 'dedicated-learner',
        title: 'Dedicated Learner',
        description: 'Completed 5 persona paths across frameworks',
        icon: 'BookOpen',
        earned: true,
        category: 'milestone',
        rarity: 'rare',
      });
    }

    if (allPersonaCompletions >= 10) {
      badges.push({
        id: 'audit-expert',
        title: 'Audit Expert',
        description: 'Completed 10 persona paths across frameworks',
        icon: 'GraduationCap',
        earned: true,
        category: 'milestone',
        rarity: 'epic',
      });
    }

    if (allPersonaCompletions >= 20) {
      badges.push({
        id: 'compliance-legend',
        title: 'Compliance Legend',
        description: 'Completed 20+ persona paths - true mastery!',
        icon: 'Trophy',
        earned: true,
        category: 'milestone',
        rarity: 'legendary',
      });
    }

    // Special persona-focused badges
    const personasCompleted = {
      practitioners: 0,
      'tool-owners': 0,
      leaders: 0,
      auditors: 0,
    };

    Object.keys(allProgress).forEach(key => {
      if (allProgress[key]?.completedAt) {
        const persona = key.split('-').pop() as Persona;
        if (persona in personasCompleted) {
          personasCompleted[persona as keyof typeof personasCompleted]++;
        }
      }
    });

    Object.entries(personasCompleted).forEach(([persona, count]) => {
      if (count >= 3) {
        badges.push({
          id: `${persona}-specialist`,
          title: `${personaLabels[persona as Persona]} Specialist`,
          description: `Completed ${persona} path in ${count} different frameworks`,
          icon: 'Shield',
          earned: true,
          category: 'special',
          rarity: count >= 5 ? 'epic' : 'rare',
        });
      }
    });

    return badges.sort((a, b) => {
      // Sort by: earned first, then by rarity, then alphabetically
      if (a.earned !== b.earned) return a.earned ? -1 : 1;
      const rarityOrder = { legendary: 0, epic: 1, rare: 2, common: 3 };
      if (rarityOrder[a.rarity] !== rarityOrder[b.rarity]) {
        return rarityOrder[a.rarity] - rarityOrder[b.rarity];
      }
      return a.title.localeCompare(b.title);
    });
  }, [allProgress]);

  const stats = useMemo(() => {
    const earned = achievements.filter(a => a.earned).length;
    const total = achievements.length;
    
    return {
      earned,
      total,
      percentage: Math.round((earned / total) * 100),
      byCategory: {
        framework: achievements.filter(a => a.category === 'framework' && a.earned).length,
        persona: achievements.filter(a => a.category === 'persona' && a.earned).length,
        milestone: achievements.filter(a => a.category === 'milestone' && a.earned).length,
        special: achievements.filter(a => a.category === 'special' && a.earned).length,
      },
      byRarity: {
        common: achievements.filter(a => a.rarity === 'common' && a.earned).length,
        rare: achievements.filter(a => a.rarity === 'rare' && a.earned).length,
        epic: achievements.filter(a => a.rarity === 'epic' && a.earned).length,
        legendary: achievements.filter(a => a.rarity === 'legendary' && a.earned).length,
      },
    };
  }, [achievements]);

  return {
    achievements,
    stats,
  };
}
