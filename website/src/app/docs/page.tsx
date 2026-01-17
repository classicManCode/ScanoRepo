"use client";

import { motion } from "framer-motion";
import { Terminal, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function DocsPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const sections = [
    {
      title: "Installation",
      content:
        "Install ScanoRepo globally via npm to use it anywhere in your terminal.",
      code: "npm install -g scanorepo",
      id: "install",
    },
    {
      title: "Project Scanning",
      content:
        "Audit your project for configuration issues, missing scripts, and environment variables.",
      code: "scanorepo scan",
      id: "scan",
    },
    {
      title: "Auto Documentation",
      content:
        "Generate a professional SCANNED.md file summarizing your project's architecture.",
      code: "scanorepo doc",
      id: "doc",
    },
    {
      title: "Dependency Audit",
      content:
        "Launch an interactive interface to manage and audit your project packages.",
      code: "scanorepo deps",
      id: "deps",
    },
    {
      title: "Health Check",
      content:
        "Run a comprehensive health check (sequential execution of scan and doc).",
      code: "scanorepo check",
      id: "check",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-24 flex flex-col lg:flex-row gap-12">
      <aside className="lg:w-64 shrink-0">
        <div className="sticky top-24">
          <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">
            Documentation
          </h2>
          <nav className="flex flex-col gap-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-sm text-neutral-400 hover:text-primary transition-colors py-1"
              >
                {s.title}
              </a>
            ))}
          </nav>
        </div>
      </aside>

      <main className="flex-grow max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-4">Documentation</h1>
          <p className="text-lg text-neutral-400 mb-12">
            Learn how to use ScanoRepo to audit your repositories and generate
            documentation with AI.
          </p>

          <div className="space-y-16">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Terminal size={18} />
                  </div>
                  {section.title}
                </h2>
                <p className="text-neutral-400 mb-6 leading-relaxed">
                  {section.content}
                </p>
                <div className="relative group">
                  <div className="absolute -inset-px bg-gradient-to-r from-primary/50 to-secondary/50 rounded-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative bg-black rounded-xl p-4 font-mono text-sm flex items-center justify-between border border-white/5">
                    <code className="text-primary">$ {section.code}</code>
                    <button
                      onClick={() => copyToClipboard(section.code, section.id)}
                      className="text-neutral-500 hover:text-white transition-colors"
                    >
                      {copied === section.id ? (
                        <Check size={16} className="text-green-500" />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <div className="mt-20 p-8 glass-card rounded-2xl border-primary/20 bg-primary/5">
            <h3 className="text-xl font-bold text-white mb-2 underline decoration-primary decoration-2 underline-offset-4">
              AI-Driven Insights
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              ScanoRepo uses a secure proxy to connect to high-performance
              inference models. No personal API keys are required. The AI
              analyzes your project&apos;s unique structure to provide technical
              explanations for every issue detected.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
