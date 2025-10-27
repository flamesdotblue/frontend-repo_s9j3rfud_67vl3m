import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import FeaturesGrid from './components/FeaturesGrid';
import DashboardPreview from './components/DashboardPreview';

export default function App() {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onSignIn={() => setAuthOpen(true)} />
      <main>
        <Hero3D onSignUp={() => setAuthOpen(true)} />
        <FeaturesGrid />
        <DashboardPreview />

        <footer className="py-10 border-t border-white/10 bg-black/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">© {new Date().getFullYear()} BioGuard. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="text-white/60 hover:text-white">Privacy</a>
              <a href="#" className="text-white/60 hover:text-white">Terms</a>
              <a href="#" className="text-white/60 hover:text-white">Status</a>
            </div>
          </div>
        </footer>
      </main>

      {authOpen && <AuthModal onClose={() => setAuthOpen(false)} />}
    </div>
  );
}

function AuthModal({ onClose }) {
  const [mode, setMode] = useState('signin');

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-xl border border-white/10 bg-gradient-to-b from-[#0b1613] to-black p-6 shadow-2xl ring-1 ring-white/5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{mode === 'signin' ? 'Sign in' : 'Create account'}</h3>
          <button onClick={onClose} className="text-white/60 hover:text-white">✕</button>
        </div>

        <form className="mt-5 grid gap-4">
          <div>
            <label className="block text-sm text-white/70">Email</label>
            <input type="email" required placeholder="you@company.com" className="mt-1 w-full rounded-md bg-white/5 ring-1 ring-white/10 focus:ring-emerald-400/40 focus:outline-none px-3 py-2 text-white placeholder:text-white/40" />
          </div>
          <div>
            <label className="block text-sm text-white/70">Password</label>
            <input type="password" required placeholder="••••••••" className="mt-1 w-full rounded-md bg-white/5 ring-1 ring-white/10 focus:ring-emerald-400/40 focus:outline-none px-3 py-2 text-white placeholder:text-white/40" />
          </div>

          <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-4 py-2 transition-colors">{mode === 'signin' ? 'Sign in' : 'Create account'}</button>
        </form>

        <div className="mt-4 flex items-center justify-between text-sm text-white/70">
          <button onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')} className="text-emerald-300 hover:text-emerald-200">
            {mode === 'signin' ? "Don't have an account? Sign up" : 'Have an account? Sign in'}
          </button>
          <button className="text-white/60 hover:text-white">Use passkey</button>
        </div>
      </div>
    </div>
  );
}
