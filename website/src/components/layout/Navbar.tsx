"use client";

import Link from "next/link";
import { Github } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(255,255,255,0.05)] bg-[rgba(5,5,5,0.7)] backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter text-white"
        >
          Scano<span className="text-primary">Repo</span>
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="/docs"
            className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
          >
            Docs
          </Link>
          <Link
            href="/author"
            className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
          >
            Author
          </Link>
          <Link
            href="https://github.com/classicManCode"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <Github size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
