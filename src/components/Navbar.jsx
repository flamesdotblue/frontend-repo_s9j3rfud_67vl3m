import { useState } from 'react';
import { Lock, User } from 'lucide-react';

export default function Navbar({ onSignIn }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-md bg-emerald-500/20 grid place-items-center ring-1 ring-emerald-400/40">
            <Lock className="h-4 w-4 text-emerald-400" />
          </div>
          <span className="font-semibold tracking-tight text-white group-hover:text-emerald-300 transition-colors">BioGuard</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-white/80 hover:text-white transition-colors">Features</a>
          <a href="#dashboard" className="text-sm text-white/80 hover:text-white transition-colors">Dashboard</a>
          <a href="#security" className="text-sm text-white/80 hover:text-white transition-colors">Security</a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onSignIn}
            className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 text-white px-3 py-2 text-sm ring-1 ring-white/15 transition-colors"
          >
            <User className="h-4 w-4" />
            Sign in
          </button>

          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md bg-white/10 hover:bg-white/20 text-white ring-1 ring-white/15"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm.75 5.25a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5h-15Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-2">
            <a href="#features" className="py-2 text-white/80 hover:text-white">Features</a>
            <a href="#dashboard" className="py-2 text-white/80 hover:text-white">Dashboard</a>
            <a href="#security" className="py-2 text-white/80 hover:text-white">Security</a>
          </div>
        </div>
      )}
    </header>
  );
}
