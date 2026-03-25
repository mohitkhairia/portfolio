export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-white font-bold text-xs">
              MK
            </div>
            <span className="text-neutral-500 text-sm">
              &copy; {new Date().getFullYear()} Mohit Khairia. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/mohitkhairia" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white text-sm transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/mohitkhairia" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white text-sm transition-colors">
              LinkedIn
            </a>
            <a href="mailto:mohitkhairia@gmail.com" className="text-neutral-500 hover:text-white text-sm transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
