import React, { useEffect, useRef } from 'react';

const LightfallBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = Math.random() * 1 + 0.5;
        this.life = 1;
        this.maxLife = Math.random() * 2 + 2;
        this.size = Math.random() * 2 + 1;
        this.color = `hsl(${220 + Math.random() * 30}, 100%, ${50 + Math.random() * 30}%)`;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= 1 / (this.maxLife * 60);
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.life);
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      isDead() {
        return this.life <= 0 || this.y > canvas.height;
      }
    }

    const particles: Particle[] = [];

    // Create initial particles
    for (let i = 0; i < 80; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      // Dark blue background with gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#0a0e27');
      gradient.addColorStop(0.5, '#1a1f3a');
      gradient.addColorStop(1, '#0f1729');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add slight blue glow overlay
      ctx.fillStyle = 'rgba(30, 58, 138, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw(ctx);

        if (particles[i].isDead()) {
          particles.splice(i, 1);
        }
      }

      // Create new particles
      if (particles.length < 100) {
        particles.push(new Particle());
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ background: '#0a0e27' }}
    />
  );
};

export default LightfallBackground;
