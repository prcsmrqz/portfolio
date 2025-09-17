"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

export const TracingBeam = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setSvgHeight(contentRef.current.offsetHeight);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [0, svgHeight]),
    { stiffness: 100, damping: 40 }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, svgHeight * 1.8]),
    { stiffness: 100, damping: 40 }
  );

  return (
    <motion.div
      ref={ref}
      className={cn("relative mx-auto h-full w-full max-w-4xl", className)}
    >
      <div className="absolute top-1 -left-4 md:-left-20">
        <motion.div
          transition={{ duration: 0.5 }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          className="border-netural-200 ml-[27px] flex h-4 w-4 items-center justify-center rounded-full shadow-sm"
        >
          <motion.div
            transition={{ duration: 0.5 }}
            animate={{
              backgroundColor:
                scrollYProgress.get() > 0 ? "#4d4d4dff" : "#4d4d4dff",
              borderColor:
                scrollYProgress.get() > 0 ? "#4d4d4dff" : "#4d4d4dff",
            }}
            className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
          />
        </motion.div>
        <svg
          viewBox={`0 10 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-6 block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 10 0 V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
          />
          <motion.path
            d={`M 10 0 V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
          />
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              {/* Start transparent (for initial fade-in) */}
              <stop offset="0" stopColor="#18CCFC" stopOpacity="0" />
              {/* Quickly become solid color */}
              <stop offset="0.05" stopColor="#18CCFC" stopOpacity="1" />
              <stop offset="0.4" stopColor="#6344F5" stopOpacity="1" />
              {/* Fade out only at the end */}
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
