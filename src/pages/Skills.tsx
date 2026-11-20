import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code,
  Database,
  Globe,
  Palette,
  Shield,
  GitBranch,
  Server,
  Sparkles,
} from 'lucide-react';
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiMongodb,
  SiSupabase,
  SiVercel,
  SiOpencv,
  SiGooglegemini,
  SiGit,
  SiGithub,
  SiDocker,
  SiPytest,
} from 'react-icons/si';
import GlassCard from '../components/GlassCard';
import PageShell from '../components/PageShell';
import PageHeader from '../components/PageHeader';
import ScrollReveal from '../components/ScrollReveal';
import { skillCategories, SHOW_PROFICIENCY } from '../data/skillsData';

const iconMap: Record<string, React.ReactNode> = {
  code: <Code className="h-[18px] w-[18px]" />,
  database: <Database className="h-[18px] w-[18px]" />,
  globe: <Globe className="h-[18px] w-[18px]" />,
  palette: <Palette className="h-[18px] w-[18px]" />,
  shield: <Shield className="h-[18px] w-[18px]" />,
  gitBranch: <GitBranch className="h-[18px] w-[18px]" />,
  server: <Server className="h-[18px] w-[18px]" />,
  sparkles: <Sparkles className="h-[18px] w-[18px]" />,
  python: <SiPython size={18} />,
  javascript: <SiJavascript size={18} />,
  typescript: <SiTypescript size={18} />,
  sql: <Database className="h-[18px] w-[18px]" />,
  react: <SiReact size={18} />,
  html: <SiHtml5 size={18} />,
  css: <SiCss size={18} />,
  tailwind: <SiTailwindcss size={18} />,
  framer: <SiFramer size={18} />,
  node: <SiNodedotjs size={18} />,
  express: <SiExpress size={18} />,
  fastapi: <SiFastapi size={18} />,
  flask: <SiFlask size={18} />,
  rest: <Globe className="h-[18px] w-[18px]" />,
  mongodb: <SiMongodb size={18} />,
  supabase: <SiSupabase size={18} />,
  vercel: <SiVercel size={18} />,
  opencv: <SiOpencv size={18} />,
  gemini: <SiGooglegemini size={18} />,
  git: <SiGit size={18} />,
  github: <SiGithub size={18} />,
  docker: <SiDocker size={18} />,
  pytest: <SiPytest size={18} />,
  design: <Palette className="h-[18px] w-[18px]" />,
  security: <Shield className="h-[18px] w-[18px]" />,
};

const categoryIconMap: Record<string, React.ReactNode> = {
  code: <Code className="h-5 w-5" />,
  database: <Database className="h-5 w-5" />,
  globe: <Globe className="h-5 w-5" />,
  palette: <Palette className="h-5 w-5" />,
  shield: <Shield className="h-5 w-5" />,
  gitBranch: <GitBranch className="h-5 w-5" />,
  server: <Server className="h-5 w-5" />,
  sparkles: <Sparkles className="h-5 w-5" />,
};

const Skills: React.FC = () => {
  return (
    <PageShell>
      <PageHeader
        title="My Skills"
        subtitle="A growing collection of technologies and skills I've developed through my studies, projects, and continuous learning journey."
      />

      {/* Bento grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12 lg:gap-6 items-stretch">
        {skillCategories.map((category, categoryIndex) => {
          // Determine col span based on category title
          let colSpan = 'lg:col-span-4';
          if (category.title === 'Languages') colSpan = 'lg:col-span-7';
          else if (category.title === 'AI & Computer Vision') colSpan = 'lg:col-span-5';
          else if (category.title === 'DevOps & Tooling' || category.title === 'Design & Security') colSpan = 'lg:col-span-6';

          return (
            <ScrollReveal key={category.title} delay={categoryIndex * 0.06} className={colSpan}>
              <GlassCard className="relative flex h-full flex-col p-5" interactive>
                {category.glow && (
                  <div
                    className="pointer-events-none absolute -inset-px rounded-[var(--radius-card)] opacity-60"
                    style={{ background: 'radial-gradient(circle at 80% 20%, rgba(200,255,46,0.12), transparent 60%)' }}
                    aria-hidden="true"
                  />
                )}
                <div className="relative mb-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-accent">
                      {categoryIconMap[category.iconKey]}
                    </span>
                    <h2 className="font-display text-[20px] font-semibold text-white">{category.title}</h2>
                  </div>
                  <span className="glass-chip">{category.skills.length} skills</span>
                </div>

                <div className="mb-4 h-px w-full bg-white/10" />

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <ScrollReveal key={skill.name} delay={categoryIndex * 0.06 + skillIndex * 0.03}>
                      <span
                        className={`chip ${skill.featured ? 'chip-featured' : ''}`}
                        style={{ ['--brand' as string]: skill.brandColor }}
                        tabIndex={0}
                      >
                        <span className="chip-icon">{iconMap[skill.iconKey]}</span>
                        <span>{skill.name}</span>
                        {SHOW_PROFICIENCY && skill.level !== undefined && (
                          <span className="ml-1 flex gap-0.5">
                            {Array.from({ length: 3 }).map((_, i) => (
                              <span
                                key={i}
                                className={`h-1.5 w-1.5 rounded-full ${i < (skill.level as number) ? 'bg-accent' : 'bg-white/20'}`}
                              />
                            ))}
                          </span>
                        )}
                      </span>
                    </ScrollReveal>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Always learning strip */}
      <ScrollReveal delay={0.2}>
        <GlassCard className="mt-8 flex flex-col items-center justify-between gap-4 p-5 sm:flex-row" interactive>
          <div>
            <h3 className="font-display text-lg font-semibold text-white">Always learning</h3>
            <p className="text-sm text-white/65">
              Always expanding my knowledge and strengthening my fundamentals.
            </p>
          </div>
          <Link to="/projects" className="btn-glass">
            See my projects
          </Link>
        </GlassCard>
      </ScrollReveal>
    </PageShell>
  );
};

export default Skills;
