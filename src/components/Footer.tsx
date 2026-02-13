"use client";

import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-8 text-center">
      <h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight mb-6">
        Ready to ship your next big thing?
      </h2>
      <p className="text-slate-400 mb-8 max-w-xl mx-auto">
        {`Whether it's a complex Web3 protocol, an AI-integrated SaaS, or a high-scale backend system, I'm ready to help you build it.`}
      </p>

      <a
        href="mailto:juuns99@gmail.com"
        className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 font-medium text-neutral-900 transition-all hover:bg-neutral-200 hover:scale-105"
      >
        <Icon icon="solar:letter-linear" className="mr-2" />
        Get in Touch
      </a>

      <div className="mt-16 flex flex-col items-center gap-4 text-xs text-slate-600">
        <div className="flex gap-6">
          <a href="https://linkedin.com/in/juuns99" className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/juniardys" className="hover:text-white transition-colors">
            GitHub
          </a>
        </div>
        <p>© 2026 Juniardy Setiowidayoga. All rights reserved.</p>
      </div>
    </footer>
  );
}
