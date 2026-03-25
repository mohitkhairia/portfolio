export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-neutral-500 text-sm font-medium tracking-wider uppercase mb-2">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            The Mind Behind the Architecture
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-neutral-400 leading-relaxed text-base sm:text-lg">
              I&apos;m <span className="text-white font-semibold">Mohit Khairia</span>, a
              Principal Engineer at{" "}
              <span className="text-white font-semibold">StakeHub Infotech</span>,
              a fintech company revolutionizing unlisted equity trading. With
              over seven years of hands-on experience across the full technology
              stack, I bring a first-principles approach to solving complex
              engineering challenges.
            </p>
            <p className="text-neutral-400 leading-relaxed text-base sm:text-lg">
              I operate as a one-man army — from conceptualizing system
              architecture to deploying production infrastructure. I build and
              ship Android &amp; iOS apps, web platforms, backend services, AI
              systems, browser extensions, and DevOps pipelines. My work spans
              multiple databases, tech stacks, and paradigms — I don&apos;t limit
              myself to one toolchain.
            </p>
            <p className="text-neutral-400 leading-relaxed text-base sm:text-lg">
              Currently, I&apos;m deeply invested in{" "}
              <span className="text-white font-semibold">
                agentic AI systems and multimodal models
              </span>
              — building data ingestion pipelines, RAG architectures, and
              fine-tuning LLMs to create AI-powered products that are sold to
              businesses across industries. My engineering philosophy is rooted
              in strong DSA fundamentals and first-principle thinking.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Full-Stack Architect",
                desc: "End-to-end systems — frontend, backend, mobile, DevOps, and security under one roof.",
              },
              {
                title: "AI & ML Engineer",
                desc: "Agentic AI, RAG pipelines, LLM fine-tuning, multimodal systems for enterprise use.",
              },
              {
                title: "Mobile & Extensions",
                desc: "Native Android (Kotlin/Java), iOS (Swift), and browser extensions shipped to production.",
              },
              {
                title: "Security & DevOps",
                desc: "RSA encryption, JWT auth, CI/CD pipelines, AWS infrastructure, and server administration.",
              },
              {
                title: "Database Expert",
                desc: "Postgres transactions & locking, MongoDB, Redis caching — choosing the right tool for the job.",
              },
              {
                title: "First-Principles Thinker",
                desc: "Strong DSA foundations. Building from fundamentals, not frameworks.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-neutral-950 border border-white/5 rounded-xl p-5 hover:border-white/20 transition-all group"
              >
                <h3 className="text-white font-semibold mb-1 text-sm">
                  {item.title}
                </h3>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
