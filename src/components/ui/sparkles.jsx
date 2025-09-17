"use client";
import React, { useId, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const SparklesCore = ({
  id,
  className,
  background,
  minSize,
  maxSize,
  speed,
  particleColor,
  particleDensity,
  fpsLimit,
}) => {
  const [init, setInit] = useState(false);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const generatedId = useId();

  return (
    <motion.div className={cn(className)}>
      {init && (
        <Particles
          id={id || generatedId}
          className="h-full w-full"
          options={{
            background: { color: { value: background || "transparent" } },
            fullScreen: { enable: false, zIndex: 1 },
            fpsLimit: isMobile ? 15 : fpsLimit || 120,
            interactivity: {
              events: {
                onClick: { enable: !isMobile, mode: "push" },
                onHover: { enable: false },
                resize: true,
              },
              modes: {
                push: { quantity: 2 },
              },
            },
            particles: {
              color: { value: particleColor || "#ffffff" },
              move: {
                enable: true,
                direction: "none",
                speed: { min: 0.1, max: isMobile ? 0.5 : 1 },
                outModes: { default: "out" },
              },
              number: {
                density: { enable: true, width: 400, height: 400 },
                value: isMobile ? 5 : particleDensity || 120,
              },
              opacity: {
                value: isMobile ? 0.8 : { min: 0.1, max: 1 },
                animation: { enable: !isMobile, speed: speed || 4 },
              },
              shape: { type: "circle" },
              size: { value: { min: minSize || 1, max: maxSize || 3 } },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
};
