"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TerminalDemo } from "./TerminalDemo";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-16 lg:pt-32">
      <div className="container mx-auto grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
            <span className="mr-1 flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            v1.0.0 Now Available
          </div>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
            Audit your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-gradient-x">
              Codebase
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-neutral-400">
            Secure, zero-configuration AI auditing. ScanoRepo analyzes your
            project structure, dependencies, and scripts to generate actionable
            insights and documentation.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/docs"
              className="group inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105 active:scale-95"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <div className="group relative">
              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary to-secondary opacity-30 blur transition duration-200 group-hover:opacity-75"></div>
              <div className="relative flex items-center rounded-lg bg-black px-6 py-3 text-sm font-mono text-neutral-300">
                <span className="mr-2 text-primary">$</span>
                npm i -g scanorepo
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none flex justify-center"
        >
          <div className="absolute -inset-4 rounded-full bg-primary/20 blur-[100px] opacity-20 -z-10"></div>
          <TerminalDemo />
        </motion.div>
      </div>
    </section>
  );
}
