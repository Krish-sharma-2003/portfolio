import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Copy, Check, ArrowUpRight } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import PageShell from '../components/PageShell';
import PageHeader from '../components/PageHeader';
import ScrollReveal from '../components/ScrollReveal';

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  link: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', website: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [copied, setCopied] = useState(false);

  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'krishsharma792003@gmail.com',
      link: 'mailto:krishsharma792003@gmail.com',
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      value: 'Krish Sharma',
      link: 'https://www.linkedin.com/in/krish-sharma-43b625302/',
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: 'GitHub',
      value: 'Krish-sharma-2003',
      link: 'https://github.com/Krish-sharma-2003',
    },
  ];

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('krishsharma792003@gmail.com');
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website.trim()) return; // honeypot
    if (!validateForm()) return;
    setIsSubmitting(true);
    setStatus(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStatus({ type: 'success', message: "Thank you for your message! I'll get back to you soon." });
      setFormData({ name: '', email: '', message: '', website: '' });
    } catch {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageShell>
      <PageHeader
        title="Get In Touch"
        subtitle="Have a question, project idea, or just want to connect? I'd love to hear from you! Drop me a message and let's start a conversation."
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left: Let's Connect */}
        <ScrollReveal>
          <div className="flex h-full flex-col gap-6">
            <h2 className="font-display text-2xl font-semibold text-white">Let's Connect</h2>

            <div className="flex flex-col gap-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <GlassCard className="group flex h-20 items-center justify-between px-5 py-4" interactive>
                    <div className="flex items-center gap-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-accent">
                        {info.icon}
                      </span>
                      <div>
                        <div className="font-display text-base font-semibold text-white">{info.label}</div>
                        <div className="text-sm text-white/70">{info.value}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {info.label === 'Email' && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleCopyEmail();
                          }}
                          aria-label="Copy email address"
                          className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-accent/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        >
                          {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
                          {copied && (
                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-black/80 px-2 py-1 text-xs text-white">
                              Copied
                            </span>
                          )}
                        </button>
                      )}
                      <ArrowUpRight className="h-4 w-4 text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </GlassCard>
                </a>
              ))}
            </div>

            <GlassCard className="p-5">
              <div className="text-center">
                <h3 className="mb-2 font-display text-lg font-semibold text-white">Response Time</h3>
                <p className="text-sm leading-relaxed text-white/70">
                  I typically respond within <span className="font-semibold text-accent">24 hours</span>. Coffee-fueled
                  coding sessions might delay responses slightly, but I always get back to you!
                </p>
              </div>
            </GlassCard>
          </div>
        </ScrollReveal>

        {/* Right: Form */}
        <ScrollReveal delay={0.1}>
          <GlassCard className="p-6 md:p-8">
            <h2 className="mb-6 font-display text-2xl font-semibold text-white">Send me a message</h2>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Honeypot */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/80">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`glass-input ${errors.name ? 'glass-input-error' : ''}`}
                  placeholder="John Doe"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`glass-input ${errors.email ? 'glass-input-error' : ''}`}
                  placeholder="john@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`glass-input resize-none ${errors.message ? 'glass-input-error' : ''}`}
                  placeholder="Tell me about your project or just say hi!"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
                {isSubmitting ? (
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>

              <div aria-live="polite" className="min-h-[1.25rem]">
                {status && (
                  <p className={`text-sm ${status.type === 'success' ? 'text-accent' : 'text-red-400'}`}>
                    {status.message}
                  </p>
                )}
              </div>
            </form>
          </GlassCard>
        </ScrollReveal>
      </div>
    </PageShell>
  );
};

export default Contact;
