import React from 'react';
import {
  Code,
  Database,
  Globe,
  Palette,
  Shield,
  GitBranch,
  Server,
  Layers,
  Terminal,
  Eye,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import GlassCard from '../components/GlassCard';
import PageShell from '../components/PageShell';
import PageHeader from '../components/PageHeader';
import ScrollReveal from '../components/ScrollReveal';
import { skillCategories, SHOW_PROFICIENCY } from '../data/skillsData';

const iconMap: Record<string, React.ReactNode> = {
  code: <Code className="h-5 w-5" />,
  database: <Database className="h-5 w-5" />,
  globe: <Globe className="h-5 w-5" />,
  palette: <Palette className="h-5 w-5" />,
  shield: <Shield className="h-5 w-5" />,
  gitBranch: <GitBranch className="h-5 w-5" />,
  server: <Server className="h-5 w-5" />,
  layers: <Layers className="h-5 w-5" />,
  terminal: <Terminal className="h-5 w-5" />,
  brush: <Palette className="h-5 w-5" />,
  eye: <Eye className="h-5 w-5" />,
  sparkles: <Sparkles className="h-5 w-5" />,
  check: <CheckCircle2 className="h-5 w-5" />,
};

const Skills: React.FC = () => {
  return (
    <PageShell>
      <PageHeader
        title="My Skills"
        subtitle="A growing collection of technologies and skills I've developed through my studies, projects, and continuous learning journey."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 items-stretch">
        {skillCategories.map((category, categoryIndex) => (
          <ScrollReveal key={category.title} delay={categoryIndex * 0.08}>
            <GlassCard className="flex h-full flex-col p-6" interactive>
              <div className="mb-4 flex items-center gap-3">
                <span className="chip-icon">{iconMap[category.iconKey]}</span>
                <h2 className="font-display text-xl font-semibold text-white">{category.title}</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill.name} className="chip">
                    <span className="chip-icon">{iconMap[skill.iconKey]}</span>
                    <span>{skill.name}</span>
                    {SHOW_PROFICIENCY && skill.level !== undefined && (
                      <span className="ml-1 flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className={`h-1.5 w-1.5 rounded-full ${i < (skill.level as number) ? 'bg-accent' : 'bg-white/20'}`}
                          />
                        ))}
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </PageShell>
  );
};

export default Skills;
