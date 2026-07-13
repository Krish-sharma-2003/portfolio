import React, { useEffect, useRef } from 'react';

interface Ball {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  opacity: number;
}

const COLORS = ['#2C49B6', '#3B5BDB', '#4C6EF5', '#7048E8', '#845EF7', '#6741d9'];
const BALL_COUNT = 60;
const MOUSE_RADIUS = 120;

const BallpitBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Mouse tracking
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -999, y: -999 };
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    // Create balls
    const balls: Ball[] = Array.from({ length: BALL_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 3,
      vy: (Math.random() - 0.5) * 3,
      radius: Math.random() * 14 + 8,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      opacity: Math.random() * 0.2 + 0.7,
    }));

    let rafId: number;

    const animate = () => {
      const W = canvas.width;
      const H = canvas.height;

      // Background gradient
      const bg = ctx.createLinearGradient(0, 0, 0, H);
      bg.addColorStop(0, '#0a0e27');
      bg.addColorStop(1, '#1a1f3a');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      const mouse = mouseRef.current;

      // Update physics
      for (let i = 0; i < balls.length; i++) {
        const b = balls[i];

        // Gravity
        b.vy += 0.2;

        // Friction
        b.vx *= 0.99;
        b.vy *= 0.99;

        // Mouse repulsion
        const dx = b.x - mouse.x;
        const dy = b.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
          b.vx += (dx / dist) * force * 2;
          b.vy += (dy / dist) * force * 2;
        }

        // Move
        b.x += b.vx;
        b.y += b.vy;

        // Wall bounce
        if (b.x - b.radius < 0) {
          b.x = b.radius;
          b.vx = Math.abs(b.vx) * 0.75;
        }
        if (b.x + b.radius > W) {
          b.x = W - b.radius;
          b.vx = -Math.abs(b.vx) * 0.75;
        }

        // Floor bounce
        if (b.y + b.radius > H) {
          b.y = H - b.radius;
          b.vy = -Math.abs(b.vy) * 0.8;
          if (Math.abs(b.vy) < 2) {
            b.vy = -(Math.random() * 4 + 6);
          }
        }

        // Ceiling bounce
        if (b.y - b.radius < 0) {
          b.y = b.radius;
          b.vy = Math.abs(b.vy) * 0.75;
        }
      }

      // Ball-ball collisions
      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
          const a = balls[i];
          const b = balls[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = a.radius + b.radius;
          if (dist < minDist && dist > 0) {
            const overlap = (minDist - dist) / 2;
            const nx = dx / dist;
            const ny = dy / dist;
            a.x -= nx * overlap;
            a.y -= ny * overlap;
            b.x += nx * overlap;
            b.y += ny * overlap;
            // Velocity exchange
            const relVx = b.vx - a.vx;
            const relVy = b.vy - a.vy;
            const dot = relVx * nx + relVy * ny;
            if (dot < 0) {
              a.vx += dot * nx * 0.5;
              a.vy += dot * ny * 0.5;
              b.vx -= dot * nx * 0.5;
              b.vy -= dot * ny * 0.5;
            }
          }
        }
      }

      // Draw balls
      for (const b of balls) {
        ctx.save();
        ctx.globalAlpha = b.opacity;
        ctx.shadowBlur = 20;
        ctx.shadowColor = b.color;

        // Glassy radial gradient
        const grad = ctx.createRadialGradient(
          b.x - b.radius * 0.3,
          b.y - b.radius * 0.3,
          b.radius * 0.1,
          b.x,
          b.y,
          b.radius
        );
        grad.addColorStop(0, 'rgba(255,255,255,0.4)');
        grad.addColorStop(0.4, b.color);
        grad.addColorStop(1, b.color + '99');

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default BallpitBackground;
