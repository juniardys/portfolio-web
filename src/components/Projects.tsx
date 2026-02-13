"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";

const projects = [
  {
    title: "Market5 Pro",
    subtitle: "AI Marketing Platform",
    description: "AI-powered platform for marketing agencies with KOL discovery and strategy tools.",
    tags: ["AI", "SaaS"],
    tech: ["NestJS", "Langchain", "Next.js", "PostgreSQL"],
    icon: "solar:chat-square-call-linear",
    image: "/images/market5-pro.png",
    overview:
      "Market5 Pro is an AI platform designed for marketing agencies, featuring intelligent KOL discovery and an AI strategy guru.",
    responsibilities: [
      "Addressed the need for data-driven marketing by setting up backend REST APIs using NestJS and TypeScript.",
      "implemented AI agents with RAG using Langchain to provide KOL recommendations and strategic insights.",
      "Integrated Apify for KOL finding and established CI/CD pipelines with Komo.do for reliable staging and production deployments.",
    ],
  },
  {
    title: "Rishu",
    subtitle: "Mobile-First DeFi Platform",
    description: "DeFi app on Katana blockchain for trading meme tokens via mobile.",
    tags: ["Web3", "DeFi"],
    tech: ["NestJS", "Web3", "Solidity", "Docker", "PostgreSQL"],
    icon: "solar:graph-up-linear",
    image: "/images/rishu.jpg",
    overview:
      "Rishu is an Engineering Lead project built to simplify meme token trading on the Katana blockchain. It enables users to buy and sell tokens directly from mobile devices with streamlined fiat deposits.",
    responsibilities: [
      "Addressed the lack of mobile-friendly DeFi by acting as Engineering Lead to architect the full system.",
      "Developed a scalable backend with NestJS and Prisma, integrating Turnkey for seamless custodial wallets.",
      "Shipped the MVP on Katana’s launch day, securing Foundation grants and onboarding 1,000+ community users.",
    ],
  },
  {
    title: "Contendo",
    subtitle: "Sports Social Media",
    description: "Real-time social platform for sports live-play and feeds.",
    tags: ["Mobile", "Social"],
    tech: ["Project Management", "DevOps", "Mobile Dev"],
    icon: "solar:play-circle-linear",
    image: "/images/contendo.jpg",
    overview:
      "Contendo is a sports-focused social media app featuring real-time 'live-play' interactions. As Lead Engineer, I managed the technical delivery during a critical transition phase.",
    responsibilities: [
      "Managed a team of 7 as Lead Engineer, navigating complex team transitions to ensure continuous delivery.",
      "Implemented Socket.io for real-time features and Google Cloud Storage for media-heavy content.",
      "Established CI/CD pipelines and Firebase notifications, successfully delivering the MVP despite resource challenges.",
    ],
  },
  {
    title: "Satsouk",
    subtitle: "AI Prediction Market",
    description: "AI-integrated prediction platform on the BOB network.",
    tags: ["AI", "Web3"],
    tech: ["Next.js", "Web3", "Solidity", "NestJS"],
    icon: "solar:magic-stick-3-linear",
    image: "/images/satsouk.jpg",
    overview:
      "Satsouk leverages AI to aggregate social sentiment and prediction markets. This project bridges EVM workflows with the ICP Network.",
    responsibilities: [
      "Engineered an AI agent to scrape YouTube data for trend identification and auto-suggest prediction markets.",
      "Integrated EVM workflows with the ICP Network via Chain Fusion technology to enable cross-chain functionality.",
      "Won 2nd Place at ICP Chain Fusion Hackathon and secured technical grants from the BOB Network.",
    ],
  },
  {
    title: "Kolektiva",
    subtitle: "RWA Property",
    description: "Fractional property ownership on Lisk blockchain.",
    tags: ["Web3", "RWA"],
    tech: ["Next.js", "NestJS", "Solidity", "Docker"],
    icon: "solar:city-linear",
    image: "/images/kolektiva.jpg",
    overview:
      "Kolektiva is a Real-World Asset (RWA) platform enabling fractional real estate ownership via tokenization.",
    responsibilities: [
      "Facilitated fractional property ownership by building a user-friendly React/Next.js interface.",
      "Integrated Thirdweb SDK for secure wallet connectivity and ensured compliance with RWA verification requirements.",
      "Delivered a winning MVP that secured 2nd Place at the ETHSEA Lisk Hackathon (2024).",
    ],
  },
  {
    title: "Moladin",
    subtitle: "Fintech / Automotive",
    description: "Financing platform serving 10K+ dealers.",
    tags: ["Fintech"],
    tech: ["TypeScript", "Express.js", "NestJS", "Kafka", "PostgreSQL"],
    icon: "solar:car-linear",
    image: "/images/moladin.jpg",
    overview:
      "Moladin is a platform for dealers to request car loans. I supported the engineering ecosystem ensuring reliable loan processing under high traffic.",
    responsibilities: [
      "Supported a high-concurrency ecosystem for 10,000+ active dealers by developing core microservices.",
      "Implemented Redis caching and Kafka message brokers to ensure zero-loss data validity across distributed systems.",
      "Optimized financing and inventory management features, maintaining high system reliability for daily operational loads.",
    ],
  },
  {
    title: "Tenzro NFT",
    subtitle: "AI NFT Marketplace",
    description: "AI-driven metadata generation for NFT creation.",
    tags: ["Web3", "AI"],
    tech: ["Next.js", "Web3", "Solidity"],
    icon: "solar:gallery-linear",
    image: "/images/tenzro-nft.jpg",
    overview:
      "Tenzro NFT simplifies NFT creation using AI. I built the system to generate unique contextual metadata.",
    responsibilities: [
      "Developed an AI-driven system to generate unique contextual metadata, simplifying the NFT creation process.",
      "Utilized Next.js and Thirdweb SDK to enable seamless EVM-based minting and wallet connectivity.",
      "Delivered a full-cycle MVP supporting ERC-721 and ERC-1155 standards for public sales.",
    ],
  },
  {
    title: "Tentang Anak",
    subtitle: "Parenting Ecosystem",
    description: "Child growth tracking and e-commerce for 100K+ users.",
    tags: ["E-commerce"],
    tech: ["Laravel", "NestJS", "Redis", "Elasticsearch"],
    icon: "solar:user-heart-linear",
    image: "/images/tentang-anak.jpg",
    overview:
      "Tentang Anak is Indonesia’s leading parenting platform. I contributed to the backend ecosystem handling high-traffic e-commerce events.",
    responsibilities: [
      "Addressed scalability bottlenecks for 100K+ users by migrating the monolith architecture to NestJS microservices.",
      "Integrated ElasticSearch and Redis to handle 1,000+ concurrent users during peak e-commerce events.",
      "Launched stable e-commerce modules with secure payment and logistics integrations.",
    ],
  },
  {
    title: "GameSoftBank",
    subtitle: "P2P Game Marketplace",
    description: "Peer-to-peer game trading platform for Singapore.",
    tags: ["Marketplace"],
    tech: ["Laravel", "Vue.js", "MySQL"],
    icon: "solar:gamepad-linear",
    image: "/images/gamesoftbank.jpg",
    overview:
      "GameSoftBank is a P2P marketplace for physical games. I architected the core backend infrastructure.",
    responsibilities: [
      "Accelerated the MVP launch by 5% through the architectural design of the core backend and admin dashboard.",
      "Developed robust API endpoints using Laravel and Vue.js, improving integration efficiency with the frontend by 10%.",
      "Built foundational marketplace logic for secure user-to-user transactions and data access.",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mb-32 scroll-mt-32">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="text-3xl text-white font-medium tracking-tight mb-2">Featured Projects</h2>
          <p className="text-slate-500 text-sm">Click on a project to view detailed case study.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <details
            key={index}
            className="group bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300"
          >
            <summary className="cursor-pointer flex flex-col md:flex-row min-h-64">
              {/* Preview Image Area */}
              <div
                className="w-full md:w-1/3 min-h-64 md:h-auto relative overflow-hidden bg-neutral-800"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Summary Content */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl text-white font-medium mb-1">{project.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{project.description}</p>
                  </div>
                  <div className="flex gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`bg-white/5 text-slate-300 text-[10px] px-2 py-1 rounded border border-white/10 uppercase tracking-wider`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-x-4 gap-y-2 mb-8 text-xs text-slate-500 flex-wrap">
                  {project.tech.map((t, i) => (
                    <span key={i} className="flex items-center gap-1.5">
                      <Icon icon="solar:code-linear" className="text-slate-600" />
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto text-sm font-medium text-indigo-400 flex items-center gap-2 group-open:hidden uppercase tracking-wide text-xs">
                  View Case Study <Icon icon="solar:alt-arrow-down-linear" />
                </div>
              </div>
            </summary>

            {/* Expanded Details */}
            <div className="px-6 md:px-8 pb-8 pt-2 border-t border-white/5 bg-white/[0.01]">
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h4 className="text-white text-sm font-medium mb-3 flex items-center gap-2">
                    <Icon icon="solar:document-text-linear" className="text-indigo-400" /> Overview
                  </h4>
                  <p className="text-sm text-slate-400 leading-7">{project.overview}</p>
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium mb-3 flex items-center gap-2">
                    <Icon icon="solar:star-linear" className="text-amber-400" /> Key Contributions
                  </h4>
                  <ul className="text-sm text-slate-400 space-y-3">
                    {project.responsibilities.map((r, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-indigo-400`}></span>
                        <span className="leading-relaxed">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
