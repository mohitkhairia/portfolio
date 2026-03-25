export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-white/3 rounded-full blur-3xl animate-glow animation-delay-200" />

      {/* Capsule decorative element */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="relative">
          <div className="w-48 h-80 rounded-full bg-gradient-to-b from-white/15 via-white/5 to-transparent blur-sm" />
          <div className="absolute inset-2 w-44 h-76 rounded-full bg-gradient-to-b from-white/10 via-white/3 to-transparent" />
          {/* Orbital rings */}
          <div className="absolute -top-8 -left-16 w-64 h-64 border border-white/10 rounded-full" />
          <div className="absolute -bottom-12 -right-20 w-80 h-80 border border-white/5 rounded-full" />
          {/* Floating dots */}
          <div className="absolute -top-4 -right-12 w-12 h-12 rounded-full bg-black border border-white/20 flex items-center justify-center text-xs font-bold text-white animate-float">
            AI
          </div>
          <div className="absolute bottom-20 -left-20 w-12 h-12 rounded-full bg-black border border-white/20 flex items-center justify-center text-xs font-bold text-neutral-300 animate-float animation-delay-400">
            FS
          </div>
          <div className="absolute -bottom-8 right-4 w-12 h-12 rounded-full bg-black border border-white/20 flex items-center justify-center text-xs font-bold text-neutral-400 animate-float animation-delay-200">
            DB
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <p className="text-neutral-400 text-sm sm:text-base font-medium tracking-wider uppercase mb-4 animate-slide-up">
            Principal Engineer &middot; StakeHub Infotech
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up animation-delay-200">
            Engineering
            <br />
            Enterprise Systems,{" "}
            <span className="text-white">
              Powered by AI
            </span>
          </h1>
          <p className="text-neutral-500 text-base sm:text-lg md:text-xl max-w-2xl mb-8 leading-relaxed animate-slide-up animation-delay-400">
            Architecting scalable fintech platforms, agentic AI systems, and
            full-stack solutions that drive business outcomes. Over 7 years of
            building production systems from inception to scale.
          </p>
          <div className="flex flex-wrap gap-4 animate-slide-up animation-delay-600">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black hover:bg-neutral-200 transition-all font-medium"
            >
              View My Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 hover:border-white/50 text-white transition-all font-medium"
            >
              Let&apos;s Connect
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 sm:gap-12 mt-12 pt-8 border-t border-white/10">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-white">7+</p>
              <p className="text-neutral-500 text-sm">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-white">20+</p>
              <p className="text-neutral-500 text-sm">Projects Delivered</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-white">1000+</p>
              <p className="text-neutral-500 text-sm">Daily Transactions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
