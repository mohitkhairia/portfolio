const skillCategories = [
  {
    title: "Languages & Runtime",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "Kotlin", "Swift", "SQL", "Node.js", "Linux", "Ubuntu"],
  },
  {
    title: "Frontend & Mobile",
    skills: ["React.js", "Next.js", "Angular", "React Native", "Redux", "Tailwind CSS", "HTML5/CSS3", "Browser Extensions"],
  },
  {
    title: "Backend & APIs",
    skills: ["Express.js", "GraphQL", "REST APIs", "Socket.io", "Microservices", "Cron Jobs", "WebSockets", "gRPC"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["Agentic AI", "RAG Pipelines", "LLM Fine-Tuning", "Multimodal Models", "Data Ingestion", "Vector Databases", "Prompt Engineering", "LangChain"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Mongoose", "DB Transactions", "Row-Level Locking", "Database Functions", "Query Optimization"],
  },
  {
    title: "DevOps & Infrastructure",
    skills: ["AWS (EC2, RDS)", "Docker", "CI/CD Pipelines", "Azure DevOps", "Apache", "Nginx", "Git", "Linux Administration"],
  },
  {
    title: "Security",
    skills: ["RSA Encryption", "JWT Authentication", "Role-Based Access", "API Security", "OWASP", "SSL/TLS", "Penetration Testing", "Security Audits"],
  },
  {
    title: "Architecture & Practices",
    skills: ["System Design", "DSA", "First-Principles Thinking", "Agile/Scrum", "Code Reviews", "Load Testing", "Performance Tuning", "Technical Leadership"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-neutral-500 text-sm font-medium tracking-wider uppercase mb-2">
            Technical Arsenal
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-neutral-950 border border-white/5 rounded-xl p-6 hover:border-white/20 transition-all group"
            >
              <h3 className="text-white font-semibold mb-4 text-sm group-hover:text-neutral-200 transition-colors">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-neutral-500 bg-white/5 px-2.5 py-1 rounded-md hover:bg-white/10 hover:text-neutral-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
