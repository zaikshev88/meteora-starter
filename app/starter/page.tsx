// app/starter/page.tsx
// Requires: Tailwind CSS (already configured in Next.js project)
// Deploy: push to repo connected to Vercel — zero config needed

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started — Meteora",
  description: "Your first LP position, made simple. Learn the basics and start a guided setup flow.",
};

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconClock() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" stroke="#0F6E56" strokeWidth="1.5" />
      <path d="M8 5v3l2 1.5" stroke="#0F6E56" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 12L6 8l3 3 4-6" stroke="#534AB7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconAlert() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 3v5m0 3v.5" stroke="#854F0B" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="8" r="6" stroke="#854F0B" strokeWidth="1.5" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M2 5l2.5 2.5L8 3" stroke="#0F6E56" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <nav className="border-b border-gray-100 bg-white sticky top-0 z-10">
      <div className="max-w-3xl mx-auto px-5 h-14 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="font-medium text-gray-900 text-sm tracking-tight">Meteora</span>
          <div className="hidden sm:flex items-center gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">Pools</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Portfolio</a>
            <a href="/starter" className="text-gray-900 font-medium">Get started</a>
          </div>
        </div>
        <button className="text-sm bg-gray-900 text-white px-4 py-1.5 rounded-lg font-medium hover:bg-gray-700 transition-colors">
          Launch app
        </button>
      </div>
    </nav>
  );
}

// ─── Section wrapper ──────────────────────────────────────────────────────────

function Section({
  label,
  title,
  subtitle,
  children,
  noBorder = false,
}: {
  label: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  noBorder?: boolean;
}) {
  return (
    <section className={`py-10 ${noBorder ? "" : "border-b border-gray-100"}`}>
      <p className="text-[11px] font-medium text-gray-400 uppercase tracking-widest mb-1">{label}</p>
      <h2 className="text-xl font-medium text-gray-900 mb-1">{title}</h2>
      {subtitle && <p className="text-[15px] text-gray-500 leading-relaxed mb-0">{subtitle}</p>}
      {children}
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function StarterPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      <main className="max-w-3xl mx-auto px-5 pb-20">

        {/* ── Hero ── */}
        <div className="text-center py-16 border-b border-gray-100">
          <span className="inline-block text-[11px] font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-600 mb-4 tracking-wide">
            New to liquidity providing?
          </span>
          <h1 className="text-3xl sm:text-4xl font-medium text-gray-900 leading-tight mb-4">
            Your first LP position,<br className="hidden sm:block" /> made simple.
          </h1>
          <p className="text-base text-gray-500 leading-relaxed max-w-md mx-auto mb-8">
            LPing can feel overwhelming at first. This page gives you just enough to get started — then walks you through the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-gray-900 text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-gray-700 transition-colors">
              Start guided setup →
            </button>
            <button className="border border-gray-200 text-gray-700 text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
              Learn LP basics
            </button>
          </div>
        </div>

        {/* ── Why this page ── */}
        <Section
          label="Why this page exists"
          title="LPing doesn't have to be complicated."
          subtitle="Terms like ranges, bins, fees, and rebalancing can make it feel like a lot. But you don't need to understand everything before your first deposit. This page covers the essentials — and a guided setup inside the terminal does the rest."
        />

        {/* ── The basics ── */}
        <Section label="The basics" title="Three things to know before you start">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
            {/* Card 1 */}
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center mb-3">
                <IconClock />
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-1.5">What is LPing?</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                You deposit two tokens into a pool. Traders use your liquidity to swap. In return, you earn a share of the fees from every trade.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center mb-3">
                <IconChart />
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-1.5">How do you earn fees?</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                Every time someone trades in your pool, a small fee is charged. LPs split that fee proportionally based on how much liquidity they've provided.
              </p>
              <span className="inline-block mt-2.5 text-[11px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">
                Passive income while you hold
              </span>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center mb-3">
                <IconAlert />
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-1.5">The key risk</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                Your position has a price range. If price moves outside it, you stop earning fees until price returns or you rebalance.
              </p>
              <span className="inline-block mt-2.5 text-[11px] px-2 py-0.5 rounded-full bg-amber-50 text-amber-700">
                Going out of range = no fees
              </span>
            </div>
          </div>
        </Section>

        {/* ── Beginner starting point ── */}
        <Section
          label="Where to start"
          title="A beginner-friendly default"
          subtitle="You don't need to find the perfect setup. A simple starting point goes a long way."
        >
          <div className="mt-5 flex flex-col sm:flex-row items-start gap-4 bg-gray-50 border border-gray-100 rounded-xl p-5">
            <span className="shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700">
              Recommended
            </span>
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-1">Start with a well-known pair and a wider range</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                Pairs like SOL/USDC are widely traded, meaning more fee opportunities. A wider price range means you stay in range longer — fewer surprises while you're learning how it works.
              </p>
            </div>
          </div>
        </Section>

        {/* ── Guided setup tour ── */}
        <Section
          label="Guided setup tour"
          title="Ready? The terminal walks you through it."
          subtitle="Once inside, a step-by-step tour guides you through creating your first position. Here's what it covers:"
        >
          <div className="mt-5 flex flex-col gap-2">
            {[
              { n: 1, title: "Choose a pool", desc: "pick a pair you're comfortable with" },
              { n: 2, title: "Understand basic pool info", desc: "fees, volume, and activity at a glance" },
              { n: 3, title: "Select a range", desc: "choose how wide or narrow your position is" },
              { n: 4, title: "Review your deposit", desc: "confirm amounts before committing" },
              { n: 5, title: "Create your first position", desc: "you're in" },
            ].map((s) => (
              <div key={s.n} className="flex items-center gap-3 bg-white border border-gray-100 rounded-lg px-4 py-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-gray-900 text-white text-[11px] font-medium flex items-center justify-center">
                  {s.n}
                </span>
                <p className="text-[13px] text-gray-500">
                  <span className="font-medium text-gray-900">{s.title}</span> — {s.desc}
                </p>
              </div>
            ))}
          </div>
          <button className="mt-5 w-full bg-gray-900 text-white text-sm font-medium py-3 rounded-lg hover:bg-gray-700 transition-colors">
            Start guided setup →
          </button>
        </Section>

        {/* ── What to monitor ── */}
        <Section
          label="After you deposit"
          title="What to check once you're in"
          subtitle="Depositing is just step one. Here's what matters after:"
        >
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { dot: "bg-emerald-500", title: "Position in range?", desc: "If price moves out of your range, you stop earning. Check back and rebalance when needed." },
              { dot: "bg-blue-500", title: "Fees earned", desc: "Track how much you've earned from trading fees since you deposited." },
              { dot: "bg-amber-400", title: "Overall PnL", desc: "Your net position including fees earned and any change in token value." },
              { dot: "bg-orange-500", title: "Hold, rebalance, or withdraw?", desc: "There's no universal rule — it depends on your range, fees, and where price is heading." },
            ].map((m) => (
              <div key={m.title} className="bg-white border border-gray-100 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${m.dot}`} />
                  <h4 className="text-[13px] font-medium text-gray-900">{m.title}</h4>
                </div>
                <p className="text-[12px] text-gray-500 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Checklist ── */}
        <Section label="Before you go" title="A quick checklist for beginners" noBorder>
          <div className="mt-5 bg-gray-50 rounded-xl p-6 flex flex-col gap-4">
            {[
              { bold: "Start small.", rest: "You don't need to go big to learn how it works." },
              { bold: "Use tokens you recognize.", rest: "Familiar pairs are easier to monitor and understand." },
              { bold: "Use the recommended setup if unsure.", rest: "Wider range, well-known pair — that's a solid start." },
              { bold: "Out of range = no fees.", rest: "Keep an eye on your position after depositing." },
              { bold: "You don't need to get it perfect.", rest: "Your first position is how you learn." },
            ].map((item) => (
              <div key={item.bold} className="flex items-start gap-3">
                <span className="shrink-0 w-[18px] h-[18px] rounded-full bg-emerald-50 flex items-center justify-center mt-0.5">
                  <IconCheck />
                </span>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  <span className="font-medium text-gray-900">{item.bold}</span> {item.rest}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Final CTA ── */}
        <div className="text-center pt-10">
          <button className="bg-gray-900 text-white text-[15px] font-medium px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors">
            Start guided setup →
          </button>
          <p className="text-sm text-gray-400 mt-3">Takes about 5 minutes. Step-by-step guidance the whole way.</p>
        </div>

      </main>
    </div>
  );
}