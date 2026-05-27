"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  tx: number;
  ty: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
};

type Pointer = {
  x: number;
  y: number;
  active: boolean;
};

type ParticleTitleProps = {
  lines: string[];
};

export function ParticleTitle({ lines }: ParticleTitleProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const pointerRef = useRef<Pointer>({ x: 0, y: 0, active: false });
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const buildParticles = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(rect.width, 320);
      const isSingleLine = lines.length === 1;
      const height = isSingleLine ? (width < 640 ? 320 : 480) : (width < 640 ? 520 : 820);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const mask = document.createElement("canvas");
      mask.width = Math.floor(width);
      mask.height = Math.floor(height);
      const maskContext = mask.getContext("2d");
      if (!maskContext) return;

      let fontSize = Math.min(width / 4.1, width < 640 ? 132 : 270);
      const lineHeight = fontSize * 1.05;
      const startY = height / 2 - ((lines.length - 1) * lineHeight) / 2;

      maskContext.clearRect(0, 0, width, height);
      maskContext.fillStyle = "#ffffff";
      maskContext.textAlign = "center";
      maskContext.textBaseline = "middle";
      maskContext.font = `700 ${fontSize}px Georgia, serif`;

      if (isSingleLine) {
        const maxLineWidth = width * 0.99;
        const measuredWidth = maskContext.measureText(lines[0]).width;

        if (measuredWidth > maxLineWidth) {
          fontSize = fontSize * (maxLineWidth / measuredWidth);
          maskContext.font = `700 ${fontSize}px Georgia, serif`;
        }
      }

      lines.forEach((line, index) => {
        maskContext.fillText(line, width / 2, startY + index * lineHeight);
      });

      const imageData = maskContext.getImageData(0, 0, width, height);
      const nextParticles: Particle[] = [];
      const gap = width < 640 ? 5 : 6;

      for (let y = 0; y < height; y += gap) {
        for (let x = 0; x < width; x += gap) {
          const alpha = imageData.data[(y * width + x) * 4 + 3];
          if (alpha > 120) {
            nextParticles.push({
              x: Math.random() * width,
              y: Math.random() * height,
              tx: x,
              ty: y,
              vx: 0,
              vy: 0,
              size: Math.random() * 1.25 + 0.75,
              alpha: Math.random() * 0.35 + 0.5
            });
          }
        }
      }

      particlesRef.current = nextParticles;
    };

    const draw = () => {
      const width = canvas.width / Math.min(window.devicePixelRatio || 1, 2);
      const height = canvas.height / Math.min(window.devicePixelRatio || 1, 2);
      const pointer = pointerRef.current;

      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "lighter";

      for (const particle of particlesRef.current) {
        const dx = particle.tx - particle.x;
        const dy = particle.ty - particle.y;
        particle.vx += dx * (reduceMotion ? 0.08 : 0.018);
        particle.vy += dy * (reduceMotion ? 0.08 : 0.018);

        if (pointer.active && !reduceMotion) {
          const mx = particle.x - pointer.x;
          const my = particle.y - pointer.y;
          const distance = Math.sqrt(mx * mx + my * my);
          const radius = 94;

          if (distance < radius && distance > 0.1) {
            const force = (1 - distance / radius) * 2.8;
            particle.vx += (mx / distance) * force;
            particle.vy += (my / distance) * force;
          }
        }

        particle.vx *= reduceMotion ? 0.72 : 0.9;
        particle.vy *= reduceMotion ? 0.72 : 0.9;
        particle.x += particle.vx;
        particle.y += particle.vy;

        context.beginPath();
        context.fillStyle = `rgba(244, 244, 241, ${particle.alpha})`;
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
      }

      if (!reduceMotion) {
        frameRef.current = requestAnimationFrame(draw);
      }
    };

    const handleMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true
      };
    };

    const handleLeave = () => {
      pointerRef.current.active = false;
    };

    buildParticles();
    draw();

    const resizeObserver = new ResizeObserver(() => {
      buildParticles();
    });

    resizeObserver.observe(canvas);
    canvas.addEventListener("pointermove", handleMove);
    canvas.addEventListener("pointerleave", handleLeave);
    window.addEventListener("blur", handleLeave);

    return () => {
      resizeObserver.disconnect();
      canvas.removeEventListener("pointermove", handleMove);
      canvas.removeEventListener("pointerleave", handleLeave);
      window.removeEventListener("blur", handleLeave);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [lines]);

  return <canvas ref={canvasRef} className="particle-title" aria-hidden="true" />;
}
