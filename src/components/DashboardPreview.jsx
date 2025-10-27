import { Activity, Shield, Users, KeyRound } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="relative py-16 sm:py-24 bg-gradient-to-b from-black to-[#06120e]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">Operational dashboard</h2>
            <p className="mt-3 text-white/70 max-w-2xl">Monitor verifications, security posture, and API usage in real time. Built to keep your team in control.</p>
          </div>
          <a href="#home" className="rounded-md bg-white/10 hover:bg-white/20 text-white px-4 py-2 ring-1 ring-white/15 transition-colors">Live demo</a>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard icon={Activity} title="Verifications" value="12,482" sub="24h • +4.1%" />
          <StatCard icon={Users} title="Active users" value="58,930" sub="30d • +2.7%" />
          <StatCard icon={Shield} title="Liveness pass" value="99.2%" sub="rolling 7d" />
          <StatCard icon={KeyRound} title="Passkey binds" value="8,341" sub="total" />
        </div>

        <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="text-white/80 text-sm">Recent verification events</div>
            <div className="text-white/50 text-xs">Stream updates in realtime</div>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-lg border border-white/10 bg-black/40 p-3">
                <div className="flex items-center justify-between text-sm">
                  <div className="text-white/80">Face match • {"#"}{Math.floor(1000 + Math.random()*9000)}</div>
                  <span className="text-emerald-300">pass</span>
                </div>
                <div className="mt-1 text-xs text-white/60">US • 420ms • risk score 0.12</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon: Icon, title, value, sub }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-emerald-500/15 ring-1 ring-emerald-400/30 grid place-items-center">
          <Icon className="h-5 w-5 text-emerald-300" />
        </div>
        <div>
          <div className="text-white/70 text-sm">{title}</div>
          <div className="text-white text-xl font-semibold tabular-nums">{value}</div>
        </div>
      </div>
      <div className="mt-3 text-xs text-white/60">{sub}</div>
    </div>
  );
}
