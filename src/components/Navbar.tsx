"use client";

import { Icon } from "@iconify/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.5,
    });
  }, { scope: navRef });

  return (
    <nav ref={navRef} className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg px-4">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
        <a href="#" className="text-white font-medium tracking-tight hover:text-indigo-400 transition-colors">
          JS
        </a>
        <div className="flex gap-6 text-xs font-medium text-slate-400">
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-white transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#experience" className="hover:text-white transition-colors">
            Experiences
          </a>
        </div>
        <a
          href="mailto:juuns99@gmail.com"
          className="text-white hover:text-indigo-400 transition-colors"
        >
          <Icon icon="solar:letter-linear" width="20" />
        </a>
      </div>
    </nav>
  );
}
