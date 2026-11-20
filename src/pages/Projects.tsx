import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsap';
import { prefersReducedMotion, canHover } from '../lib/gsap';
import { ExternalLink, Github, Play } from 'lucide-react';
import { projectsData, PROJECT_SORT_ORDER } from '../data/projectsData';
import PageShell from '../components/PageShell';
import PageHeader from '../components/PageHeader';
import type { Project } from '../data/projectsData';
import { useTilt } from '../hooks/useTilt';

function formatProjectDate(date: string): string {
  if (!/^\d{4}-\d{2}$/.test(date)) return '';
  const [year, month] = date.split('-');
  const parsed = new Date(Number(year), Number(month) - 1, 1);
  return parsed.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

function toEmbedUrl(url: string): string {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=|embed\/)([A-Za-z0-9_-]{11})/);
  return match ? `https://www.youtube-nocookie.com/embed/${match[1]}` : url;
}

interface VideoModalProps {
  open: boolean;
  url: string;
  title: string;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ open, url, title, onClose }) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;
    if (!dialog) return;

    const getFocusable = (): HTMLElement[] =>
      Array.from(dialog.querySelectorAll<HTMLElement>('button, a[href], iframe, [tabindex]:not([tabindex="-1"])'));

    getFocusable()[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;
      const focusable = getFocusable();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      previous?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      >
        <button
          type="button"
          aria-label="Close video"
          className="absolute inset-0 bg-black/75 backdrop-blur-sm"
          onClick={onClose}
        />
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-video-title"
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl border border-white/15 bg-[#0a0a0f]/95 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
            <h2 id="project-video-title" className="font-display text-lg font-semibold text-white">
              {title}
            </h2>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close video"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-accent/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              ×
            </button>
          </div>
          <div className="aspect-video w-full bg-black">
            <iframe
              src={toEmbedUrl(url)}
              title={title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
          <div className="px-5 py-4">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-sm font-medium text-accent underline-offset-4 hover:underline"
            >
              Open on YouTube
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

interface ProjectCardProps {
  project: Project;
  onWatch: (url: string) => void;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onWatch, index }) => {
  const [imageFailed, setImageFailed] = useState(false);
  const tiltRef = useTilt<HTMLDivElement>();
  const cardRef = useRef<HTMLDivElement>(null);
  const links = project.links ?? { github: project.codeLink, live: project.liveLink };
  const initials = project.title
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const glassButtonClass =
    'inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 font-display text-[15px] font-medium text-white backdrop-blur-md transition-all hover:border-accent/60 hover:bg-white/10 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black';

  const primaryButtonClass =
    'inline-flex min-h-[44px] items-center gap-2 rounded-full bg-accent px-4 py-2 font-display text-[15px] font-semibold text-black shadow-[0_0_0_1px_rgba(200,255,46,0.4),0_0_24px_rgba(200,255,46,0.45),0_0_60px_rgba(200,255,46,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(200,255,46,0.6),0_0_32px_rgba(200,255,46,0.6),0_0_80px_rgba(200,255,46,0.35)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black';

  useGSAP(
    () => {
      const root = cardRef.current;
      if (!root) return;
      const img = root.querySelector<HTMLElement>('img.project-parallax');
      if (prefersReducedMotion()) {
        gsap.set(root, { autoAlpha: 1, y: 0 });
        return;
      }
      gsap.set(root, { autoAlpha: 0, y: 32 });
      gsap.to(root, {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.08,
        ease: 'power2.out',
        scrollTrigger: { trigger: root, start: 'top 88%', once: true },
      });
      if (img && canHover() && window.innerWidth >= 768) {
        gsap.fromTo(
          img,
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: 'none',
            scrollTrigger: {
              trigger: root,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }
    },
    { scope: cardRef, dependencies: [index] }
  );

  return (
    <div ref={cardRef} data-project-card>
      <div ref={tiltRef} className="glass group relative flex h-full flex-col overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(255, 255, 255, 0.12), transparent 42%)',
          }}
        />

        <div className="relative overflow-hidden rounded-t-[var(--radius-card)]">
          {project.image && !imageFailed ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              width={640}
              height={360}
              onError={() => setImageFailed(true)}
              className="project-parallax h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-52 w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-950 text-5xl font-display font-bold text-accent">
              {initials}
            </div>
          )}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[var(--glass-bg)] to-transparent" />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
            <h3 className="font-display text-[20px] font-semibold leading-tight text-white">{project.title}</h3>
            <div className="flex flex-wrap gap-2">
              {project.badge && <span className="glass-chip">{project.badge}</span>}
              <span className="glass-chip">{project.status}</span>
            </div>
          </div>

          <p className="mb-4 text-[15px] leading-[1.6] text-white/75">{project.description}</p>

          {project.details && project.details.length > 0 && (
            <ul className="mb-5 space-y-1.5 text-[14px] text-white/70">
              {project.details.slice(0, 2).map((detail, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mb-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="glass-chip">
                {tech}
              </span>
            ))}
          </div>

          {formatProjectDate(project.date) && (
            <div className="mb-5 text-[13px] text-white/60">{formatProjectDate(project.date)}</div>
          )}

          <div className="mt-auto flex flex-wrap gap-2">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} on GitHub`}
                className={glassButtonClass}
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            )}
            {links.live && (
              <a
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live demo`}
                className={primaryButtonClass}
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </a>
            )}
            {links.video && (
              <button
                type="button"
                onClick={() => onWatch(links.video as string)}
                aria-label={`Watch ${project.title} video`}
                className={glassButtonClass}
              >
                <Play className="h-4 w-4" />
                <span>Watch Video</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [videoTitle, setVideoTitle] = useState('');

  const sortedProjects = [...projectsData].sort((a, b) => {
    const aValid = /^\d{4}-\d{2}$/.test(a.date);
    const bValid = /^\d{4}-\d{2}$/.test(b.date);
    if (aValid !== bValid) return aValid ? -1 : 1;
    if (!aValid) return 0;
    const comparison = a.date.localeCompare(b.date);
    return PROJECT_SORT_ORDER === 'asc' ? comparison : -comparison;
  });

  const handleWatch = (url: string, title: string) => {
    setVideoUrl(url);
    setVideoTitle(title);
  };

  const closeVideo = () => {
    setVideoUrl(null);
    setVideoTitle('');
  };

  return (
    <PageShell>
      <PageHeader title="My Projects" subtitle="A collection of projects I have built, from practical automation tools to full-stack products and research-driven software." />

      <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
        {sortedProjects.map((project, index) => {
          const isLastOdd = index === sortedProjects.length - 1 && sortedProjects.length % 2 === 1;
          return (
            <div
              key={project.id}
              className={isLastOdd ? 'md:col-span-2 md:mx-auto md:w-full md:max-w-xl' : ''}
            >
              <ProjectCard project={project} onWatch={(url) => handleWatch(url, project.title)} index={index} />
            </div>
          );
        })}
      </div>

      {videoUrl && <VideoModal open={true} url={videoUrl} title={videoTitle} onClose={closeVideo} />}
    </PageShell>
  );
};

export default Projects;
