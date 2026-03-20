// app/starter/page.tsx
// Images: drop real assets into /public and replace the placeholder divs
// marked with {/* IMG: ... */} comments below

import type { Metadata } from "next";
import Image from "next/image";

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

// ── Placeholder component — replace with <Image> when assets are ready ────────
function ImgPlaceholder({ label, aspectRatio = "16/9" }: { label: string; aspectRatio?: string }) {
  return (
    <div
      style={{ aspectRatio }}
      className="w-full rounded-2xl border border-dashed border-white/20 bg-white/[0.02] flex flex-col items-center justify-center gap-2 text-center px-4"
    >
      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-1">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="white" strokeOpacity="0.3" strokeWidth="1.2" />
          <circle cx="5.5" cy="6.5" r="1" fill="white" fillOpacity="0.3" />
          <path d="M2 11l3.5-3 2.5 2 2-2 4 3.5" stroke="white" strokeOpacity="0.3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <p className="text-[11px] text-white/25 font-medium uppercase tracking-widest">{label}</p>
    </div>
  );
}

function Nav() {
  return (
    <nav className="border-b border-white/10 bg-[#0C0E12]/80 backdrop-blur-md sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-5 h-14 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Image src="/full-logo-on-dark.png" width={120} height={28} alt="Meteora" />
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
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="fixed top-[-300px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#F97316]/10 rounded-full blur-[140px] pointer-events-none" />

      <Nav />

      <main className="relative max-w-4xl mx-auto px-5 pb-24">

        {/* ── Hero ── */}
        <div className="text-center pt-24 pb-16 border-b border-white/10">
          <span className="inline-block text-[11px] font-medium px-3 py-1 rounded-full bg-[#F97316]/10 text-[#F97316] mb-6 tracking-widest uppercase border border-[#F97316]/20">
            New to LPing?
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-5">
            Your first LP position,<br />
            <span className="text-[#F97316]">made simple.</span>
          </h1>
          <p className="text-lg text-white/40 max-w-sm mx-auto mb-10 leading-relaxed">
            Set up your first liquidity position in minutes — guided, step by step.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
            <button className="flex items-center justify-center gap-2 bg-[#F97316] text-white text-sm font-bold px-8 py-3 rounded-lg hover:bg-[#ea6c0a] transition-colors">
              Start guided setup <IconArrow />
            </button>
            <a href="#basics" className="flex items-center justify-center gap-2 border border-white/20 text-white/60 text-sm font-medium px-8 py-3 rounded-lg hover:bg-white/5 hover:text-white transition-colors">
              How it works
            </a>
          </div>

          {/* IMG: hero — terminal screenshot or product illustration */}
          {/* Replace with: <Image src="/hero-terminal.png" width={900} height={500} alt="Meteora terminal" className="rounded-2xl border border-white/10 w-full" /> */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E12] via-transparent to-transparent z-10 rounded-2xl pointer-events-none" />
            <ImgPlaceholder label="Hero image — terminal screenshot or product illustration" aspectRatio="16/7" />
          </div>
        </div>



        {/* ── Basics ── */}
        <div id="basics" className="py-4 mb-4">
          <p className="text-[11px] font-medium text-[#F97316]/70 uppercase tracking-widest mb-2">The basics</p>
          <h2 className="text-2xl font-bold text-white mb-8">Three things to know</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { num: "01", title: "Deposit & earn", body: "Add two tokens to a pool. Every trade earns you a fee automatically.", tag: null, tagStyle: "" },
              { num: "02", title: "Fees are automatic", body: "You earn passively. Fees accumulate as trades happen — no action needed.", tag: "Passive income", tagStyle: "bg-[#F97316]/10 text-[#F97316] border-[#F97316]/20" },
              { num: "03", title: "Watch your range", body: "If price leaves your range, fees pause. Stay in range to keep earning.", tag: "⚠ Key risk", tagStyle: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
            ].map((c) => (
              <div key={c.num} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#F97316]/20 transition-colors">
                <p className="text-3xl font-bold text-white/10 mb-4">{c.num}</p>
                <h3 className="text-sm font-semibold text-white mb-2">{c.title}</h3>
                <p className="text-[13px] text-white/40 leading-relaxed mb-3">{c.body}</p>
                {c.tag && (
                  <span className={`inline-block text-[11px] px-2 py-0.5 rounded-full border ${c.tagStyle}`}>{c.tag}</span>
                )}
              </div>
            ))}
          </div>

          {/* IMG: illustration — e.g. a range chart or LP concept graphic */}
          {/* Replace with: <Image src="/lp-range-illustration.png" width={900} height={400} alt="LP range illustration" className="rounded-2xl w-full" /> */}
          <ImgPlaceholder label="Illustration — LP range concept or fee flow graphic" aspectRatio="16/6" />
        </div>

        {/* ── Guided tour ── */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden my-10">
          <div className="grid grid-cols-1 sm:grid-cols-2">

            {/* Left: text + steps */}
            <div className="p-8 border-b sm:border-b-0 sm:border-r border-white/10">
              <p className="text-[11px] font-medium text-[#F97316]/70 uppercase tracking-widest mb-2">Guided setup tour</p>
              <h2 className="text-2xl font-bold text-white mb-1">We walk you through it.</h2>
              <p className="text-sm text-white/40 mb-8">Inside the terminal, a tour takes you from zero to your first position.</p>
              <div className="flex flex-col gap-3 mb-8">
                {["Choose pool", "Read pool info", "Set range", "Review deposit", "Create position"].map((s, i) => (
                  <div key={s} className="flex items-center gap-3">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-[#F97316]/10 text-[#F97316] text-[11px] font-bold flex items-center justify-center border border-[#F97316]/20">
                      {i + 1}
                    </span>
                    <p className="text-[13px] text-white/60">{s}</p>
                  </div>
                ))}
              </div>
              <button className="w-full flex items-center justify-center gap-2 bg-[#F97316] text-white text-sm font-bold py-3 rounded-xl hover:bg-[#ea6c0a] transition-colors">
                Start guided setup <IconArrow />
              </button>
            </div>

            {/* Right: screenshot placeholder */}
            {/* IMG: guided tour screenshot — what the in-terminal tour looks like */}
            {/* Replace with: <Image src="/tour-screenshot.png" fill alt="Guided tour" className="object-cover" /> */}
            <div className="relative min-h-[280px] bg-white/[0.02] flex items-center justify-center p-6">
              <ImgPlaceholder label="Screenshot — in-terminal guided tour UI" aspectRatio="4/3" />
            </div>

          </div>
        </div>

        {/* ── After deposit + checklist ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
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
        <div className="relative rounded-2xl overflow-hidden border border-white/10 p-10 text-center my-10">
          {/* IMG: background — abstract graphic or gradient illustration */}
          {/* Replace the div below with: <Image src="/cta-bg.png" fill alt="" className="object-cover opacity-20" /> */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F97316]/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-2">Ready to start?</h2>
            <p className="text-sm text-white/30 mb-6">Takes 5 minutes. Guided the whole way.</p>
            <button className="inline-flex items-center gap-2 bg-[#F97316] text-white text-[15px] font-bold px-10 py-3.5 rounded-xl hover:bg-[#ea6c0a] transition-colors">
              Start guided setup <IconArrow />
            </button>
          </div>
        </div>

      </main>
    </div>
  );
}