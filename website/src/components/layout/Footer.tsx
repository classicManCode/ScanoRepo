import Link from "next/link";
import { Github, Twitter, AtSign, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.05)] bg-[rgba(5,5,5,0.5)] py-8 backdrop-blur-sm">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} ScanoRepo. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="https://x.com/Been_jammin_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-primary transition-colors"
          >
            <Twitter size={18} />
          </Link>
          <Link
            href="https://www.threads.com/@jiggybenn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-primary transition-colors"
          >
            <AtSign size={18} />
          </Link>
          <Link
            href="https://github.com/classicManCode"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors"
          >
            <Github size={18} />
          </Link>
          <Link
            href="https://benjamin-onyia.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors"
          >
            <Globe size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
