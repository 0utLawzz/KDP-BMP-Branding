import { ArrowUpRight, Check, Circle, Compass, Instagram, Minus, Sparkles } from "lucide-react";

const ink = "#173b3f";
const teal = "#2f7470";
const coral = "#e87863";
const paper = "#f7f4ec";
const sand = "#e5d9c5";

function PathMark({ reversed = false, compact = false }: { reversed?: boolean; compact?: boolean }) {
  const stroke = reversed ? "#f7f4ec" : teal;
  const dot = reversed ? coral : coral;
  return (
    <div className={`relative ${compact ? "h-[92px] w-[92px]" : "h-[126px] w-[126px]"}`} aria-label="Mindful Path symbol">
      <svg viewBox="0 0 126 126" className="h-full w-full" role="img">
        <path d="M24 103 C24 78 35 66 55 61 C75 56 91 47 91 24" fill="none" stroke={stroke} strokeWidth="9" strokeLinecap="round" />
        <path d="M91 24 L91 42" fill="none" stroke={stroke} strokeWidth="9" strokeLinecap="round" />
        <path d="M91 24 L73 24" fill="none" stroke={stroke} strokeWidth="9" strokeLinecap="round" />
        <circle cx="24" cy="103" r="8" fill={dot} />
        <circle cx="55" cy="61" r="5" fill={reversed ? "#f0c76b" : "#f0b85d"} />
      </svg>
    </div>
  );
}

function MiniLabel({ children }: { children: string }) {
  return <span className="font-['DM_Sans'] text-[10px] font-bold uppercase tracking-[0.2em] text-[#62817d]">{children}</span>;
}

export function MindfulPath() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#d8ebe5] p-4 text-[#173b3f] sm:p-7" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[28px] bg-[#f7f4ec] shadow-[0_24px_70px_rgba(30,72,68,0.18)]">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#d5e1d9] px-6 py-5 sm:px-10">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center overflow-hidden rounded-full bg-[#dcece4]"><div className="h-[30px] w-[30px] scale-[0.34]"><PathMark compact /></div></div>
            <div className="font-['DM_Sans'] text-[12px] font-bold uppercase tracking-[0.16em]">Bright Mindful Pages</div>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-semibold text-[#66817d]">
            <span>Identity study / 01</span><span className="h-1 w-1 rounded-full bg-[#e87863]" /><span>Mindful Path</span>
          </div>
        </header>

        <section className="grid gap-8 px-6 pb-12 pt-10 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-16 lg:pt-14">
          <div>
            <div className="mb-6 flex items-center gap-3"><MiniLabel>Design hypothesis</MiniLabel><div className="h-px w-14 bg-[#e87863]" /></div>
            <h1 className="max-w-[590px] font-['Playfair_Display'] text-[clamp(3.4rem,8vw,7.4rem)] leading-[0.88] tracking-[-0.06em] text-[#173b3f]">
              One small<br /><em className="text-[#2f7470]">step</em> at a time.
            </h1>
            <p className="mt-7 max-w-[450px] text-[15px] leading-7 text-[#53716e]">A clear, ownable path for a brand that makes daily care feel possible. The mark moves forward without asking for perfection.</p>
            <div className="mt-8 flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#f0b85d] text-[#173b3f]"><Check size={15} strokeWidth={3} /></span><span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#53716e]">Progress, not pressure</span></div>
          </div>
          <div className="relative flex min-h-[340px] items-center justify-center rounded-[24px] bg-[#dcece4] p-8">
            <div className="absolute left-7 top-7 font-mono text-[10px] tracking-[0.2em] text-[#72918b]">PRIMARY LOCKUP / 01</div>
            <div className="flex flex-col items-center gap-4 text-center">
              <PathMark />
              <div className="font-['Playfair_Display'] text-[clamp(2rem,4vw,3.45rem)] leading-none">Bright Mindful<br /><span className="text-[#2f7470]">Pages</span></div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#67827d]"><span className="h-px w-6 bg-[#e87863]" /> daily pages for a steadier life <span className="h-px w-6 bg-[#e87863]" /></div>
            </div>
            <div className="absolute bottom-6 right-7 rounded-full bg-[#f7f4ec] px-3 py-1.5 font-mono text-[9px] font-bold tracking-[0.16em] text-[#62817d]">B M P</div>
          </div>
        </section>

        <section className="grid gap-5 border-t border-[#d5e1d9] px-6 py-9 sm:px-10 md:grid-cols-[1fr_1fr_1.2fr]">
          <div className="rounded-[20px] border border-[#cfdfd6] bg-[#f2eee3] p-6">
            <div className="mb-10 flex items-center justify-between"><MiniLabel>Compact mark</MiniLabel><Compass size={17} className="text-[#e87863]" /></div>
            <div className="flex items-end gap-5"><div className="grid h-28 w-28 place-items-center rounded-[22px] bg-[#dcece4]"><PathMark compact /></div><div><div className="font-['Playfair_Display'] text-4xl leading-[0.9]">B<br />M<br />P</div><div className="mt-3 font-mono text-[9px] uppercase tracking-[0.15em] text-[#72918b]">avatar / spine</div></div></div>
          </div>
          <div className="rounded-[20px] bg-[#173b3f] p-6 text-[#f7f4ec]">
            <div className="mb-10 flex items-center justify-between"><MiniLabel>Reversed test</MiniLabel><Minus size={17} className="text-[#f0b85d]" /></div>
            <div className="flex items-center gap-5"><div className="grid h-28 w-28 place-items-center rounded-[22px] bg-[#2f7470]"><PathMark compact reversed /></div><div className="font-['Playfair_Display'] text-[25px] leading-[0.96]">Bright<br />Mindful<br /><span className="text-[#f0b85d]">Pages</span></div></div>
            <p className="mt-7 text-[11px] leading-5 text-[#b9d0c6]">One-color ready. The path and waypoint retain their silhouette at small scale.</p>
          </div>
          <div className="rounded-[20px] border border-[#cfdfd6] p-6">
            <div className="mb-7 flex items-center justify-between"><MiniLabel>Color + material</MiniLabel><Sparkles size={17} className="text-[#e87863]" /></div>
            <div className="grid grid-cols-4 gap-2">
              {[["#173b3f", "deep tide"], ["#2f7470", "path teal"], ["#e87863", "waypoint"], ["#f0b85d", "morning"]].map(([color, label]) => <div key={color}><div className="h-12 rounded-xl" style={{ background: color }} /><div className="mt-2 text-[9px] font-bold uppercase tracking-[0.08em] text-[#72918b]">{label}</div></div>)}
            </div>
            <div className="mt-7 flex items-start gap-3 border-t border-[#d5e1d9] pt-5"><Circle size={13} className="mt-0.5 fill-[#e87863] text-[#e87863]" /><p className="text-[11px] leading-5 text-[#53716e]">Warm paper, quiet contrast, and a single bright waypoint keep the system human.</p></div>
          </div>
        </section>

        <section className="grid gap-8 bg-[#e9dfcd] px-6 py-10 sm:px-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div><MiniLabel>In the wild</MiniLabel><h2 className="mt-4 font-['Playfair_Display'] text-4xl leading-[0.95] tracking-[-0.04em] sm:text-5xl">Ready for a<br /><span className="text-[#2f7470]">quiet shelf.</span></h2><p className="mt-5 max-w-[320px] text-[13px] leading-6 text-[#53716e]">The same path holds up as a tactile KDP cover, a tiny profile mark, or a repeatable stamp inside the page.</p></div>
          <div className="flex flex-wrap items-end justify-center gap-7 sm:justify-end">
            <div className="relative h-[255px] w-[178px] rotate-[-3deg] rounded-[4px] bg-[#f7f4ec] p-5 shadow-[10px_15px_20px_rgba(66,70,51,0.18)]"><div className="absolute left-0 top-0 h-full w-2 bg-[#2f7470]" /><PathMark compact /><div className="mt-3 font-['Playfair_Display'] text-2xl leading-[0.92]">Bright<br /><span className="text-[#2f7470]">Mindful</span><br />Pages</div><div className="absolute bottom-5 text-[8px] font-bold uppercase tracking-[0.18em] text-[#72918b]">a daily practice</div></div>
            <div className="flex flex-col items-center gap-3"><div className="grid h-[132px] w-[132px] place-items-center rounded-[30px] bg-[#173b3f] shadow-[8px_12px_18px_rgba(66,70,51,0.16)]"><PathMark compact reversed /></div><div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#53716e]"><Instagram size={13} /> social avatar</div></div>
          </div>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-4 px-6 py-6 sm:px-10">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#72918b]">Bright Mindful Pages — identity discovery</div>
          <div className="flex items-center gap-2 text-[11px] font-bold text-[#2f7470]">abstract path / gentle progress <ArrowUpRight size={14} /></div>
        </footer>
      </div>
    </main>
  );
}