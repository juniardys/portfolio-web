"use client";

import { Icon } from "@iconify/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".hero-element", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      delay: 0.5,
    });
  }, { scope: containerRef });

  return (
    <header ref={containerRef} className="flex flex-col text-center mb-32 relative items-center">
      <div className="hero-element inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
        </span>
        Available for Hire & Contracts
      </div>

      <h1 className="hero-element md:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tighter mb-6">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
          Juniardy Setiowidayoga
        </span>
      </h1>

      <p className="hero-element md:text-xl leading-relaxed text-lg text-slate-400 max-w-2xl">
        Fullstack Engineer with 9+ years of experience. I architect scalable backends and craft
        intuitive frontends for AI, Blockchain, and high-impact MVPs.
      </p>

      <div className="hero-element mt-10 flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-white px-6 font-medium text-neutral-900 transition-all duration-300 hover:bg-neutral-200 hover:ring-2 hover:ring-neutral-200 hover:ring-offset-2 hover:ring-offset-neutral-900"
        >
          <span className="mr-2">Explore Portfolio</span>
          <Icon
            icon="solar:arrow-right-linear"
            width="18"
            className="group-hover:translate-x-1 transition-transform"
          />
        </a>
        <a
          href="https://drive.google.com/file/d/1NvJKja0HUd_bx25bh6qBzqaP0yNgah-_/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center justify-center rounded-md border border-white/10 bg-white/5 px-6 font-medium text-white transition-all hover:bg-white/10 group"
        >
          <span className="mr-2">Download Resume</span>
          <Icon
            icon="solar:file-download-linear"
            width="18"
            className="group-hover:translate-y-0.5 transition-transform"
          />
        </a>
      </div>

      {/* Stats */}
      <div className="hero-element mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-white/5 pt-10 w-full max-w-4xl">
        <div className="text-center">
          <div className="text-3xl font-medium text-white tracking-tight">9+</div>
          <div className="text-xs text-slate-500 uppercase tracking-wide mt-1">Years Exp</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-medium text-white tracking-tight">10+</div>
          <div className="text-xs text-slate-500 uppercase tracking-wide mt-1">
            Products Shipped
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-medium text-white tracking-tight">100K+</div>
          <div className="text-xs text-slate-500 uppercase tracking-wide mt-1">Users Served</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-medium text-white tracking-tight">2</div>
          <div className="text-xs text-slate-500 uppercase tracking-wide mt-1">Hackathon Wins</div>
        </div>
      </div>
    </header>
  );
}
