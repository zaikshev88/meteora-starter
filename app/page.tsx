// app/starter/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "LP is the New Trading — Meteora",
  description: "Your first LP, made simple.",
};

function IconArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCheck({ color = "#F97316" }: { color?: string }) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M2 5l2.5 2.5L8 3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconX() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
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
          Create your first LP
        </button>
      </div>
    </nav>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] font-medium text-[#F97316]/70 uppercase tracking-widest mb-2">{children}</p>;
}

export default function StarterPage() {
  return (
    <div className="min-h-screen bg-[#0C0E12] text-white">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="fixed top-[-300px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#F97316]/10 rounded-full blur-[140px] pointer-events-none" />

      <Nav />

      <main className="relative max-w-4xl mx-auto px-5 pb-24">

        {/* ── 1. Hero ── */}
        <div className="text-center pt-24 pb-20 border-b border-white/10">
          <span className="inline-block text-[11px] font-medium px-3 py-1 rounded-full bg-[#F97316]/10 text-[#F97316] mb-6 tracking-widest uppercase border border-[#F97316]/20">
            For traders ready to do more than buy, sell, hold
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            LP is the<br />
            <span className="text-[#F97316]">New Trading</span>
          </h1>
          <p className="text-lg text-white/50 max-w-lg mx-auto mb-3 leading-relaxed">
            If you already trade, LPs give you another way to stay in the market and earn fees without needing to master everything on day one.
          </p>
          <p className="text-sm text-white/30 mb-10">Your first LP, made simple.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
            <button className="flex items-center justify-center gap-2 bg-[#F97316] text-white text-sm font-bold px-8 py-3 rounded-lg hover:bg-[#ea6c0a] transition-colors">
              Create your first LP <IconArrow />
            </button>
            <button className="flex items-center justify-center gap-2 border border-white/20 text-white/60 text-sm font-medium px-8 py-3 rounded-lg hover:bg-white/5 hover:text-white transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M5.5 5l4 2-4 2V5z" fill="currentColor"/>
              </svg>
              Watch the 3 minute intro
            </button>
          </div>
          {/* IMG: hero video thumbnail or terminal screenshot */}
          {/* Replace with: <Image src="/hero-video-thumb.png" ... /> */}
          <div className="relative w-full aspect-video rounded-2xl border border-white/10 bg-white/[0.02] flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 5l9 5-9 5V5z" fill="#F97316"/>
              </svg>
            </div>
            <p className="absolute bottom-5 left-0 right-0 text-center text-[12px] text-white/30">
              Watch this quick intro to see why more traders are starting with LPs on Meteora.
            </p>
          </div>
        </div>

        {/* ── 2. Why traders are starting to LP ── */}
        <div className="py-16 border-b border-white/10">
          <SectionLabel>Why it matters</SectionLabel>
          <h2 className="text-3xl font-bold text-white mb-3">Why traders are starting to LP</h2>
          <p className="text-white/40 text-[15px] mb-10">For many traders, buying and selling is no longer the only way to make money.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { title: "Trading only pays when price moves enough", body: "LPs give you another way to earn while staying in the market." },
              { title: "Holding can feel slow", body: "LPs can help you do more with the same capital." },
              { title: "Most traders only think in buy, sell, or hold", body: "LPs give you another option." },
            ].map((c) => (
              <div key={c.title} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#F97316]/20 transition-colors">
                <h3 className="text-sm font-semibold text-white mb-2 leading-snug">{c.title}</h3>
                <p className="text-[13px] text-white/40 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-white/30 italic">LPing is not a separate world. It is another tool traders can use.</p>
        </div>

        {/* ── 3. Is LP right for you ── */}
        <div className="py-16 border-b border-white/10">
          <SectionLabel>Who it is for</SectionLabel>
          <h2 className="text-3xl font-bold text-white mb-3">Is LP right for you?</h2>
          <p className="text-white/40 text-[15px] mb-10">LPing may be worth trying if this sounds like you.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {/* Good fit */}
            <div className="bg-[#F97316]/5 border border-[#F97316]/20 rounded-2xl p-6">
              <p className="text-sm font-semibold text-white mb-4">LP could be a good fit if you:</p>
              <div className="flex flex-col gap-3">
                {[
                  "Already trade on chain",
                  "Often hold tokens for a while",
                  "Want more ways to make money than just price moves",
                  "Are open to starting small and learning by doing",
                  "Want to try a new strategy without going all in",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="shrink-0 w-[18px] h-[18px] rounded-full bg-[#F97316]/10 border border-[#F97316]/20 flex items-center justify-center mt-0.5">
                      <IconCheck />
                    </span>
                    <p className="text-[13px] text-white/60 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Not a fit */}
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6">
              <p className="text-sm font-semibold text-white mb-4">LP may not be the best fit if you:</p>
              <div className="flex flex-col gap-3">
                {[
                  "Only want very fast in and out trades",
                  "Do not want to check on a position at all",
                  "Want every strategy to feel familiar right away",
                  "Do not want to experiment with a small amount first",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="shrink-0 w-[18px] h-[18px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center mt-0.5">
                      <IconX />
                    </span>
                    <p className="text-[13px] text-white/40 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-white/30 mb-8">You do not need to be an expert to start. You just need to start small and learn from your first position.</p>
          <div className="text-center">
            <button className="inline-flex items-center gap-2 bg-[#F97316] text-white text-sm font-bold px-8 py-3 rounded-lg hover:bg-[#ea6c0a] transition-colors">
              Try your first LP <IconArrow />
            </button>
          </div>
        </div>

        {/* ── 4. Why Meteora ── */}
        <div className="py-16 border-b border-white/10">
          <SectionLabel>Why Meteora</SectionLabel>
          <h2 className="text-3xl font-bold text-white mb-3">Why start on Meteora</h2>
          <p className="text-white/40 text-[15px] mb-10">If you are trying LPing for the first time, the product needs to feel simple enough to start and good enough to come back to.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { num: "01", title: "Easy to start", body: "Go from curious to first position without getting buried in complexity." },
              { num: "02", title: "Easy to start small", body: "Your first LP does not need to be a big commitment." },
              { num: "03", title: "Easy to keep learning", body: "Start with one position, then come back to track it, learn, and improve over time." },
            ].map((c) => (
              <div key={c.num} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#F97316]/20 transition-colors">
                <p className="text-3xl font-bold text-white/10 mb-4">{c.num}</p>
                <h3 className="text-sm font-semibold text-white mb-2">{c.title}</h3>
                <p className="text-[13px] text-white/40 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 5. Social proof ── */}
        <div className="py-16 border-b border-white/10">
          <SectionLabel>Social proof</SectionLabel>
          <h2 className="text-3xl font-bold text-white mb-3">Why traders are giving LPs a try</h2>
          <p className="text-white/40 text-[15px] mb-10">More traders are starting to see LPing as another way to stay active in the market.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              "I used to think LPing was only for DeFi natives. Starting small made it much easier to understand than I expected.",
              "Trading was all I knew. LPing gave me another way to make money while staying in the market.",
              "The first position was the hardest mentally. After that, it started to click.",
            ].map((quote, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
                <p className="text-[13px] text-white/60 leading-relaxed italic">"{quote}"</p>
                <div className="flex items-center gap-2 mt-auto">
                  <div className="w-7 h-7 rounded-full bg-[#F97316]/10 border border-[#F97316]/20" />
                  <p className="text-[11px] text-white/30">Meteora LP</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
            {[
              { value: "Billions", label: "in trading volume supported" },
              { value: "Solana-wide", label: "across the most active markets" },
              { value: "Thousands", label: "of traders already LPing" },
            ].map((s) => (
              <div key={s.label} className="bg-[#0C0E12] px-6 py-6 text-center">
                <p className="text-lg font-bold text-[#F97316] mb-1">{s.value}</p>
                <p className="text-[11px] text-white/30">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 6. FAQ ── */}
        <div className="py-16 border-b border-white/10">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-3xl font-bold text-white mb-10">Common questions</h2>
          <div className="flex flex-col gap-3">
            {[
              { q: "How much do I need to start?", a: "You can start small. Your first LP does not need to be a big commitment." },
              { q: "Do I need to fully understand LPing before I try it?", a: "No. The goal is to start simple, use a small amount, and learn from your first position." },
              { q: "What do I earn from LPing?", a: "LPs can earn fees while the position is active." },
              { q: "What are the risks?", a: "Like any on chain strategy, LPing has risks. That is why it is best to begin with a small amount you are comfortable experimenting with." },
              { q: "Can I close my position later?", a: "Yes. You can come back anytime to manage or close your position." },
              { q: "Why should I use Meteora?", a: "Meteora is designed to make LPing easier to start, easier to understand, and easier to keep using over time." },
            ].map((item) => (
              <details key={item.q} className="group bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 cursor-pointer hover:border-white/20 transition-colors">
                <summary className="text-sm font-medium text-white list-none flex items-center justify-between gap-4">
                  {item.q}
                  <svg className="shrink-0 w-4 h-4 text-white/30 group-open:rotate-180 transition-transform" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </summary>
                <p className="text-[13px] text-white/40 leading-relaxed mt-3">{item.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* ── 7. LP Army / Academy ── */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 my-12">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-[#F97316]/10 pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-0">
            <div className="p-8 flex flex-col justify-center">
              <SectionLabel>Want to go deeper?</SectionLabel>
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

        {/* ── 8. Final CTA ── */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 p-14 text-center my-12">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F97316]/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-3">Ready to try your first LP?</h2>
            <p className="text-sm text-white/40 mb-8 max-w-sm mx-auto">Start small, keep it simple, and see how LPing feels for yourself.</p>
            <button className="inline-flex items-center gap-2 bg-[#F97316] text-white text-[15px] font-bold px-10 py-3.5 rounded-xl hover:bg-[#ea6c0a] transition-colors mb-4">
              Create your first LP <IconArrow />
            </button>
            <p className="text-[12px] text-white/25">You do not need to get it perfect on the first try.</p>
          </div>
        </div>

      </main>
    </div>
  );
}