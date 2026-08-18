import { ArrowUpRight, Bookmark, Grid3X3, Link2, MoreHorizontal, Share2 } from "lucide-react";

const colors = {
  tide: "#203B36",
  leaf: "#668C78",
  glow: "#E09B5E",
  cream: "#F8F5EF",
  soft: "#F1EDE4",
  green: "#D8E5DA",
};

function PageSeedMark({ mono = false, small = false }: { mono?: boolean; small?: boolean }) {
  const ink = mono ? colors.cream : colors.tide;
  return (
    <svg viewBox="0 0 160 160" className={small ? "h-12 w-12" : "h-16 w-16"} role="img" aria-label="Page and seed emblem">
      <path d="M80 11c38 0 69 31 69 69s-31 69-69 69S11 118 11 80 42 11 80 11Z" fill={mono ? "none" : colors.green} stroke={ink} strokeWidth="3" />
      <path d="M47 39h49c10 0 17 7 17 17v59c0 4 3 7 7 7H59c-7 0-12-5-12-12V39Z" fill={mono ? "none" : colors.cream} stroke={ink} strokeWidth="4" strokeLinejoin="round" />
      <path d="M57 39v68c0 8 5 15 15 15h48" fill="none" stroke={ink} strokeWidth="3" strokeLinecap="round" opacity=".42" />
      <path d="M78 98c0-21 10-34 27-41 1 18-7 35-27 41Z" fill={mono ? "none" : colors.leaf} stroke={ink} strokeWidth="3" strokeLinejoin="round" />
      <path d="M78 98c10 0 18 4 24 12" fill="none" stroke={ink} strokeWidth="3" strokeLinecap="round" />
      <circle cx="113" cy="48" r="11" fill={mono ? "none" : colors.glow} stroke={ink} strokeWidth="3" />
      <path d="M57 120h17" stroke={ink} strokeWidth="3" strokeLinecap="round" opacity=".6" />
    </svg>
  );
}

function PostFrame({ label, children, background }: { label: string; children: React.ReactNode; background: string }) {
  return (
    <div className="group">
      <div className="relative aspect-square overflow-hidden" style={{ background }}>
        {children}
        <div className="absolute bottom-3 left-3 flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[.2em] opacity-60">
          <PageSeedMark small /> <span>bright mindful pages</span>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[.16em]" style={{ color: colors.leaf }}>
        <span>{label}</span><ArrowUpRight size={13} />
      </div>
    </div>
  );
}

export function QuietJournal() {
  return (
    <main className="min-h-screen overflow-hidden" style={{ background: colors.soft, color: colors.tide, fontFamily: "'DM Sans', sans-serif" }}>
      <div className="mx-auto max-w-[1180px] px-5 py-6 sm:px-10 sm:py-10">
        <header className="flex items-start justify-between border-b pb-5" style={{ borderColor: `${colors.tide}22` }}>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[.25em]" style={{ color: colors.leaf }}>Social presence / direction A</p>
            <h1 className="mt-2 font-['Lora'] text-xl tracking-[-.04em]">Quiet Journal</h1>
          </div>
          <p className="max-w-[150px] text-right text-[10px] leading-4 opacity-55">A slower feed for small observations and steady returns.</p>
        </header>

        <section className="grid gap-10 py-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start lg:py-14">
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-24 w-24 items-center justify-center rounded-full p-2" style={{ background: colors.tide }}>
                <PageSeedMark mono />
              </div>
              <div>
                <h2 className="font-['Lora'] text-2xl leading-none tracking-[-.05em]">Bright Mindful<br />Pages</h2>
                <p className="mt-2 text-[10px] uppercase tracking-[.15em]" style={{ color: colors.leaf }}>@brightmindfulpages</p>
              </div>
            </div>
            <p className="mt-7 max-w-sm text-sm leading-6 opacity-75">Simple pages for noticing your day, tending to habits, and making room for what is here.</p>
            <button type="button" className="mt-5 flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-transform hover:-translate-y-0.5" style={{ background: colors.glow, color: colors.tide }}>
              <Link2 size={14} /> brightmindfulpages.com
            </button>
            <div className="mt-8 flex items-center gap-5 border-t pt-5 text-[10px] uppercase tracking-[.16em] opacity-55" style={{ borderColor: `${colors.tide}22` }}>
              <span><strong className="text-sm opacity-100">38</strong> posts</span><span><strong className="text-sm opacity-100">1.8k</strong> readers</span><span><strong className="text-sm opacity-100">12</strong> pages</span>
            </div>
          </div>
          <div className="rounded-[2rem] p-6 sm:p-8" style={{ background: colors.green }}>
            <div className="flex items-center justify-between">
              <div><p className="font-mono text-[9px] uppercase tracking-[.22em]" style={{ color: colors.leaf }}>Profile behavior</p><p className="mt-2 font-['Lora'] text-2xl tracking-[-.04em]">An inviting place to pause.</p></div>
              <Grid3X3 size={18} style={{ color: colors.leaf }} />
            </div>
            <div className="mt-7 grid grid-cols-3 gap-3">
              <div className="rounded-xl p-3 text-center" style={{ background: colors.cream }}><span className="font-['Lora'] text-2xl">01</span><p className="mt-1 text-[9px] uppercase tracking-[.14em] opacity-55">notice</p></div>
              <div className="rounded-xl p-3 text-center" style={{ background: colors.cream }}><span className="font-['Lora'] text-2xl">02</span><p className="mt-1 text-[9px] uppercase tracking-[.14em] opacity-55">tend</p></div>
              <div className="rounded-xl p-3 text-center" style={{ background: colors.cream }}><span className="font-['Lora'] text-2xl">03</span><p className="mt-1 text-[9px] uppercase tracking-[.14em] opacity-55">return</p></div>
            </div>
            <p className="mt-6 max-w-md text-xs leading-5 opacity-65">A compact avatar, direct link, and three repeating content cues make the profile recognizable without asking for performance.</p>
          </div>
        </section>

        <section className="border-t pt-10 sm:pt-12" style={{ borderColor: `${colors.tide}22` }}>
          <div className="mb-7 flex items-end justify-between"><div><p className="font-mono text-[9px] uppercase tracking-[.22em]" style={{ color: colors.leaf }}>Feed rhythm / 01—03</p><h3 className="mt-2 font-['Lora'] text-3xl tracking-[-.05em]">Pages worth saving.</h3></div><p className="hidden max-w-[190px] text-right text-xs leading-5 opacity-55 sm:block">One thought. One practice. One object to return to.</p></div>
          <div className="grid gap-8 md:grid-cols-3">
            <PostFrame label="01 / reflection prompt" background={colors.cream}>
              <div className="flex h-full flex-col justify-center px-7 sm:px-9">
                <p className="text-[9px] font-semibold uppercase tracking-[.22em]" style={{ color: colors.leaf }}>A quiet question</p>
                <p className="mt-5 font-['Lora'] text-[clamp(1.7rem,3vw,2.5rem)] leading-[1.06] tracking-[-.05em]">What felt a little easier than expected today?</p>
                <div className="mt-7 h-px w-12" style={{ background: colors.glow }} />
              </div>
            </PostFrame>
            <PostFrame label="02 / notice your day" background={colors.tide}>
              <div className="flex h-full flex-col justify-between p-7 text-center" style={{ color: colors.cream }}>
                <div className="flex justify-between text-[9px] uppercase tracking-[.2em]" style={{ color: colors.green }}><span>two minutes</span><span>02</span></div>
                <div><p className="font-['Lora'] text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.05] tracking-[-.05em]">Pause.<br />Notice.<br /><span style={{ color: colors.glow }}>Name one thing.</span></p><p className="mx-auto mt-5 max-w-[190px] text-xs leading-5 opacity-65">A small practice for meeting the day as it is.</p></div>
                <div className="mx-auto h-2 w-2 rounded-full" style={{ background: colors.glow }} />
              </div>
            </PostFrame>
            <PostFrame label="03 / journal detail" background={colors.glow}>
              <div className="absolute left-6 top-6 h-[78%] w-[70%] rotate-[-5deg] rounded-sm p-5 shadow-[10px_12px_0_#B8784D]" style={{ background: colors.cream }}>
                <div className="flex justify-between text-[8px] uppercase tracking-[.18em]" style={{ color: colors.leaf }}><span>tuesday</span><span>page 014</span></div>
                <p className="mt-10 font-['Lora'] text-2xl italic leading-tight">A little room<br />to notice.</p>
                <div className="mt-8 space-y-2 opacity-35"><div className="h-px w-full bg-current" /><div className="h-px w-[85%] bg-current" /><div className="h-px w-[62%] bg-current" /></div>
                <div className="absolute bottom-4 right-4"><PageSeedMark small /></div>
              </div>
              <div className="absolute bottom-14 right-7 rotate-6 text-[9px] uppercase tracking-[.18em]" style={{ color: colors.tide }}>open gently</div>
            </PostFrame>
          </div>
        </section>

        <footer className="mt-12 flex flex-col gap-3 border-t py-7 sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: `${colors.tide}22` }}>
          <p className="font-['Lora'] text-sm italic opacity-65">A page to return to, not a place to catch up.</p>
          <div className="flex items-center gap-4 text-[9px] uppercase tracking-[.18em]" style={{ color: colors.leaf }}><Bookmark size={13} /><span>save-worthy by design</span><Share2 size={13} /><MoreHorizontal size={15} /></div>
        </footer>
      </div>
    </main>
  );
}