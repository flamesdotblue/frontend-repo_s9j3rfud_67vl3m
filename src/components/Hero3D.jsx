import Spline from '@splinetool/react-spline';
import { Shield, Fingerprint } from 'lucide-react';

export default function Hero3D({ onSignUp }) {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden bg-gradient-to-b from-black via-[#06120e] to-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/mwBbOy4jrazr59EO/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
        <div className="py-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 ring-1 ring-emerald-400/30 px-3 py-1 text-emerald-300 text-xs mb-5">
            <Shield className="h-3.5 w-3.5" />
            Next‑gen biometric identity
          </div>

          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white leading-tight">
            Secure, seamless
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300"> biometric</span> access
          </h1>
          <p className="mt-4 sm:mt-6 text-white/70 text-base sm:text-lg max-w-xl">
            Verify users with fingerprint, face, and passkeys. Built for fintech, enterprise, and modern apps that demand trust.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button onClick={onSignUp} className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-5 py-3 transition-colors">
              <Fingerprint className="h-5 w-5" />
              Get started free
            </button>
            <a href="#features" className="inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 text-white px-5 py-3 ring-1 ring-white/15 transition-colors">
              Explore features
            </a>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-6 text-white/70 text-sm">
            <div>
              <div className="text-white font-semibold"><span className="text-emerald-300">99.99%</span> uptime</div>
              SLA-backed reliability
            </div>
            <div>
              <div className="text-white font-semibold"><span className="text-emerald-300"><span className=\"tabular-nums\"><span>500ms</span></span></span> verify</div>
              Global edge network
            </div>
            <div>
              <div className="text-white font-semibold">ISO 27001</div>
              Enterprise security
            </div>
          </div>
        </div>

        <div className="hidden lg:block" aria-hidden>
          <div className="h-[520px]" />
        </div>
      </div>
    </section>
  );
}
