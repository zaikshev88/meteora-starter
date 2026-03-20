// app/starter/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started — Meteora",
  description: "Your first LP position, made simple.",
};

function IconArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M2 5l2.5 2.5L8 3" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Nav() {
  return (
    <nav className="border-b border-white/10 bg-[#0C0E12]/80 backdrop-blur-md sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-5 h-14 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="font-bold text-white text-sm tracking-tight">☄️ meteora</span>
          <div className="hidden sm:flex items-center gap-4 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">Pools</a>
            <a href="#" className="hover:text-white transition-colors">Portfolio</a>
            <a href="/starter" className="text-[#F97316] font-medium">Get started</a>
          </div>
        </div>
        <button className="text-sm bg-[#F97316] text-white px-4 py-1.5 rounded-lg font-semibold hover:bg-[#ea6c0a] transition-colors">
          Launch app
        </button>
      </div>
    </nav>
  );
}

export default function StarterPage() {
  return (
    <div className="min-h-screen bg-[#0C0E12] text-white">

      {/* Grid bg */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      {/* Glow */}
      <div className="fixed top-[-300px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#F97316]/10 rounded-full blur-[140px] pointer-events-none" />

      <Nav />

      <main className="relative max-w-4xl mx-auto px-5 pb-24">

        {/* ── Hero ── */}
        <div className="text-center pt-24 pb-20 border-b border-white/10">
          <span className="inline-block text-[11px] font-medium px-3 py-1 rounded-full bg-[#F97316]/10 text-[#F97316] mb-6 tracking-widest uppercase border border-[#F97316]/20">
            New to LPing?
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-5">
            Earn fees.<br />
            <span className="text-[#F97316]">Not confusion.</span>
          </h1>
          <p className="text-lg text-white/40 max-w-sm mx-auto mb-10 leading-relaxed">
            Set up your first liquidity position in minutes — guided, step by step.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="flex items-center justify-center gap-2 bg-[#F97316] text-white text-sm font-bold px-8 py-3 rounded-lg hover:bg-[#ea6c0a] transition-colors">
              Start guided setup <IconArrow />
            </button>
            <a href="#basics" className="flex items-center justify-center gap-2 border border-white/20 text-white/60 text-sm font-medium px-8 py-3 rounded-lg hover:bg-white/5 hover:text-white transition-colors">
              How it works
            </a>
          </div>
        </div>

        {/* ── 3 Stats ── */}
        <div className="grid grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden my-12">
          {[
            { value: "5 min", label: "to your first position" },
            { value: "Step-by-step", label: "guided setup tour" },
            { value: "You're in control", label: "withdraw anytime" },
          ].map((s) => (
            <div key={s.label} className="bg-[#0C0E12] px-6 py-8 text-center">
              <p className="text-xl sm:text-2xl font-bold text-[#F97316] mb-1">{s.value}</p>
              <p className="text-xs text-white/40">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── Basics ── */}
        <div id="basics" className="py-4 mb-4">
          <p className="text-[11px] font-medium text-[#F97316]/70 uppercase tracking-widest mb-2">The basics</p>
          <h2 className="text-2xl font-bold text-white mb-8">Three things to know</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                num: "01",
                title: "Deposit & earn",
                body: "Add two tokens to a pool. Every trade through your liquidity earns you a fee.",
                tag: null,
              },
              {
                num: "02",
                title: "Fees are automatic",
                body: "You earn passively. No action needed — fees accumulate as trades happen.",
                tag: "Passive income",
              },
              {
                num: "03",
                title: "Watch your range",
                body: "If price leaves your range, fees pause. Stay in range to keep earning.",
                tag: "⚠ Key risk",
                tagStyle: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
              },
            ].map((c) => (
              <div key={c.num} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#F97316]/20 transition-colors">
                <p className="text-3xl font-bold text-white/10 mb-4">{c.num}</p>
                <h3 className="text-sm font-semibold text-white mb-2">{c.title}</h3>
                <p className="text-[13px] text-white/40 leading-relaxed mb-3">{c.body}</p>
                {c.tag && (
                  <span className={`inline-block text-[11px] px-2 py-0.5 rounded-full border ${c.tagStyle ?? "bg-[#F97316]/10 text-[#F97316] border-[#F97316]/20"}`}>
                    {c.tag}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Guided tour ── */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 my-10">
          <p className="text-[11px] font-medium text-[#F97316]/70 uppercase tracking-widest mb-2">Guided setup tour</p>
          <h2 className="text-2xl font-bold text-white mb-1">We walk you through it.</h2>
          <p className="text-sm text-white/40 mb-8">Inside the terminal, a tour takes you from zero to your first position.</p>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 mb-8">
            {["Choose pool", "Read pool info", "Set range", "Review deposit", "Create position"].map((s, i) => (
              <div key={s} className="flex sm:flex-col items-center gap-3 sm:gap-2">
                <span className="shrink-0 w-7 h-7 rounded-full bg-[#F97316]/10 text-[#F97316] text-[11px] font-bold flex items-center justify-center border border-[#F97316]/20">
                  {i + 1}
                </span>
                <p className="text-[12px] text-white/50 sm:text-center">{s}</p>
                {i < 4 && <div className="hidden sm:block h-px w-full bg-white/10 absolute" />}
              </div>
            ))}
          </div>
          <button className="w-full flex items-center justify-center gap-2 bg-[#F97316] text-white text-sm font-bold py-3.5 rounded-xl hover:bg-[#ea6c0a] transition-colors">
            Start guided setup <IconArrow />
          </button>
        </div>

        {/* ── After deposit + checklist side by side ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">

          {/* Monitor */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
            <p className="text-[11px] font-medium text-[#F97316]/70 uppercase tracking-widest mb-2">After you deposit</p>
            <h2 className="text-lg font-bold text-white mb-5">Keep an eye on</h2>
            <div className="flex flex-col gap-4">
              {[
                { dot: "bg-[#F97316]", title: "In range?", desc: "Price out of range = fees paused." },
                { dot: "bg-blue-400", title: "Fees earned", desc: "Accumulates automatically." },
                { dot: "bg-yellow-400", title: "PnL", desc: "Fees minus any value change." },
                { dot: "bg-red-400", title: "Next move?", desc: "Hold, rebalance, or withdraw." },
              ].map((m) => (
                <div key={m.title} className="flex items-start gap-3">
                  <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${m.dot}`} />
                  <div>
                    <p className="text-[13px] font-medium text-white">{m.title}</p>
                    <p className="text-[12px] text-white/40">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Checklist */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
            <p className="text-[11px] font-medium text-[#F97316]/70 uppercase tracking-widest mb-2">Before you start</p>
            <h2 className="text-lg font-bold text-white mb-5">Beginner checklist</h2>
            <div className="flex flex-col gap-3.5">
              {[
                "Start with a small amount",
                "Use a pair you recognize",
                "Pick a wider range if unsure",
                "Check your position daily at first",
                "First try doesn't need to be perfect",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="shrink-0 w-[18px] h-[18px] rounded-full bg-[#F97316]/10 border border-[#F97316]/20 flex items-center justify-center">
                    <IconCheck />
                  </span>
                  <p className="text-[13px] text-white/50">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Final CTA ── */}
        <div className="text-center pt-6">
          <h2 className="text-2xl font-bold text-white mb-2">Ready to start?</h2>
          <p className="text-sm text-white/30 mb-6">Takes 5 minutes. Guided the whole way.</p>
          <button className="inline-flex items-center gap-2 bg-[#F97316] text-white text-[15px] font-bold px-10 py-3.5 rounded-xl hover:bg-[#ea6c0a] transition-colors">
            Start guided setup <IconArrow />
          </button>
        </div>

      </main>
    </div>
  );
}