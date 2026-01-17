"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function FluidGlass() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden bg-black">
      <svg className="hidden">
        <defs>
          <filter id="fluid-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01"
              numOctaves="3"
            >
              <animate
                attributeName="baseFrequency"
                dur="60s"
                values="0.01;0.02;0.01"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="100" />
          </filter>
        </defs>
      </svg>

      <div
        className="absolute inset-0 opacity-40"
        style={{ filter: "url(#fluid-filter)" }}
      >
        <motion.div
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute -top-[20%] -left-[10%] h-[600px] w-[600px] rounded-full bg-primary blur-[80px] opacity-40 mix-blend-screen will-change-transform"
        />
        <motion.div
          animate={{
            x: [0, -100, 100, 0],
            y: [0, 100, -100, 0],
            scale: [1, 1.3, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-[20%] -right-[10%] h-[500px] w-[500px] rounded-full bg-secondary blur-[80px] opacity-40 mix-blend-screen will-change-transform"
        />
        <motion.div
          animate={{
            x: [0, 50, -50, 0],
            y: [0, 50, -50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-[-10%] left-[20%] h-[700px] w-[700px] rounded-full bg-purple-900 blur-[100px] opacity-30 mix-blend-screen will-change-transform"
        />
      </div>

      {/* Noise overlay for texture */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay"></div>
    </div>
  );
}
