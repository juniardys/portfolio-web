"use client";

import { Icon } from "@iconify/react";

export default function About() {
  return (
    <section id="about" className="mb-32 scroll-mt-32">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/3 sticky top-32">
          <h2 className="text-2xl text-white font-medium tracking-tight mb-4 flex items-center gap-2">
            <Icon icon="solar:user-id-linear" className="text-indigo-400" /> About Me
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed mb-6">
            I approach engineering with a product mindset. I don't just write code; I understand user
            goals, make thoughtful technical decisions, and collaborate closely with founders to
            deliver outcomes that matter.
          </p>
          <div className="flex gap-3">
            <a
              href="https://linkedin.com/in/juuns99"
              target="_blank"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
            >
              <Icon icon="solar:link-circle-linear" width="20" />
            </a>
            <a
              href="https://github.com/juniardys"
              target="_blank"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
            >
              <Icon icon="mdi:github" width="20" />
            </a>
            <a
              href="mailto:juuns99@gmail.com"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
            >
              <Icon icon="solar:letter-linear" width="20" />
            </a>
          </div>
        </div>
        <div className="md:w-2/3 bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
          <p className="text-base text-slate-300 leading-7 mb-6">
            Currently based in Surabaya, Indonesia, working remotely for global teams (Singapore,
            etc.). I specialize in turning early-stage ideas into functional, user-ready
            applications.
          </p>
          <p className="text-base text-slate-300 leading-7 mb-6">
            My expertise spans both the reliability of Web2 (NestJS, React, PostgreSQL) and the
            bleeding edge of Web3 (Solidity, Rust, Viem, Solana SDK). Recently, I've been heavily
            involved in AI integration, building MVP products that combine LLMs with blockchain
            infrastructure.
          </p>
          <p className="text-base text-slate-300 leading-7">
            Whether it's optimizing backend queries for a platform serving 10K+ users like Moladin,
            or winning 2nd place at the ETHSEA Lisk Hackathon with a Real World Asset project, I
            deliver quality under pressure.
          </p>
        </div>
      </div>
    </section>
  );
}
