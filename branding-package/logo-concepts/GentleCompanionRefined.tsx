import { ArrowUpRight, Check, Circle, Minus, MoveDownRight } from "lucide-react";

type MarkProps = {
  mono?: boolean;
  size?: "sm" | "md" | "lg";
};

function PageSeedMark({ mono = false, size = "md" }: MarkProps) {
  const dimensions = size === "lg" ? "h-40 w-40" : size === "sm" ? "h-16 w-16" : "h-28 w-28";
  const ink = mono ? "#F8F5EF" : "#203B36";
  const leaf = mono ? "#F8F5EF" : "#668C78";
  const sun = mono ? "#F8F5EF" : "#E09B5E";
  const paper = mono ? "none" : "#F8F5EF";
  return (
    <svg viewBox="0 0 160 160" className={dimensions} role="img" aria-label="Page with growing seed mark">
      <path d="M80 11c38 0 69 31 69 69s-31 69-69 69S11 118 11 80 42 11 80 11Z" fill={mono ? "none" : "#D8E5DA"} stroke={ink} strokeWidth="3" />
      <path d="M47 39h49c10 0 17 7 17 17v59c0 4 3 7 7 7H59c-7 0-12-5-12-12V39Z" fill={paper} stroke={ink} strokeWidth="4" strokeLinejoin="round" />
      <path d="M57 39v68c0 8 5 15 15 15h48" fill="none" stroke={ink} strokeWidth="3" strokeLinecap="round" opacity=".42" />
      <path d="M78 98c0-21 10-34 27-41 1 18-7 35-27 41Z" fill={leaf} stroke={ink} strokeWidth="3" strokeLinejoin="round" />
      <path d="M78 98c10 0 18 4 24 12" fill="none" stroke={ink} strokeWidth="3" strokeLinecap="round" />
      <circle cx="113" cy="48" r="11" fill={sun} stroke={ink} strokeWidth="3" />
      <path d="M57 120h17" stroke={ink} strokeWidth="3" strokeLinecap="round" opacity=".6" />
    </svg>
  );
}

function BookApplication() {
  return (
    <div className="relative flex h-[260px] w-[174px] shrink-0 flex-col overflow-hidden rounded-[4px] bg-[#F8F5EF] p-5 text-[#203B36] shadow-[14px_16px_0_#A9C0AA] ring-1 ring-[#203B36]/15">
      <div className="absolute inset-0 border-[8px] border-[#D8E5DA]" />
      <div className="relative flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.2em] text-[#668C78]"><span className="h-1 w-5 bg-[#E09B5E]" /> series 01</div>
      <div className="relative mt-10">
        <p className="font-['Lora'] text-[25px] leading-[.96] tracking-[-.05em]">The Daily<br />Grounding<br />Journal</p>
        <p className="mt-3 max-w-[110px] text-[8px] leading-3 text-[#203B36]/60">A gentle place to notice, organize, and return.</p>
      </div>
      <div className="relative mt-auto flex items-end justify-between">
        <PageSeedMark size="sm" />
        <span className="mb-2 text-right text-[7px] font-bold uppercase leading-3 tracking-[.12em]">Bright<br />Mindful<br />Pages</span>
      </div>
    </div>
  );
}

function Swatch({ label, hex, color }: { label: string; hex: string; color: string }) {
  return (
    <div className="flex items-center gap-3 text-xs">
      <span className="h-8 w-8 rounded-full ring-1 ring-[#203B36]/10" style={{ backgroundColor: color }} />
      <span className="font-medium">{label}</span>
      <span className="ml-auto font-mono text-[9px] opacity-55">{hex}</span>
    </div>
  );
}

export function GentleCompanionRefined() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F1EDE4] text-[#203B36]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="mx-auto max-w-[1440px] px-5 py-6 sm:px-10 sm:py-10 lg:px-16">
        <header className="flex items-start justify-between border-b border-[#203B36]/20 pb-5">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[.24em] text-[#668C78]">Identity refinement / 02</p>
            <h1 className="mt-2 font-['Lora'] text-xl tracking-[-.03em] sm:text-2xl">Bright Mindful Pages</h1>
          </div>
          <div className="text-right">
            <p className="font-mono text-[10px] uppercase tracking-[.18em] text-[#203B36]/60">Gentle Companion</p>
            <p className="mt-1 text-xs text-[#203B36]/55">KDP identity system · refined</p>
          </div>
        </header>

        <section className="grid gap-10 py-12 lg:grid-cols-[.88fr_1.12fr] lg:items-center lg:py-20">
          <div className="relative">
            <div className="absolute -left-14 -top-12 h-48 w-48 rounded-full bg-[#D8E5DA]/75 blur-3xl" />
            <p className="relative mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.2em] text-[#668C78]"><span className="h-2 w-2 rounded-full bg-[#E09B5E]" /> A mark for steady returns</p>
            <h2 className="relative max-w-xl font-['Lora'] text-[clamp(3.1rem,6.5vw,6.4rem)] leading-[.93] tracking-[-.07em]">A little<br /><span className="text-[#B8734E]">room to grow.</span></h2>
            <p className="mt-8 max-w-md text-base leading-7 text-[#203B36]/70">A tightened page-and-seed emblem for adults building a kinder daily practice. Clear in a thumbnail. Calm on a cover. Familiar across a growing journal series.</p>
            <div className="mt-9 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.2em] text-[#203B36]/60"><span className="h-px w-12 bg-[#E09B5E]" /> page / seed / return <MoveDownRight size={14} className="text-[#B8734E]" /></div>
          </div>
          <div className="relative flex min-h-[390px] items-center justify-center rounded-[2.2rem] bg-[#D8E5DA] p-8">
            <div className="absolute left-7 top-7 font-mono text-[9px] uppercase tracking-[.2em] text-[#668C78]">01 / primary stacked lockup</div>
            <div className="flex flex-col items-center text-center">
              <PageSeedMark size="lg" />
              <div className="-mt-1 font-['Lora'] text-3xl leading-[.98] tracking-[-.05em] sm:text-4xl">Bright Mindful<br />Pages</div>
              <div className="mt-5 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[.25em] text-[#668C78]"><span className="h-px w-5 bg-[#E09B5E]" /> gentle progress <span className="h-px w-5 bg-[#E09B5E]" /></div>
            </div>
            <div className="absolute bottom-7 right-7 font-mono text-[9px] uppercase tracking-[.2em] text-[#668C78]">01 / 05</div>
          </div>
        </section>

        <section className="border-t border-[#203B36]/20 py-11">
          <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div><p className="font-mono text-[10px] uppercase tracking-[.22em] text-[#668C78]">The refined family</p><h3 className="mt-2 font-['Lora'] text-2xl tracking-[-.04em]">One shape. Several useful lives.</h3></div>
            <p className="max-w-sm text-xs leading-5 text-[#203B36]/60 sm:text-right">The page gives structure. The seed gives a quiet sense of becoming. Reduced geometry keeps both legible when everything gets small.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-[1.12fr_.88fr_.88fr]">
            <div className="flex min-h-[235px] flex-col justify-between rounded-2xl bg-[#203B36] p-6 text-[#F8F5EF]">
              <div className="flex items-start justify-between"><p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#D8E5DA]">02 / horizontal lockup</p><ArrowUpRight size={15} className="text-[#E09B5E]" /></div>
              <div className="flex items-center gap-4"><PageSeedMark mono size="sm" /><div className="font-['Lora'] text-2xl leading-[.95] tracking-[-.04em]">Bright Mindful<br />Pages</div></div>
              <p className="text-xs leading-5 text-[#F8F5EF]/65">For website headers, author pages, and the quiet edge of a back cover.</p>
            </div>
            <div className="flex min-h-[235px] flex-col justify-between rounded-2xl border border-[#203B36]/15 bg-[#E5DED1] p-6">
              <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#668C78]">03 / compact emblem</p>
              <div className="flex items-center justify-center"><div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#E09B5E]"><PageSeedMark size="sm" /></div></div>
              <p className="text-xs leading-5 text-[#203B36]/60">The social avatar and book-spine stamp. No lettering required.</p>
            </div>
            <div className="flex min-h-[235px] flex-col justify-between rounded-2xl bg-[#668C78] p-6 text-[#F8F5EF]">
              <div className="flex justify-between"><p className="font-mono text-[10px] uppercase tracking-[.2em]">04 / one-color behavior</p><Minus size={15} /></div>
              <div className="flex items-center justify-center gap-4"><PageSeedMark mono size="sm" /><div className="font-['Lora'] text-xl leading-[.95]">Bright<br />Mindful<br />Pages</div></div>
              <p className="text-xs leading-5 text-[#F8F5EF]/75">Flat ink only. Works for emboss, foil, rubber stamp, and interior-page reproduction.</p>
            </div>
          </div>
        </section>

        <section className="grid gap-10 border-t border-[#203B36]/20 py-12 lg:grid-cols-[.84fr_1.16fr] lg:py-16">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.22em] text-[#668C78]">05 / series application</p>
            <h3 className="mt-3 max-w-md font-['Lora'] text-4xl leading-[1.02] tracking-[-.06em]">Designed to repeat, not compete.</h3>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[#203B36]/65">The emblem stays constant while the title, series number, and accent color can shift across mood, habit, anxiety-awareness, and physical-wellness journals.</p>
            <div className="mt-8 space-y-3 text-xs font-semibold uppercase tracking-[.14em] text-[#668C78]"><div className="flex items-center gap-2"><Check size={15} /> clear at 32 px</div><div className="flex items-center gap-2"><Check size={15} /> built for one ink</div><div className="flex items-center gap-2"><Check size={15} /> recognizable family signal</div></div>
          </div>
          <div className="flex flex-wrap items-end justify-center gap-14 rounded-[2rem] bg-[#C7D9CA] px-7 py-12 sm:gap-20">
            <div className="text-center"><BookApplication /><p className="mt-6 font-mono text-[9px] uppercase tracking-[.18em] text-[#203B36]/60">KDP cover / 6 × 9</p></div>
            <div className="text-center"><div className="flex h-36 w-36 items-center justify-center rounded-[2.4rem] bg-[#203B36] shadow-[9px_10px_0_#A2BBA5]"><PageSeedMark mono size="md" /></div><p className="mt-6 font-mono text-[9px] uppercase tracking-[.18em] text-[#203B36]/60">social avatar / 1:1</p></div>
          </div>
        </section>

        <section className="grid gap-5 border-t border-[#203B36]/20 py-10 md:grid-cols-[1.15fr_.85fr]">
          <div className="rounded-2xl bg-[#E5DED1] p-6 sm:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[.22em] text-[#668C78]">Practical usage note</p>
            <h3 className="mt-3 font-['Lora'] text-2xl tracking-[-.04em]">Give the mark room to breathe.</h3>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#203B36]/70">Use the stacked lockup when the identity is being introduced. Use the horizontal lockup in narrow headers and on the back cover. Reserve the emblem for avatars, spines, page corners, and tiny marks. In one color, remove the fill contrast and keep the page outline, seed, and sun as a single solid ink shape.</p>
          </div>
          <div className="rounded-2xl bg-[#E09B5E] p-6 sm:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[.22em] text-[#203B36]/65">Working palette</p>
            <div className="mt-6 space-y-3"><Swatch label="deep tide" hex="203B36" color="#203B36" /><Swatch label="leaf note" hex="668C78" color="#668C78" /><Swatch label="morning glow" hex="E09B5E" color="#E09B5E" /><Swatch label="page cream" hex="F8F5EF" color="#F8F5EF" /></div>
          </div>
        </section>

        <footer className="flex flex-col gap-4 border-t border-[#203B36]/20 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-['Lora'] text-sm italic text-[#203B36]/70">Gentle progress without pressure.</p>
          <div className="flex items-center gap-5 font-mono text-[9px] uppercase tracking-[.2em] text-[#668C78]"><span>Bright Mindful Pages</span><Circle size={9} fill="currentColor" /><span>identity hypothesis 02</span></div>
        </footer>
      </div>
    </main>
  );
}