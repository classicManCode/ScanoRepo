"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function TerminalDemo() {
  const [lines, setLines] = useState<string[]>([]);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) {
      setTimeout(() => setStarted(true), 1000);
      return;
    }

    const output = [
      "> scanorepo scan",
      "Scanning project...",
      "✔ Package.json found",
      "✔ Core scripts validated",
      "⚠ Missing .env file (Template available)",
      "ℹ TSConfig matches source files",
      "Scan complete. 1 warning found.",
      "Generating SCANNED.md...",
      "Done!",
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex >= output.length) {
        clearInterval(interval);
        setTimeout(() => {
          setLines([]);
          currentIndex = 0; // Loop
        }, 5000);
        return;
      }
      setLines((prev) => [...prev, output[currentIndex]]);
      currentIndex++;
    }, 800);

    return () => clearInterval(interval);
  }, [started]);

  return (
    <div className="glass-card w-full max-w-lg overflow-hidden rounded-xl border border-[rgba(255,255,255,0.1)] bg-[#0a0a0a]/80 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center gap-1.5 border-b border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500/20" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/20" />
        <div className="h-3 w-3 rounded-full bg-green-500/20" />
        <div className="ml-2 text-xs font-mono text-neutral-500">bash</div>
      </div>
      <div className="h-80 overflow-y-auto p-4 font-mono text-sm text-neutral-300 scrollbar-hide">
        <div className="flex flex-col gap-2">
          {!started && (
            <div className="flex items-center gap-2">
              <span className="text-green-500">$</span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block h-4 w-2 bg-neutral-400"
              />
            </div>
          )}
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={cn(
                "flex items-center gap-2",
                line.startsWith(">") && "text-white font-bold",
                line.includes("✔") && "text-green-400",
                line.includes("⚠") && "text-yellow-400",
                line.includes("ℹ") && "text-blue-400",
              )}
            >
              {line.startsWith(">") ? (
                <>
                  <span className="text-green-500">$</span>
                  <span>{line.substring(2)}</span>
                </>
              ) : (
                <span>{line}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
