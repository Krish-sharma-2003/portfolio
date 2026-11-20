import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import PageShell from '../components/PageShell';
import PageHeader from '../components/PageHeader';
import ScrollReveal from '../components/ScrollReveal';

const BASE = import.meta.env.BASE_URL;
const ABOUT_PHOTO = `${BASE}krish_bhai.jpg`;
const RESUME_PATH = `${BASE}Krish_Sharma_Resume.pdf`;

const About: React.FC = () => {
  return (
    <PageShell>
      <PageHeader title="About Me" subtitle="A bit about who I am and what I do." />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
        <ScrollReveal>
          <div className="max-w-[65ch]">
            <h2 className="mb-6 font-display text-3xl font-bold text-white">Hey there!</h2>
            <div className="space-y-4 text-[17px] leading-[1.75] text-white/80">
              <p>
                I'm Krish, a passionate computer science student who fell in love with coding during my first "Hello World" program.
                What started as curiosity has evolved into a genuine passion for creating digital solutions that make a difference.
              </p>
              <p>
                Currently pursuing my degree while diving deep into web development, I spend my days (and quite a few nights)
                learning new technologies, building projects, and solving coding challenges. I believe great software comes from
                understanding both the technical details and the human experience.
              </p>
              <p>
                When I'm not coding, you'll find me sketching UI designs, reading tech blogs, or collaborating with fellow
                developers on exciting projects. I'm always eager to learn, grow, and contribute to meaningful work.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="chip">Computer Science student</span>
              <span className="chip">SIH 2026 - Top 20 of 180</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={RESUME_PATH} target="_blank" rel="noopener noreferrer" className="btn-glass">
                View Resume
              </a>
              <Link to="/contact" className="btn-primary">
                Contact Me
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="relative flex justify-center">
            <div className="absolute -inset-6 rounded-[32px] bg-accent/10 blur-2xl" aria-hidden="true" />
            <GlassCard className="relative w-full max-w-sm overflow-hidden p-3" tilt interactive>
              <img
                src={ABOUT_PHOTO}
                alt="Krish Sharma, computer science student and software developer"
                width={400}
                height={500}
                loading="lazy"
                className="h-full w-full rounded-[24px] object-cover"
                style={{ borderRadius: '24px' }}
              />
            </GlassCard>
          </div>
        </ScrollReveal>
      </div>
    </PageShell>
  );
};

export default About;
