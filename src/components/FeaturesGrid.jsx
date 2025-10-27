import { ShieldCheck, ScanFace, Fingerprint, KeyRound } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Zero-trust by design',
    desc: 'Adaptive risk scoring, device posture checks, and continuous authentication baked in.'
  },
  {
    icon: Fingerprint,
    title: 'Multi-biometric support',
    desc: 'Fingerprint, face, voice, and passkeys with fallback OTP — all via one SDK.'
  },
  {
    icon: ScanFace,
    title: 'Privacy-preserving',
    desc: 'Encrypted templates, liveness detection, and on-device matching options.'
  },
  {
    icon: KeyRound,
    title: 'Developer-first',
    desc: 'Clean APIs, webhooks, and client libraries. Ship auth flows in hours, not weeks.'
  }
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="relative py-16 sm:py-24 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_50%)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">Powerful features out of the box</h2>
          <p className="mt-3 text-white/70">Everything you need to add frictionless, enterprise-grade biometric security to your product.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors p-5 sm:p-6">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/15 ring-1 ring-emerald-400/30 grid place-items-center mb-4">
                <Icon className="h-5 w-5 text-emerald-300" />
              </div>
              <h3 className="text-white font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
