"use client";

import { motion } from "framer-motion";
import { Scan, FileText, Package, CloudLightning } from "lucide-react";

const features = [
  {
    icon: Scan,
    title: "Deep Scanning",
    description:
      "Analyzes project structure, detecting missing configs, scripts, and potential issues.",
  },
  {
    icon: CloudLightning,
    title: "AI Powered",
    description:
      "Uses advanced inference models to provide context-aware explanations and fixes.",
  },
  {
    icon: FileText,
    title: "Auto-Docs",
    description:
      "Generates comprehensive SCANNED.md documentation for your repository automatically.",
  },
  {
    icon: Package,
    title: "Dependency Audit",
    description:
      "Interactive management interface for auditing and managing npm/yarn packages.",
  },
];

export function Features() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Advanced Capabilities
        </h2>
        <p className="mt-4 text-neutral-400">
          Everything you need to maintain a healthy codebase.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card group relative overflow-hidden rounded-2xl p-8 transition-all hover:-translate-y-1 hover:bg-white/[0.03]"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-all group-hover:bg-primary/20" />

            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 text-primary group-hover:text-white transition-colors">
              <feature.icon size={24} />
            </div>

            <h3 className="mb-2 text-lg font-semibold text-white">
              {feature.title}
            </h3>
            <p className="text-sm text-neutral-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
