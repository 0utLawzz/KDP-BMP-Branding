import { Bookmark, Check, ChevronRight, Circle, Heart, Link2, MoreHorizontal, Send, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

const colors = {
  tide: "#203B36",
  leaf: "#668C78",
  glow: "#E09B5E",
  cream: "#F8F5EF",
  soft: "#F1EDE4",
  green: "#D8E5DA",
  inkSoft: "rgba(32,59,54,.64)",
};

function PageSeedMark({ mono = false, size = 56 }: { mono?: boolean; size?: number }) {
  const ink = mono ? colors.cream : colors.tide;
  return (
    <svg viewBox="0 0 160 160" width={size} height={size} role="img" aria-label="Page and seed emblem">
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

function PostShell({ children, tone, label, caption }: { children: ReactNode; tone: string; label: string; caption: string }) {
  return (
    <article className="overflow-hidden rounded-[24px] border border-[#203B36]/10 bg-[#F8F5EF] shadow-[0_18px_36px_rgba(32,59,54,.08)]">
      <div className="flex items-center justify-between border-b border-[#203B36]/10 px-4 py-3">
        <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full" style={{ background: tone }} /><span className="font-mono text-[9px] font-bold uppercase tracking-[.16em] text-[#203B36]/55">{label}</span></div>
        <MoreHorizontal size={15} className="text-[#203B36]/45" />
      </div>
      <div className="aspect-square">{children}</div>
      <div className="flex items-center gap-3 px-4 pt-3 text-[#203B36]/65"><Heart size={16} /><Send size={15} /><Bookmark size={16} className="ml-auto" /></div>
      <p className="px-4 pb-4 pt-2 text-[11px] leading-4 text-[#203B36]/65">{caption}</p>
    </article>
  );
}

function DailyCheckIn() {
  return <PostShell tone={colors.glow} label="01 · daily check-in" caption="A useful pause can be small. Save this for your next check-in.">
    <div className="flex h-full flex-col justify-between bg-[#D8E5DA] p-5 text-[#203B36]">
      <div className="flex justify-between text-[9px] font-bold uppercase tracking-[.18em]"><span>Today, gently</span><span>01 / 03</span></div>
      <div><div className="mb-4 h-px w-10 bg-[#E09B5E]" /><h3 className="font-['Lora'] text-[clamp(1.65rem,3vw,2.5rem)] leading-[.98] tracking-[-.05em]">What is here<br />with you today?</h3><p className="mt-4 max-w-[190px] text-[11px] leading-4 text-[#203B36]/65">Name one feeling, one need, and one kind next step.</p></div>
      <div className="flex items-center justify-between border-t border-[#203B36]/15 pt-3 text-[9px] font-bold uppercase tracking-[.13em] text-[#668C78]"><span>notice · name · choose</span><Circle size={18} className="text-[#E09B5E]" /></div>
    </div>
  </PostShell>;
}

function HabitPrompt() {
  return <PostShell tone={colors.leaf} label="02 · habit anchor" caption="Try pairing one gentle action with something already in your day.">
    <div className="relative flex h-full flex-col justify-between bg-[#203B36] p-5 text-[#F8F5EF]">
      <div className="absolute right-5 top-5 rounded-full border border-[#D8E5DA]/30 px-2 py-1 font-mono text-[8px] uppercase tracking-[.14em] text-[#D8E5DA]">low pressure</div>
      <div className="mt-8"><p className="font-mono text-[9px] uppercase tracking-[.18em] text-[#E09B5E]">A tiny habit prompt</p><h3 className="mt-3 font-['Lora'] text-[clamp(1.7rem,3vw,2.55rem)] leading-[.96] tracking-[-.05em]">When I <span className="text-[#D8E5DA]">___</span>,<br />I can also <span className="text-[#E09B5E]">___</span>.</h3></div>
      <div className="space-y-2 text-[10px] text-[#F8F5EF]/70"><div className="flex items-center gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#668C78] text-[#F8F5EF]"><Check size={12} /></span> after brushing teeth → drink water</div><div className="flex items-center gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#668C78] text-[#F8F5EF]"><Check size={12} /></span> after lunch → step outside</div></div>
    </div>
  </PostShell>;
}

function WellnessReminder() {
  return <PostShell tone={colors.glow} label="03 · save this" caption="Your body is information, not a score. Notice without judging.">
    <div className="flex h-full flex-col justify-between bg-[#E09B5E] p-5 text-[#203B36]">
      <div className="flex items-center justify-between"><PageSeedMark size={40} /><span className="rounded-full bg-[#F8F5EF]/60 px-2 py-1 font-mono text-[8px] uppercase tracking-[.14em]">wellness note</span></div>
      <div><h3 className="font-['Lora'] text-[clamp(1.65rem,3vw,2.45rem)] leading-[.98] tracking-[-.05em]">Check in with<br />the basics.</h3><div className="mt-5 grid grid-cols-3 gap-2 text-center text-[9px] font-bold uppercase tracking-[.08em]"><div className="rounded-xl bg-[#F8F5EF]/70 p-2">rest</div><div className="rounded-xl bg-[#F8F5EF]/70 p-2">water</div><div className="rounded-xl bg-[#F8F5EF]/70 p-2">motion</div></div></div>
      <p className="max-w-[210px] border-t border-[#203B36]/20 pt-3 text-[10px] leading-4 text-[#203B36]/70">Ask: “What would support me for the next hour?”</p>
    </div>
  </PostShell>;
}

export function DailyPractice() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F1EDE4] text-[#203B36]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="mx-auto max-w-[1280px] px-5 py-6 sm:px-9 sm:py-9 lg:px-14">
        <header className="flex items-center justify-between border-b border-[#203B36]/15 pb-5">
          <div className="flex items-center gap-3"><PageSeedMark size={38} /><div><p className="font-['Lora'] text-base leading-none">Bright Mindful Pages</p><p className="mt-1 font-mono text-[8px] uppercase tracking-[.2em] text-[#668C78]">social starter kit / B</p></div></div>
          <div className="hidden items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#203B36]/50 sm:flex"><span className="h-2 w-2 rounded-full bg-[#E09B5E]" /> Direction B · Daily Practice</div>
        </header>

        <section className="grid gap-8 py-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end lg:py-14">
          <div><p className="mb-4 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#668C78]"><Sparkles size={13} /> useful, then beautiful</p><h1 className="max-w-xl font-['Lora'] text-[clamp(2.8rem,6vw,5.8rem)] leading-[.9] tracking-[-.07em]">A little structure<br /><span className="text-[#B8734E]">for right now.</span></h1><p className="mt-6 max-w-md text-sm leading-6 text-[#203B36]/65">A feed of small actions for noticing, anchoring, and caring for the body — without turning a day into a performance.</p></div>
          <div className="rounded-[28px] bg-[#F8F5EF] p-5 shadow-[0_20px_40px_rgba(32,59,54,.07)] ring-1 ring-[#203B36]/10 sm:p-7">
            <div className="flex items-start gap-4 border-b border-[#203B36]/10 pb-6"><div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-[22px] bg-[#203B36]"><PageSeedMark mono size={60} /></div><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><h2 className="font-['Lora'] text-xl">Bright Mindful Pages</h2><span className="rounded-full bg-[#D8E5DA] px-2 py-1 text-[9px] font-bold text-[#668C78]">gentle companion</span></div><p className="mt-1 font-mono text-[10px] text-[#203B36]/50">@brightmindfulpages</p><p className="mt-3 max-w-sm text-[12px] leading-5 text-[#203B36]/70">Simple pages for mood, habits, and everyday wellness. Notice what helps. Return when ready.</p></div></div>
            <div className="flex flex-wrap items-center gap-3 pt-5"><button className="flex items-center gap-2 rounded-full bg-[#203B36] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[.14em] text-[#F8F5EF]"><Link2 size={13} /> start a daily page</button><span className="text-[10px] text-[#203B36]/50">brightmindfulpages.com</span></div>
          </div>
        </section>

        <section className="border-t border-[#203B36]/15 py-9"><div className="mb-6 flex items-end justify-between"><div><p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#668C78]">The repeatable feed</p><h2 className="mt-2 font-['Lora'] text-2xl tracking-[-.04em]">Three posts to try today.</h2></div><p className="hidden max-w-xs text-right text-[11px] leading-4 text-[#203B36]/55 sm:block">Practical prompts, clearly bounded for a calm and recognizable scroll.</p></div><div className="grid gap-5 md:grid-cols-3"><DailyCheckIn /><HabitPrompt /><WellnessReminder /></div></section>

        <section className="grid gap-4 border-t border-[#203B36]/15 py-9 sm:grid-cols-[1.3fr_.7fr]"><div className="rounded-2xl bg-[#D8E5DA] p-6"><p className="font-mono text-[9px] font-bold uppercase tracking-[.2em] text-[#668C78]">story rhythm</p><div className="mt-3 flex flex-wrap items-center gap-3 font-['Lora'] text-xl"><span>notice</span><ChevronRight size={17} /><span>try</span><ChevronRight size={17} /><span>return</span></div><p className="mt-3 max-w-lg text-xs leading-5 text-[#203B36]/65">Each post offers one useful handle, then leaves room for a person to decide what fits.</p></div><div className="rounded-2xl bg-[#668C78] p-6 text-[#F8F5EF]"><p className="font-mono text-[9px] uppercase tracking-[.2em] text-[#D8E5DA]">identity anchor</p><div className="mt-4 flex items-center gap-3"><PageSeedMark mono size={45} /><p className="font-['Lora'] text-lg leading-[.95]">Bright Mindful<br />Pages</p></div></div></section>
        <footer className="flex flex-col gap-3 border-t border-[#203B36]/15 py-6 sm:flex-row sm:items-center sm:justify-between"><p className="font-['Lora'] text-sm italic text-[#203B36]/65">Small practice. Real life.</p><p className="font-mono text-[9px] uppercase tracking-[.18em] text-[#203B36]/45">page / seed / return <span className="mx-2">·</span> social direction B</p></footer>
      </div>
    </main>
  );
}