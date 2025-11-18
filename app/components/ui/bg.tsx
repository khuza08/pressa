'use client';

import { useEffect, useRef } from 'react';

interface Blob {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  speed: number;
  offset: number;
  sizeBase: number;
  sizeVar: number;
  opacity: number;
  isFollowing: boolean;
}

export default function BgGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0.5, y: 0.5 });
  const prevMousePos = useRef({ x: 0.5, y: 0.5 });
  const animationFrame = useRef<number>(0);
  const time = useRef(0);
  const lastMoveTime = useRef(Date.now());
  const isIdle = useRef(false);
  const activeBlob = useRef<number | null>(null);
  
  const blobs = useRef<Blob[]>([
    { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5, speed: 0.7, offset: 0, sizeBase: 0.40, sizeVar: 0.05, opacity: 0.15, isFollowing: false },
    { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5, speed: 0.9, offset: 2, sizeBase: 0.24, sizeVar: 0.06, opacity: 0.12, isFollowing: false },
    { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5, speed: 0.6, offset: 4, sizeBase: 0.22, sizeVar: 0.05, opacity: 0.13, isFollowing: false },
    { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5, speed: 0.8, offset: 1.5, sizeBase: 0.26, sizeVar: 0.04, opacity: 0.11, isFollowing: false },
    { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5, speed: 1.1, offset: 3, sizeBase: 0.28, sizeVar: 0.05, opacity: 0.14, isFollowing: false },
    { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5, speed: 0.5, offset: 5, sizeBase: 0.30, sizeVar: 0.05, opacity: 0.10, isFollowing: false },
    { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5, speed: 0.75, offset: 2.5, sizeBase: 0.23, sizeVar: 0.04, opacity: 0.12, isFollowing: false },
    { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5, speed: 0.95, offset: 4.5, sizeBase: 0.30, sizeVar: 0.06, opacity: 0.13, isFollowing: false },
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Store original device pixel ratio
    const dpr = window.devicePixelRatio || 1;
    const scale = 0.1; // Reduced scale for performance
    const scaledDpr = dpr * scale;

    const resizeCanvas = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      canvas.width = width * scaledDpr;
      canvas.height = height * scaledDpr;
      
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      ctx.scale(scaledDpr, scaledDpr);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      prevMousePos.current = { ...mousePos.current };
      mousePos.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
      lastMoveTime.current = Date.now();
      isIdle.current = false;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let frameCount = 0;
    const animate = () => {
      if (!ctx || !canvas) return;

      frameCount++;
      if (frameCount % 2 !== 0) {
        animationFrame.current = requestAnimationFrame(animate);
        return;
      }

      time.current += 0.01;

      const timeSinceMove = Date.now() - lastMoveTime.current;
      if (timeSinceMove > 2000) {
        isIdle.current = true;
        activeBlob.current = null;
      }

      const velocityX = Math.abs(mousePos.current.x - prevMousePos.current.x);
      const velocityY = Math.abs(mousePos.current.y - prevMousePos.current.y);
      const velocity = Math.sqrt(velocityX * velocityX + velocityY * velocityY);
      const velocityThreshold = 0.02;

      if (velocity > velocityThreshold && activeBlob.current !== null) {
        blobs.current[activeBlob.current].isFollowing = false;
        activeBlob.current = null;
      }

      if (activeBlob.current === null && !isIdle.current) {
        let nearestDist = Infinity;
        let nearestIndex = -1;

        for (let i = 0; i < blobs.current.length; i++) {
          const blob = blobs.current[i];
          const dx = blob.x - mousePos.current.x;
          const dy = blob.y - mousePos.current.y;
          const dist = dx * dx + dy * dy;
          
          if (dist < 0.09 && dist < nearestDist) {
            nearestDist = dist;
            nearestIndex = i;
          }
        }

        if (nearestIndex !== -1) {
          activeBlob.current = nearestIndex;
          blobs.current[nearestIndex].isFollowing = true;
        }
      }

      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width / scaledDpr, canvas.height / scaledDpr);

      for (let i = 0; i < blobs.current.length; i++) {
        const blob = blobs.current[i];
        
        if (blob.isFollowing && activeBlob.current === i) {
          blob.targetX = mousePos.current.x;
          blob.targetY = mousePos.current.y;
          blob.x += (blob.targetX - blob.x) * 0.06;
          blob.y += (blob.targetY - blob.y) * 0.06;
        } else {
          blob.targetX = 0.5 + Math.sin(time.current * blob.speed + blob.offset) * 0.35;
          blob.targetY = 0.5 + Math.cos(time.current * (blob.speed * 0.8) + blob.offset) * 0.35;
          blob.x += (blob.targetX - blob.x) * 0.05;
          blob.y += (blob.targetY - blob.y) * 0.05;
        }

        const blobX = blob.x * (canvas.width / scaledDpr);
        const blobY = blob.y * (canvas.height / scaledDpr);
        const blobSize = (canvas.width / scaledDpr) * (blob.sizeBase + Math.sin(time.current * (blob.speed * 1.2) + i) * blob.sizeVar);

        const gradient = ctx.createRadialGradient(blobX, blobY, 0, blobX, blobY, blobSize);
        const opacityMultiplier = blob.isFollowing ? 1.3 : 1;
        
        gradient.addColorStop(0, `rgba(255, 255, 255, ${blob.opacity * opacityMultiplier})`);
        gradient.addColorStop(0.5, `rgba(255, 255, 255, ${blob.opacity * 0.4 * opacityMultiplier})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width / scaledDpr, canvas.height / scaledDpr);
      }

      animationFrame.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ filter: 'blur(128px)' }}
    />
  );
}