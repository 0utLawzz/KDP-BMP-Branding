import { ArrowUpRight, BookOpen, ChevronRight, Grid3X3, Link2, MoreHorizontal } from "lucide-react";

const colors = {
  tide: "#203B36",
  leaf: "#668C78",
  glow: "#E09B5E",
  cream: "#F8F5EF",
  soft: "#F1EDE4",
  green: "#D8E5DA",
  clay: "#B8734E",
};

function PageSeedMark({ mono = false, size = "md" }: { mono?: boolean; size?: "sm" | "md" }) {
  const dimensions = size === "sm" ? "h-11 w-11" : "h-20 w-20";
  const ink = mono ? colors.cream : colors.tide;
  const leaf = mono ? colors.cream : colors.leaf;
  const sun = mono ? colors.cream : colors.glow;
  return (
    <svg viewBox="0 0 160 160" className={dimensions} role="img" aria-label="Page and seed emblem">
      <path d="M80 11c38 0 69 31 69 69s-31 69-69 69S11 118 11 80 42 11 80 11Z" fill={mono ? "none" : colors.green} stroke={ink} strokeWidth="3" />
      <path d="M47 39h49c10 0 17 7 17 17v59c0 4 3 7 7 7H59c-7 0-12-5-12-12V39Z" fill={mono ? "none" : colors.cream} stroke={ink} strokeWidth="4" strokeLinejoin="round" />
      <path d="M57 39v68c0 8 5 15 15 15h48" fill="none" stroke={ink} strokeWidth="3" strokeLinecap="round" opacity=".42" />
      <path d="M78 98c0-21 10-34 27-41 1 18-7 35-27 41Z" fill={leaf} stroke={ink} strokeWidth="3" strokeLinejoin="round" />
      <path d="M78 98c10 0 18 4 24 12" fill="none" stroke={ink} strokeWidth="3" strokeLinecap="round" />
      <circle cx="113" cy="48" r="11" fill={sun} stroke={ink} strokeWidth="3" />
    </svg>
  );
}

function PostTile({ type }: { type: "intro" | "series" | "launch" }) {
  if (type === "intro") {
    return (
      <div className="relative aspect-square overflow-hidden bg-[#D8E5DA] p-5 text-[#203B36] sm:p-7">
        <div className="absolute right-[-22%] top-[-13%] h-48 w-48 rounded-full border border-[#668C78]/30" />
        <div className="absolute bottom-[-25%] left-[-8%] h-44 w-44 rounded-full bg-[#E09B5E]/25" />
        <div className="relative flex items-center justify-between text-[8px] font-bold uppercase tracking-[.2em] text-[#668C78]"><span>bright mindful pages</span><span>01 / 03</span></div>
        <div className="relative mt-10 sm:mt-14">
          <p className="font-['Lora'] text-[clamp(1.8rem,3.4vw,3.1rem)] leading-[.96] tracking-[-.06em]">A little room<br />to <em className="text-[#B8734E]">begin.</em></p>
          <p className="mt-4 max-w-[190px] text-[10px] leading-4 text-[#203B36]/70 sm:text-xs">Introducing the Daily Grounding Journal — a quiet place for the day you actually have.</p>
        </div>
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between sm:bottom-7 sm:left-7 sm:right-7">
          <div className="flex items-center gap-2"><PageSeedMark size="sm" /><span className="text-[8px] font-semibold uppercase tracking-[.12em]">series 01</span></div>
          <ArrowUpRight size={16} className="text-[#B8734E]" />
        </div>
      </div>
    );
  }
  if (type === "series") {
    return (
      <div className="relative aspect-square overflow-hidden bg-[#203B36] p-5 text-[#F8F5EF] sm:p-7">
        <div className="absolute inset-x-5 top-1/2 border-t border-[#D8E5DA]/20 sm:inset-x-7" />
        <div className="relative flex justify-between text-[8px] font-bold uppercase tracking-[.2em] text-[#D8E5DA]"><span>the journal series</span><span>02 / 03</span></div>
        <div className="relative mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-5">
          <div className="flex aspect-[.78] flex-col justify-between bg-[#F8F5EF] p-3 text-[#203B36] sm:p-4">
            <span className="text-[8px] font-bold uppercase tracking-[.14em] text-[#668C78]">01 / grounding</span>
            <p className="font-['Lora'] text-lg leading-[.94] tracking-[-.05em] sm:text-2xl">Daily<br />Grounding</p>
            <span className="h-1.5 w-7 bg-[#E09B5E]" />
          </div>
          <div className="flex aspect-[.78] flex-col justify-between bg-[#E09B5E] p-3 text-[#203B36] sm:p-4">
            <span className="text-[8px] font-bold uppercase tracking-[.14em]">02 / noticing</span>
            <p className="font-['Lora'] text-lg leading-[.94] tracking-[-.05em] sm:text-2xl">Mood &amp;<br />Notice</p>
            <span className="h-1.5 w-7 bg-[#203B36]" />
          </div>
        </div>
        <p className="absolute bottom-5 left-5 right-5 text-[10px] leading-4 text-[#F8F5EF]/65 sm:bottom-7 sm:left-7 sm:right-7">Different pages for different kinds of days.</p>
      </div>
    );
  }
  return (
    <div className="relative flex aspect-square flex-col justify-between overflow-hidden bg-[#E09B5E] p-5 text-[#203B36] sm:p-7">
      <div className="flex justify-between text-[8px] font-bold uppercase tracking-[.2em]"><span>now available</span><span>03 / 03</span></div>
      <div>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#203B36]"><PageSeedMark mono size="sm" /></div>
        <p className="font-['Lora'] text-[clamp(2rem,4vw,3.6rem)] leading-[.9] tracking-[-.07em]">Meet your<br /><em>daily return.</em></p>
        <p className="mt-4 max-w-[210px] text-[10px] leading-4 text-[#203B36]/75 sm:text-xs">The Daily Grounding Journal is made for noticing what helps, one page at a time.</p>
      </div>
      <div className="flex items-center justify-between border-t border-[#203B36]/25 pt-3 text-[8px] font-bold uppercase tracking-[.14em]"><span>brightmindfulpages.com</span><ChevronRight size={14} /></div>
    </div>
  );
}

export function JournalSeries() {
  return (
    <main className="min-h-screen bg-[#F1EDE4] px-4 py-5 text-[#203B36] sm:px-8 sm:py-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="mx-auto max-w-[1180px]">
        <header className="mb-6 flex items-start justify-between border-b border-[#203B36]/15 pb-5">
          <div><p className="font-mono text-[9px] font-semibold uppercase tracking-[.24em] text-[#668C78]">Social presence / direction C</p><h1 className="mt-2 font-['Lora'] text-xl tracking-[-.04em] sm:text-2xl">Journal Series</h1></div>
          <div className="hidden text-right sm:block"><p className="font-mono text-[9px] uppercase tracking-[.18em] text-[#203B36]/55">Feed rhythm study</p><p className="mt-1 text-xs text-[#203B36]/50">cover → story → invitation</p></div>
        </header>

        <section className="grid gap-7 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <div className="rounded-[1.6rem] bg-[#F8F5EF] p-5 shadow-[0_12px_35px_rgba(32,59,54,.06)] ring-1 ring-[#203B36]/10 sm:p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-[74px] w-[74px] shrink-0 items-center justify-center rounded-full bg-[#203B36]"><PageSeedMark mono size="md" /></div>
              <div className="min-w-0 flex-1"><div className="flex items-center justify-between gap-2"><h2 className="truncate text-sm font-bold">Bright Mindful Pages</h2><MoreHorizontal size={18} /></div><p className="mt-1 text-[11px] text-[#668C78]">@brightmindfulpages</p><p className="mt-3 text-xs leading-5 text-[#203B36]/72">Gentle journals for noticing, organizing, and returning to yourself. Useful pages for ordinary days.</p><button className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#203B36] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[.14em] text-[#F8F5EF] transition-transform hover:-translate-y-0.5"><Link2 size={13} /> visit the journal shelf</button></div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2 border-t border-[#203B36]/10 pt-5 text-center"><div><p className="font-['Lora'] text-lg">03</p><p className="text-[8px] uppercase tracking-[.13em] text-[#203B36]/50">books in series</p></div><div><p className="font-['Lora'] text-lg">1 page</p><p className="text-[8px] uppercase tracking-[.13em] text-[#203B36]/50">at a time</p></div><div><p className="font-['Lora'] text-lg">0%</p><p className="text-[8px] uppercase tracking-[.13em] text-[#203B36]/50">pressure</p></div></div>
            <div className="mt-5 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[.14em] text-[#668C78]"><BookOpen size={14} /> a growing collection of useful pages</div>
          </div>

          <div>
            <div className="mb-4 flex items-end justify-between"><div><p className="font-mono text-[9px] uppercase tracking-[.22em] text-[#668C78]">Profile grid / 3 posts</p><h3 className="mt-2 font-['Lora'] text-2xl tracking-[-.05em] sm:text-3xl">A feed that reads like a shelf.</h3></div><Grid3X3 size={18} className="mb-1 text-[#668C78]" /></div>
            <div className="grid grid-cols-3 gap-2 sm:gap-4"><PostTile type="intro" /><PostTile type="series" /><PostTile type="launch" /></div>
            <p className="mt-4 max-w-2xl text-xs leading-5 text-[#203B36]/58">Each square carries the same quiet series signal: a clear number, a recognizable page-and-seed emblem, and one useful thought. Covers can evolve while the collection stays unmistakable.</p>
          </div>
        </section>

        <section className="mt-8 grid gap-4 border-t border-[#203B36]/15 pt-7 md:grid-cols-[1fr_1.5fr]">
          <div className="rounded-2xl bg-[#D8E5DA] p-6"><p className="font-mono text-[9px] uppercase tracking-[.2em] text-[#668C78]">Series logic</p><h3 className="mt-3 max-w-sm font-['Lora'] text-2xl leading-[1.02] tracking-[-.05em]">Make the next book feel familiar before it feels new.</h3><p className="mt-4 max-w-sm text-sm leading-6 text-[#203B36]/68">The profile introduces a world, the grid rotates the collection, and the link invites a closer look without turning the feed into a storefront.</p></div>
          <div className="grid gap-3 sm:grid-cols-3"><div className="rounded-2xl bg-[#203B36] p-5 text-[#F8F5EF]"><span className="font-mono text-[9px] uppercase tracking-[.18em] text-[#D8E5DA]">01 / introduce</span><p className="mt-8 font-['Lora'] text-xl">Name the page.</p><p className="mt-2 text-xs leading-5 text-[#F8F5EF]/65">Give one journal a clear, welcoming reason to exist.</p></div><div className="rounded-2xl bg-[#E5DED1] p-5"><span className="font-mono text-[9px] uppercase tracking-[.18em] text-[#668C78]">02 / connect</span><p className="mt-8 font-['Lora'] text-xl">Show the family.</p><p className="mt-2 text-xs leading-5 text-[#203B36]/62">Let color and titles tell the story of the series.</p></div><div className="rounded-2xl bg-[#E09B5E] p-5"><span className="font-mono text-[9px] uppercase tracking-[.18em]">03 / invite</span><p className="mt-8 font-['Lora'] text-xl">Open the door.</p><p className="mt-2 text-xs leading-5 text-[#203B36]/68">A gentle launch note, with no urgency attached.</p></div></div>
        </section>
        <footer className="flex flex-col gap-2 border-t border-[#203B36]/15 py-6 text-[9px] uppercase tracking-[.18em] text-[#668C78] sm:flex-row sm:justify-between"><span>Bright Mindful Pages · Gentle Companion identity</span><span>page / seed / return</span></footer>
      </div>
    </main>
  );
}