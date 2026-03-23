"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 120;

function getFramePath(index: number): string {
  const padded = String(index).padStart(3, "0");
  return `/sequence/frame_${padded}_delay-0.066s.png`;
}

export default function ScrollyCanvas({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const currentFrameRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  // Draw frame with cover-fit
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[Math.round(index)];

    if (!canvas || !ctx || !img || !img.complete || !img.naturalWidth) return;

    const { width: cw, height: ch } = canvas;
    const { naturalWidth: iw, naturalHeight: ih } = img;

    // Cover-fit calculation
    const scale = Math.max(cw / iw, ch / ih);
    const sw = cw / scale;
    const sh = ch / scale;
    const sx = (iw - sw) / 2;
    const sy = (ih - sh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
  }, []);

  // Preload all images
  useEffect(() => {
    let loaded = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loaded++;
        setLoadProgress(Math.floor((loaded / TOTAL_FRAMES) * 100));
        if (loaded === TOTAL_FRAMES) {
          setIsLoaded(true);
          drawFrame(0);
        }
      };
      img.onerror = () => {
        loaded++;
        setLoadProgress(Math.floor((loaded / TOTAL_FRAMES) * 100));
      };
      images[i] = img;
    }

    imagesRef.current = images;
  }, [drawFrame]);

  // Handle canvas resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (isLoaded) {
        drawFrame(currentFrameRef.current);
      }
    };

    handleResize();

    const observer = new ResizeObserver(handleResize);
    observer.observe(document.documentElement);

    return () => observer.disconnect();
  }, [isLoaded, drawFrame]);

  // Update frame on scroll
  useMotionValueEvent(frameIndex, "change", (latest) => {
    const idx = Math.round(latest);
    currentFrameRef.current = idx;
    if (isLoaded) {
      requestAnimationFrame(() => drawFrame(idx));
    }
  });

  return (
    <>
      {/* Loading overlay */}
      {!isLoaded && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0f]">
          <div className="mb-8">
            <span className="font-heading text-2xl font-bold text-white tracking-tight">
              KKS<span className="text-accent">.</span>
            </span>
          </div>
          <div className="relative w-56 h-[2px] bg-white/10 rounded-full overflow-hidden mb-4">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-accent to-accent-secondary transition-all duration-300 ease-out"
              style={{ width: `${loadProgress}%` }}
            />
          </div>
          <p className="text-xs text-white/30 font-body tracking-[0.3em] uppercase">
            Loading {loadProgress}%
          </p>
        </div>
      )}

      {/* Sticky canvas */}
      <div className="sticky top-0 h-screen w-full">
        <canvas
          ref={canvasRef}
          className="block w-full h-full"
          style={{ background: "#0a0a0f" }}
        />
        {/* Vignette overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(10,10,15,0.6) 100%)",
          }}
        />
      </div>
    </>
  );
}
