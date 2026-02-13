"use client";

import { Icon } from "@iconify/react";

const skills = [
  {
    title: "Frontend",
    icon: "solar:laptop-minimalistic-linear",
    color: "text-cyan-400",
    items: [
      "React.js / Next.js",
      "TypeScript",
      "TailwindCSS",
      "Zustand / TanStack Query",
      "Component-Driven Dev",
    ],
  },
  {
    title: "Backend",
    icon: "solar:server-square-linear",
    color: "text-indigo-400",
    items: [
      "NestJS / Node.js",
      "Laravel / AdonisJS",
      "PostgreSQL / MongoDB",
      "Redis / Kafka",
      "Microservices (DDD)",
    ],
  },
  {
    title: "Web3 & AI",
    icon: "solar:link-round-angle-linear",
    color: "text-purple-400",
    items: [
      "Solidity / Hardhat / Foundry",
      "Ethers.js / Viem",
      "Sui / Solana SDK",
      "LLM Integration",
      "Smart Contract Indexing",
    ],
  },
  {
    title: "DevOps",
    icon: "solar:cloud-linear",
    color: "text-green-400",
    items: [
      "Docker",
      "CI/CD Pipelines",
      "AWS S3 / Supabase",
      "Nginx / Caddy",
      "Infrastructure Optimization",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mb-32 scroll-mt-32">
      <h2 className="text-2xl text-white font-medium tracking-tight mb-8">Technical Arsenal</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors group"
          >
            <Icon
              icon={skill.icon}
              width="28"
              className={`${skill.color} mb-4 group-hover:scale-110 transition-transform`}
            />
            <h3 className="text-white font-medium mb-3">{skill.title}</h3>
            <ul className="text-sm text-slate-400 space-y-2">
              {skill.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
