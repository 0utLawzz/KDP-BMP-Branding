import { ArrowUpRight, Check, Minus, Sparkle } from "lucide-react";

function CompanionMark({ mono = false, compact = false }: { mono?: boolean; compact?: boolean }) {
  const ink = mono ? "#F7F3EA" : "#243B37";
  const paper = mono ? "none" : "#F7F3EA";
  const sun = mono ? "#F7F3EA" : "#E7A66A";
  const sprout = mono ? "#F7F3EA" : "#789B85";
  return (
    <svg
      viewBox="0 0 180 180"
      aria-label="Page and quiet glow emblem"
      className={compact ? "h-20 w-20" : "h-36 w-36"}
      role="img"
    >
      <circle cx="90" cy="90" r="77" fill={mono ? "none" : "#DDE7DE"} stroke={ink} strokeWidth="3" />
      <path d="M50 47c0-5 4-9 9-9h52c10 0 18 8 18 18v68c0 5-4 9-9 9H61c-6 0-11-5-11-11V47Z" fill={paper} stroke={ink} strokeWidth="4" />
      <path d="M61 39h42c7 0 12 5 12 12v73c0 5 4 9 9 9" fill="none" stroke={ink} strokeWidth="3" opacity=".48" />
      <path d="M82 92c2-21 12-34 28-39 1 17-6 34-28 39Z" fill={sprout} stroke={ink} strokeWidth="3" />
      <path d="M82 93c8 0 17 4 23 12" fill="none" stroke={ink} strokeWidth="3" strokeLinecap="round" />
      <circle cx="116" cy="54" r="12" fill={sun} stroke={ink} strokeWidth="3" />
      <path d="M53 119h31M53 128h20" stroke={ink} strokeWidth="3" strokeLinecap="round" opacity=".7" />
    </svg>
  );
}

function MiniBook() {
  return (
    <div className="relative h-48 w-32 shrink-0 overflow-hidden rounded-[3px] bg-[#F7F3EA] shadow-[10px_12px_0_#B8C9B9] ring-1 ring-[#243B37]/15">
      <div className="absolute inset-0 border-[7px] border-[#DDE7DE]" />
      <div className="absolute left-3 top-3 h-1 w-7 bg-[#E7A66A]" />
      <div className="absolute left-4 right-4 top-12">
        <p className="font-['DM_Sans'] text-[8px] font-bold uppercase tracking-[.18em] text-[#789B85]">A daily practice</p>
        <p className="mt-2 font-['Libre_Baskerville'] text-[17px] leading-[1.1] text-[#243B37]">Mindful<br />Pages</p>
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
        <CompanionMark compact />
      </div>
      <p className="absolute bottom-2 left-0 right-0 text-center font-['DM_Sans'] text-[6px] font-bold uppercase tracking-[.15em] text-[#243B37]">Bright Mindful Pages</p>
    </div>
  );
}

export function GentleCompanion() {
  return (
    <main
      className="min-h-screen overflow-hidden bg-[#F3EFE6] text-[#243B37]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="mx-auto max-w-[1400px] px-5 py-6 sm:px-10 sm:py-10 lg:px-16">
        <header className="flex items-start justify-between border-b border-[#243B37]/20 pb-5">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[.25em] text-[#789B85]">Identity study / 01</p>
            <h1 className="mt-2 font-['Libre_Baskerville'] text-xl tracking-tight sm:text-2xl">Bright Mindful Pages</h1>
          </div>
          <div className="text-right">
            <p className="font-mono text-[10px] uppercase tracking-[.18em] text-[#243B37]/60">Gentle Companion</p>
            <p className="mt-1 text-xs text-[#243B37]/60">KDP brand system · first round</p>
          </div>
        </header>

        <section className="grid gap-10 py-12 lg:grid-cols-[1.12fr_.88fr] lg:items-center lg:py-20">
          <div className="relative">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#DDE7DE]/70 blur-2xl" />
            <p className="relative mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.22em] text-[#789B85]"><Sparkle size={14} /> A small daily companion</p>
            <h2 className="relative max-w-3xl font-['Libre_Baskerville'] text-[clamp(3rem,7vw,6.6rem)] leading-[.94] tracking-[-.055em]">
              Room to<br /><span className="text-[#B9794E]">notice.</span>
            </h2>
            <p className="mt-8 max-w-md text-base leading-7 text-[#243B37]/70">
              A warm, contained identity for everyday reflection — structured enough to trust, gentle enough to return to.
            </p>
            <div className="mt-10 flex items-center gap-4 text-xs font-semibold uppercase tracking-[.18em]">
              <span className="h-px w-12 bg-[#E7A66A]" /> page · glow · practice
            </div>
          </div>
          <div className="relative flex min-h-[340px] items-center justify-center rounded-[2.5rem] bg-[#DDE7DE] p-8">
            <div className="absolute left-7 top-7 font-mono text-[9px] uppercase tracking-[.2em] text-[#789B85]">Primary lockup</div>
            <div className="flex flex-col items-center text-center">
              <CompanionMark />
              <div className="-mt-2 font-['Libre_Baskerville'] text-2xl leading-tight tracking-[-.03em] sm:text-3xl">Bright Mindful<br />Pages</div>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.24em] text-[#789B85]"><span className="h-px w-5 bg-[#E7A66A]" /> everyday, gently <span className="h-px w-5 bg-[#E7A66A]" /></div>
            </div>
            <div className="absolute bottom-7 right-7 font-mono text-[9px] uppercase tracking-[.2em] text-[#789B85]">01 / 04</div>
          </div>
        </section>

        <section className="border-t border-[#243B37]/20 py-10">
          <div className="mb-7 flex items-end justify-between">
            <div><p className="font-mono text-[10px] uppercase tracking-[.22em] text-[#789B85]">The system</p><h3 className="mt-2 font-['Libre_Baskerville'] text-2xl">A mark with a quiet pulse.</h3></div>
            <p className="hidden max-w-xs text-right text-xs leading-5 text-[#243B37]/60 sm:block">The page is the container. The seed is the daily return. The glow is progress without pressure.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_1.3fr_1fr]">
            <div className="flex min-h-[220px] flex-col justify-between rounded-2xl bg-[#243B37] p-6 text-[#F7F3EA]">
              <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#DDE7DE]">02 / compact emblem</p>
              <div className="flex justify-center"><CompanionMark compact mono /></div>
              <p className="text-xs leading-5 text-[#F7F3EA]/65">Built to hold at avatar size, a spine stamp, or a quiet corner on a page.</p>
            </div>
            <div className="flex min-h-[220px] flex-col justify-between rounded-2xl border border-[#243B37]/15 bg-[#E9E4D8] p-6">
              <div className="flex justify-between"><p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#789B85]">03 / one-color test</p><Minus size={16} className="text-[#B9794E]" /></div>
              <div className="flex items-center justify-center gap-5">
                <CompanionMark compact mono />
                <div className="font-['Libre_Baskerville'] text-2xl leading-tight">Bright<br />Mindful<br />Pages</div>
              </div>
              <p className="text-xs leading-5 text-[#243B37]/60">Legible in ink, emboss, foil, or a single dark print pass.</p>
            </div>
            <div className="min-h-[220px] rounded-2xl bg-[#E7A66A] p-6">
              <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#243B37]/70">04 / palette</p>
              <div className="mt-7 space-y-3">
                <div className="flex items-center gap-3 text-xs font-semibold"><span className="h-7 w-7 rounded-full bg-[#243B37]" /> deep moss <span className="ml-auto font-mono text-[9px] opacity-60">243B37</span></div>
                <div className="flex items-center gap-3 text-xs font-semibold"><span className="h-7 w-7 rounded-full bg-[#789B85]" /> leaf note <span className="ml-auto font-mono text-[9px] opacity-60">789B85</span></div>
                <div className="flex items-center gap-3 text-xs font-semibold"><span className="h-7 w-7 rounded-full bg-[#E7A66A]" /> warm glow <span className="ml-auto font-mono text-[9px] opacity-60">E7A66A</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-10 border-t border-[#243B37]/20 py-12 lg:grid-cols-[.9fr_1.1fr] lg:py-16">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.22em] text-[#789B85]">In context</p>
            <h3 className="mt-3 max-w-sm font-['Libre_Baskerville'] text-4xl leading-[1.05] tracking-[-.04em]">A familiar shape for a steady ritual.</h3>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[#243B37]/65">Friendly at first glance. Grounded on a shelf. Distinct enough to become a family across mood, habit, and wellness journals.</p>
            <div className="mt-8 flex gap-3 text-xs font-semibold uppercase tracking-[.15em] text-[#789B85]"><Check size={15} /> clear at a glance</div>
          </div>
          <div className="flex flex-wrap items-end justify-center gap-14 rounded-[2rem] bg-[#C7D7C9] px-6 py-12 sm:gap-20">
            <div className="text-center">
              <MiniBook />
              <p className="mt-5 font-mono text-[9px] uppercase tracking-[.18em] text-[#243B37]/60">Book cover / 6 × 9</p>
            </div>
            <div className="text-center">
              <div className="flex h-32 w-32 items-center justify-center rounded-[2.2rem] bg-[#243B37] shadow-[8px_9px_0_#A4BBA7]"><CompanionMark compact mono /></div>
              <p className="mt-5 font-mono text-[9px] uppercase tracking-[.18em] text-[#243B37]/60">Social avatar / 1:1</p>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-4 border-t border-[#243B37]/20 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-['Libre_Baskerville'] text-sm italic text-[#243B37]/70">Make space for the page you are on.</p>
          <div className="flex items-center gap-5 font-mono text-[9px] uppercase tracking-[.2em] text-[#789B85]"><span>Bright Mindful Pages</span><ArrowUpRight size={14} /><span>identity hypothesis 01</span></div>
        </footer>
      </div>
    </main>
  );
}