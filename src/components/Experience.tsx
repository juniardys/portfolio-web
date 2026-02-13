"use client";

const experiences = [
  {
    role: "Founding Engineer (Web3 & AI)",
    company: "Manexus Pte Ltd",
    period: "Jan 2024 - Present",
    description:
      "Delivered 6 digital products and MVPs across Web2, Web3, and AI. Led backend architecture for DeFi apps, improved engineering speed by 10% through boilerplates, and streamlined CI/CD pipelines.",
    color: "bg-indigo-500",
  },
  {
    role: "Backend Engineer",
    company: "Moladin Indonesia",
    period: "Aug 2023 - Feb 2024",
    description:
      "Maintained backend services for 10K+ users using Express.js and TypeScript. Implemented Redis caching and integrated Kafka for microservices, ensuring stability during high-concurrency periods.",
    color: "bg-slate-600",
  },
  {
    role: "Backend Engineer",
    company: "Tentang Anak",
    period: "Feb 2022 - Jan 2023",
    description:
      "Supported 100K+ active users. Migrated services to NestJS using DDD. Optimized search with ElasticSearch and integrated payment/logistics gateways.",
    color: "bg-slate-600",
  },
  {
    role: "Full Stack Engineer",
    company: "Ashr Technology (Singapore)",
    period: "Jun 2021 - Sep 2021",
    description:
      "Built core backend & admin panel for GameSoftBank MVP using Laravel Inertia. Implemented Redis message broker for background processing.",
    color: "bg-slate-600",
  },
  {
    role: "Full Stack Engineer",
    company: "Nalar Naluri",
    period: "Aug 2019 - Jun 2021",
    description:
      "Took ownership of 2 internal products and delivered 5+ client projects. Built scalable APIs with Laravel, Express.js, and Adonis.js, and implemented real-time features using Firebase across web and mobile platforms.",
    color: "bg-slate-600",
  },
  {
    role: "Full Stack Engineer",
    company: "Intive Studio",
    period: "Nov 2018 - Aug 2019",
    description:
      "Delivered 5+ client projects using Laravel and CodeIgniter within tight timelines. Migrated file storage to AWS S3 for better asset management and implemented real-time notifications with Firebase.",
    color: "bg-slate-600",
  },
  {
    role: "Backend Engineer",
    company: "PT Inosoft Trans Sistem",
    period: "May 2016 - Jun 2018",
    description:
      "Built a School Management System serving 100+ schools using CodeIgniter and MongoDB. Developed 'Simantiz', a real-time multiplayer board game using Express.js and Socket.io, showcasing early adoption of real-time tech.",
    color: "bg-slate-600",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mb-32 scroll-mt-32">
      <h2 className="text-2xl text-white font-medium tracking-tight mb-8">Professional Journey</h2>

      <div className="relative border-l border-white/10 ml-3 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8">
            <span
              className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full ${exp.color} ring-4 ring-[#08090A]`}
            ></span>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-lg text-white font-medium">{exp.role}</h3>
              <span className="text-xs text-slate-500 font-mono">{exp.period}</span>
            </div>
            <div className="text-sm text-indigo-300 mb-2">{exp.company}</div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
