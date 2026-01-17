"use client";

import { motion } from "framer-motion";
import { Github, Twitter, AtSign, Globe } from "lucide-react";
import Link from "next/link";

export default function AuthorPage() {
  const socials = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/classicManCode",
      label: "@classicManCode",
    },
    {
      name: "X (Twitter)",
      icon: Twitter,
      href: "https://x.com/Been_jammin_",
      label: "@Been_jammin_",
    },
    {
      name: "Threads",
      icon: AtSign,
      href: "https://www.threads.com/@jiggybenn",
      label: "@jiggybenn",
    },
    {
      name: "Portfolio",
      icon: Globe,
      href: "https://benjamin-onyia.vercel.app/",
      label: "benjamin-onyia.vercel.app",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-4xl"
      >
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-secondary p-1">
              <div className="h-full w-full rounded-[calc(1rem-4px)] bg-[#050505] flex items-center justify-center">
                {/* Placeholder for actual image if available, else initials */}
                <span className="text-5xl font-bold text-white">BO</span>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-white md:text-5xl">
                Benjamin Onyia
              </h1>
              <p className="mt-2 text-lg text-primary font-medium tracking-wide">
                Creator of ScanoRepo
              </p>
              <p className="mt-6 text-neutral-400 leading-relaxed max-w-2xl">
                I am a software engineer passionate about building developer
                tools that simplify workflows. ScanoRepo was born out of a
                desire to make project auditing and documentation seamless using
                the power of AI.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {socials.map((social, idx) => (
              <Link
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-4 transition-all hover:bg-white/10 hover:border-primary/50"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black text-neutral-400 group-hover:text-primary transition-colors">
                    <social.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 uppercase font-bold tracking-widest">
                      {social.name}
                    </p>
                    <p className="text-sm text-neutral-300 font-medium group-hover:text-white transition-colors">
                      {social.label}
                    </p>
                  </div>
                </div>
                <div className="text-neutral-600 transition-transform group-hover:translate-x-1 group-hover:text-primary">
                  <Twitter className="h-4 w-4 rotate-[135deg]" />{" "}
                  {/* Arrow icon substitute */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
