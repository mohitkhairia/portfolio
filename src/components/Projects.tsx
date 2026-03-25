/* eslint-disable @next/next/no-img-element */

const projects = [
  {
    title: "StakeHub — Unlisted Equity Trading Platform",
    description:
      "Architected and built the complete order-matching engine and trading platform for StakeHub Infotech, enabling users to discover and trade unlisted shares. Handles 1,000+ daily transactions with real-time order matching, fund management, and regulatory compliance.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS"],
    image: "/stakehub.png",
    featured: true,
  },
  {
    title: "AI Agent Platform — Enterprise AI Systems",
    description:
      "Designed and deployed agentic AI systems for StakeHub and external business clients. Built data ingestion pipelines, RAG architectures, and fine-tuned LLMs to create intelligent automation tools that process financial data, generate insights, and power customer-facing AI products.",
    tech: ["Python", "LangChain", "RAG", "LLM Fine-Tuning", "Vector DB", "Node.js"],
    image: null,
    featured: false,
  },
  {
    title: "StakeHub Mobile Apps — Android & iOS",
    description:
      "Developed and launched native mobile applications for both Android and iOS platforms. Implemented real-time portfolio tracking, push notifications, biometric authentication, and seamless trading workflows — driving a 30% increase in user engagement.",
    tech: ["Kotlin", "Java", "Swift", "Firebase", "REST APIs"],
    image: null,
    featured: false,
  },
  {
    title: "StakeHub Browser Extension",
    description:
      "Built a custom browser extension for streamlined access to the trading platform, enabling quick order placement, portfolio overview, and real-time notifications directly from the browser toolbar.",
    tech: ["JavaScript", "Chrome APIs", "React", "WebSockets"],
    image: null,
    featured: false,
  },
  {
    title: "Banking Application Suite",
    description:
      "Developed secure banking applications with multi-factor authentication, real-time transaction processing, account management dashboards, and compliance-ready audit trails. Implemented database transactions with row-level locking for financial data integrity.",
    tech: ["Node.js", "PostgreSQL", "React", "JWT", "RSA Encryption", "Docker"],
    image: null,
    featured: false,
  },
  {
    title: "E-Commerce Platform & Automated Mailing",
    description:
      "Architected full-scale e-commerce platforms with inventory management, payment gateway integration, and automated mailing systems for transactional emails, marketing campaigns, and user lifecycle notifications — processing thousands of emails daily.",
    tech: ["Next.js", "Node.js", "MongoDB", "Redis", "SendGrid", "AWS SES"],
    image: null,
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-neutral-500 text-sm font-medium tracking-wider uppercase mb-2">
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Featured Projects
          </h2>
        </div>

        <div className="space-y-8">
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <div
                key={project.title}
                className="bg-neutral-950 border border-white/5 rounded-2xl overflow-hidden hover:border-white/15 transition-all"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                    <span className="text-xs font-medium text-neutral-400 bg-white/5 px-3 py-1 rounded-full w-fit mb-4">
                      Featured Project
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-neutral-500 text-sm sm:text-base leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs text-neutral-300 bg-white/10 px-3 py-1 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  {project.image && (
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-transparent to-transparent lg:block hidden" />
                    </div>
                  )}
                </div>
              </div>
            ))}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project) => (
                <div
                  key={project.title}
                  className="bg-neutral-950 border border-white/5 rounded-xl p-6 hover:border-white/15 transition-all group flex flex-col"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                    <svg
                      className="w-5 h-5 text-neutral-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-neutral-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-neutral-500 bg-white/5 px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
