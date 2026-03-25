const experiences = [
  {
    role: "Principal Engineer / Software Engineer II",
    company: "StakeHub Infotech Pvt. Ltd.",
    location: "Jaipur, Rajasthan",
    period: "Jun 2024 — Present",
    current: true,
    highlights: [
      "Architected and developed an order-matching engine for trading unlisted shares using Node.js, TypeScript, PostgreSQL, and Next.js — processing 1,000+ daily transactions with sub-second latency.",
      "Built and led a development team from the ground up, overseeing the entire project lifecycle from inception through production deployment over a 12-month timeline.",
      "Engineered enterprise-grade security: RSA-based encryption, JWT authentication, Redis session caching, and role-based access controls securing sensitive financial operations.",
      "Designed and implemented PostgreSQL transaction management with row-level locking for precise fund and share obligation processing, ensuring ACID compliance across all order operations.",
      "Orchestrated infrastructure on AWS (EC2, RDS), configured CI/CD pipelines, managed Apache servers, and implemented cron-based automation for critical order-matching workflows.",
      "Developed and deployed agentic AI systems and multimodal AI products — including data ingestion pipelines, RAG architectures, and fine-tuned LLMs — sold to multiple business clients.",
      "Built cross-platform mobile applications (Android & iOS), browser extensions, and full-scale web platforms as a one-person engineering team.",
    ],
  },
  {
    role: "Full Stack Application Developer",
    company: "Unitrans Infotech",
    location: "Bengaluru, India",
    period: "Apr 2022 — Jun 2024",
    current: false,
    highlights: [
      "Engineered RESTful APIs with Node.js and Express.js, managed MongoDB operations via Mongoose, and integrated real-time features using Socket.io, GraphQL, and Docker.",
      "Developed responsive interfaces using React.js, Next.js, and Angular — implementing Redux and Context API for state management, driving a 30% increase in user engagement.",
      "Implemented JWT authentication with role-based access, deployed on AWS and Heroku, and established CI/CD pipelines for automated delivery.",
      "Wrote comprehensive unit and integration test suites, performed load testing, and implemented caching strategies that significantly improved application performance and scalability.",
      "Launched cross-platform Android (Java/Kotlin) and iOS (Swift) applications that halved app load times and expanded the user base by 25%.",
      "Designed CI/CD pipelines with AWS, Azure DevOps, and Travis CI — achieving a 50% increase in deployment velocity with 30% fewer errors.",
    ],
  },
  {
    role: "Bachelor of Science",
    company: "Sunrise University",
    location: "Alwar, Rajasthan",
    period: "Apr 2019 — Apr 2022",
    current: false,
    highlights: [
      "Completed Bachelor of Science degree while building a foundation in computer science fundamentals, data structures, and algorithms.",
      "National-level boxing athlete — discipline and competitive mindset that translates directly into engineering excellence.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-neutral-500 text-sm font-medium tracking-wider uppercase mb-2">
            Career Journey
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Professional Experience
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-white/30 via-white/10 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-white/40 bg-black z-10 mt-7">
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-20" />
                  )}
                </div>

                <div className="ml-10 md:ml-0 md:w-1/2">
                  <div
                    className={`bg-neutral-950 border border-white/5 rounded-xl p-6 hover:border-white/15 transition-all ${
                      idx % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-neutral-400 bg-white/5 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="text-xs font-medium text-neutral-300 bg-white/10 px-3 py-1 rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-neutral-500 text-sm mb-4">
                      {exp.company} &middot; {exp.location}
                    </p>
                    <ul className="space-y-2">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="text-neutral-400 text-sm leading-relaxed flex gap-2">
                          <span className="text-white/40 mt-1 shrink-0">▸</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
