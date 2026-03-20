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
          <Image src="/full-logo-on-dark.png" width={100} height={20} alt="Meteora" className="h-5 w-auto" />
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
            Your first LP position,<br className="hidden sm:block" />
            <span className="text-[#F97316]">made simple.</span>
          </h1>
          <p className="text-lg text-white/40 max-w-sm mx-auto mb-10 leading-relaxed">
            Set up your first liquidity position in minutes, guided step by step.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
            <button className="flex items-center justify-center gap-2 bg-[#F97316] text-white text-sm font-bold px-8 py-3 rounded-lg hover:bg-[#ea6c0a] transition-colors">
              Start guided setup <IconArrow />
            </button>
            <a href="#basics" className="flex items-center justify-center gap-2 border border-white/20 text-white/60 text-sm font-medium px-8 py-3 rounded-lg hover:bg-white/5 hover:text-white transition-colors">
              How it works
            </a>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E12] via-transparent to-transparent z-10 rounded-2xl pointer-events-none" />
            <ImgPlaceholder label="Hero image — terminal screenshot or product illustration" aspectRatio="16/7" />
          </div>
        </div>

        {/* ── Basics ── */}
        <div id="basics" className="py-10 mb-4 border-b border-white/10">
          <p className="text-[11px] font-medium text-[#F97316]/70 uppercase tracking-widest mb-2">The basics</p>
          <h2 className="text-2xl font-bold text-white mb-8">Three things to know</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { icon: "deposit", title: "Deposit & earn", body: "Add two tokens to a pool. Every trade earns you a fee automatically.", tag: null, tagStyle: "" },
              { icon: "fees", title: "Fees are automatic", body: "You earn passively. Fees accumulate as trades happen with no action needed.", tag: "Passive income", tagStyle: "bg-[#F97316]/10 text-[#F97316] border-[#F97316]/20" },
              { icon: "range", title: "Watch your range", body: "If price leaves your range, fees pause. Stay in range to keep earning.", tag: "Key risk", tagStyle: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
            ].map((c) => (
              <div key={c.icon} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#F97316]/20 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#F97316]/10 border border-[#F97316]/10 flex items-center justify-center mb-5">
                  {c.icon === "deposit" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="#F97316" strokeWidth="1.5"/>
                      <path d="M12 8v8M9 13l3 3 3-3" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 8h8" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
                    </svg>
                  )}
                  {c.icon === "fees" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M3 17l4-5 4 3 4-6 4 4" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 12V7a1 1 0 011-1h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1v-2" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
                    </svg>
                  )}
                  {c.icon === "range" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="10" width="18" height="4" rx="2" fill="#F97316" fillOpacity="0.15" stroke="#F97316" strokeWidth="1.5" strokeOpacity="0.4"/>
                      <path d="M12 3v4M12 17v4" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
                      <circle cx="12" cy="12" r="2.5" fill="#F97316"/>
                      <path d="M7 12H3M21 12h-4" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
                    </svg>
                  )}
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{c.title}</h3>
                <p className="text-[13px] text-white/40 leading-relaxed mb-3">{c.body}</p>
                {c.tag && (
                  <span className={`inline-block text-[11px] px-2 py-0.5 rounded-full border ${c.tagStyle}`}>{c.tag}</span>
                )}
              </div>
            ))}
          </div>
          <ImgPlaceholder label="Illustration — LP range concept or fee flow graphic" aspectRatio="16/6" />
        </div>

        {/* ── Guided tour ── */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden my-10">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="p-8 border-b sm:border-b-0 sm:border-r border-white/10">
              <p className="text-[11px] font-medium text-[#F97316]/70 uppercase tracking-widest mb-2">Guided setup tour</p>
              <h2 className="text-2xl font-bold text-white mb-1">We walk you through it.</h2>
              <p className="text-sm text-white/40 mb-8">Inside the terminal, a tour takes you from zero to your first position.</p>
              <div className="flex flex-col gap-3 mb-8">
                {["Read pool info", "Deposit tokens", "Set range", "Review", "Create position"].map((s, i) => (
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
                { dot: "bg-[#F97316]", title: "In range?", desc: "Price out of range means fees are paused." },
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

        {/* ── DAMM v2 callout ── */}
        <div className="my-10 px-5 py-5 bg-white/[0.02] border border-white/10 rounded-xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[13px] text-white/40 mb-1">
                This guide covers <span className="text-white font-medium">DLMM</span>, Meteora's flagship product.
              </p>
              <p className="text-[13px] text-white/40 leading-relaxed">
                <span className="text-white font-medium">DAMM v2</span> is also available. A more hands-off, set-and-forget pool type suited for longer time horizons. No guided setup yet but you can get a feel for it below.
              </p>
            </div>
            <a href="#" className="shrink-0 inline-flex items-center gap-1.5 text-[12px] text-[#F97316] border border-[#F97316]/20 bg-[#F97316]/10 px-3 py-1.5 rounded-lg hover:bg-[#F97316]/20 transition-colors whitespace-nowrap">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M4.5 4l4 2-4 2V4z" fill="currentColor"/>
              </svg>
              Watch video
            </a>
          </div>
        </div>

        {/* ── LP Army / Academy ── */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 my-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-[#F97316]/10 pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-0">
            <div className="p-8 flex flex-col justify-center">
              <p className="text-[11px] font-medium text-[#F97316]/70 uppercase tracking-widest mb-2">Want to go deeper?</p>
              <h2 className="text-2xl font-bold text-white mb-3">Learn with the LP Army</h2>
              <p className="text-sm text-white/40 leading-relaxed mb-6">
                From the basics of providing liquidity to advanced Meteora strategies. Learn it all through the LP Army Academy, the biggest LP community in crypto.
              </p>
              <a
                href="https://lparmy.meteora.ag"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#F97316] text-white text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-[#ea6c0a] transition-colors w-fit"
              >
                Go to LP Academy
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
            <div className="p-6 flex flex-col gap-3 border-t sm:border-t-0 sm:border-l border-white/10">
              <p className="text-[11px] font-medium text-white/30 uppercase tracking-widest mb-1">What you'll learn</p>
              {[
                { duration: "1–2 hrs", label: "Start with Fundamentals", sublabel: "Zero to Hero in LP" },
                { duration: "2–3 hrs", label: "Advanced LP Strategies", sublabel: "Ranges, rebalancing, risk" },
                { duration: "1 hr", label: "Meteora-specific Tools", sublabel: "DLMM, vaults, DAMM" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3">
                  <span className="text-[11px] text-white/30 mt-0.5 shrink-0 w-12">{item.duration}</span>
                  <div>
                    <p className="text-[13px] font-medium text-white">{item.label}</p>
                    <p className="text-[11px] text-white/40">{item.sublabel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Final CTA ── */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 p-10 text-center my-10">
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