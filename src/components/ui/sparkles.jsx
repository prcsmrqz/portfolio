"use client";
import React, { useId, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "motion/react";

export const SparklesCore = (props) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;

  const [init, setInit] = useState(false);
  const [density, setDensity] = useState(particleDensity || 80);

  useEffect(() => {
    // Lower density on mobile
    if (window.innerWidth < 768) {
      setDensity(30);
    }
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const controls = useAnimation();

  const particlesLoaded = async (container) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: { duration: 1 },
      });
    }
  };

  const generatedId = useId();

  return (
    <motion.div animate={controls} className={cn("opacity-0", className)}>
      {init && (
        <Particles
          id={id || generatedId}
          className={cn("h-full w-full")}
          particlesLoaded={particlesLoaded}
          options={{
            background: { color: { value: background || "transparent" } },
            fullScreen: { enable: false, zIndex: 1 },
            fpsLimit: 60, // ⬅️ reduced
            interactivity: {
              events: {
                onClick: { enable: false }, // ⬅️ disabled
                onHover: { enable: false },
                resize: true,
              },
            },
            particles: {
              color: { value: particleColor || "#ffffff" },
              move: {
                enable: true,
                speed: { min: 0.1, max: 0.6 }, // ⬅️ slower movement
                outModes: { default: "out" },
              },
              number: {
                density: { enable: true, width: 400, height: 400 },
                value: density, // ⬅️ dynamic based on device
              },
              opacity: {
                value: { min: 0.1, max: 0.8 },
                animation: { enable: true, speed: speed || 2, sync: false },
              },
              shape: { type: "circle" },
              size: { value: { min: minSize || 0.6, max: maxSize || 1.2 } },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
};
