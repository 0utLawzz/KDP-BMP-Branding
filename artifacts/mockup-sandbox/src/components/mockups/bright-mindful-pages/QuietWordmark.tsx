import React from "react";

const ink = "#29352f";
const sage = "#738b78";
const clay = "#c98568";
const paper = "#f8f5ee";
const mist = "#e7eee8";

function QuietMark({ size = 68, mono = false }: { size?: number; mono?: boolean }) {
  const primary = mono ? ink : sage;
  const accent = mono ? ink : clay;
  return (
    <svg width={size} height={size} viewBox="0 0 68 68" fill="none" aria-label="Open page mark">
      <path d="M12 15.5C20.7 13.4 27.5 15.7 34 21.4V54.2C27.5 48.8 20.7 46.7 12 49V15.5Z" fill={primary} fillOpacity=".13" stroke={primary} strokeWidth="2.2" />
      <path d="M56 15.5C47.3 13.4 40.5 15.7 34 21.4V54.2C40.5 48.8 47.3 46.7 56 49V15.5Z" fill={primary} fillOpacity=".13" stroke={primary} strokeWidth="2.2" />
      <path d="M34 20.4V54.5" stroke={primary} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M34 10.3V17.5" stroke={accent} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M30.4 13.9H37.6" stroke={accent} strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: sage }}>
      <span className="h-px w-6" style={{ background: sage }} />
      {children}
    </div>
  );
}

function CoverSample() {
  return (
    <div className="relative mx-auto aspect-[3/4] w-[148px] overflow-hidden rounded-[2px] shadow-[10px_14px_25px_rgba(41,53,47,.18)]" style={{ background: "#dbe6dc" }}>
      <div className="absolute inset-[7px] border border-[#92a995]" />
      <div className="relative flex h-full flex-col items-center px-4 pt-7 text-center">
        <div className="text-[7px] font-semibold uppercase tracking-[0.24em]" style={{ color: ink }}>A daily companion</div>
        <div className="my-7"><QuietMark size={44} /></div>
        <div className="font-['Playfair_Display'] text-[22px] leading-[.96]" style={{ color: ink }}>
          Bright<br /><i>Mindful</i><br />Pages
        </div>
        <div className="mt-auto mb-6 text-[7px] uppercase tracking-[0.18em]" style={{ color: "#5b7161" }}>notes for a steadier day</div>
      </div>
    </div>
  );
}

export function QuietWordmark() {
  return (
    <main className="min-h-[100dvh] overflow-hidden px-4 py-5 sm:px-8 sm:py-8" style={{ background: paper, color: ink }}>
      <div className="mx-auto max-w-[1120px]">
        <header className="flex items-start justify-between border-b pb-6" style={{ borderColor: "#d7dfd6" }}>
          <div>
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em]" style={{ color: clay }}>Identity study / 01</div>
            <h1 className="font-['Playfair_Display'] text-2xl tracking-[-.03em] sm:text-3xl">Bright Mindful Pages</h1>
          </div>
          <div className="hidden text-right text-[10px] leading-4 sm:block" style={{ color: "#68776d" }}>
            Quiet Wordmark<br />first-round direction
          </div>
        </header>

        <section className="grid gap-10 py-12 md:grid-cols-[1fr_1.55fr] md:items-center md:py-16">
          <div>
            <Label>Hypothesis</Label>
            <h2 className="max-w-[340px] font-['Playfair_Display'] text-4xl leading-[1.04] tracking-[-.04em] sm:text-5xl">
              Let the name<br /><i>hold the room.</i>
            </h2>
            <p className="mt-6 max-w-[330px] text-sm leading-6" style={{ color: "#596a60" }}>
              A calm editorial identity for the everyday pages that make space for a steadier day. Familiar, grown-up, and quietly optimistic.
            </p>
            <div className="mt-7 flex flex-wrap gap-2 text-[10px] uppercase tracking-[.13em]" style={{ color: "#60736a" }}>
              <span className="rounded-full border px-3 py-2" style={{ borderColor: "#bacabd" }}>Editorial</span>
              <span className="rounded-full border px-3 py-2" style={{ borderColor: "#bacabd" }}>Open page</span>
              <span className="rounded-full border px-3 py-2" style={{ borderColor: "#bacabd" }}>One-color ready</span>
            </div>
          </div>
          <div className="relative flex min-h-[255px] items-center justify-center overflow-hidden rounded-sm px-5 py-12" style={{ background: mist }}>
            <div className="absolute -right-14 -top-20 h-52 w-52 rounded-full border-[1px]" style={{ borderColor: "#b9cdbd" }} />
            <div className="absolute -bottom-32 -left-10 h-60 w-60 rounded-full border-[1px]" style={{ borderColor: "#c5d6c7" }} />
            <div className="relative flex items-center gap-5 sm:gap-8">
              <QuietMark size={78} />
              <div>
                <div className="font-['Playfair_Display'] text-[clamp(2.2rem,6vw,4.6rem)] leading-[.84] tracking-[-.055em]">Bright<br /><i>Mindful</i><br />Pages</div>
                <div className="mt-5 text-[9px] uppercase tracking-[.24em]" style={{ color: sage }}>notes for a steadier day</div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 border-t py-10 md:grid-cols-[.75fr_1fr_1fr] md:py-12" style={{ borderColor: "#d7dfd6" }}>
          <div>
            <Label>System</Label>
            <p className="max-w-[210px] text-xs leading-5" style={{ color: "#68776d" }}>A small open-page gesture gives the wordmark a recognizable pause without competing with the name.</p>
          </div>
          <div className="rounded-sm p-7" style={{ background: "#eef2eb" }}>
            <div className="mb-8 text-[10px] uppercase tracking-[.18em]" style={{ color: "#68776d" }}>Primary lockup</div>
            <div className="flex items-center gap-4">
              <QuietMark size={47} />
              <div className="font-['Playfair_Display'] text-[27px] leading-[.87] tracking-[-.04em]">Bright <i>Mindful</i><br />Pages</div>
            </div>
          </div>
          <div className="rounded-sm p-7" style={{ background: "#f1e6dd" }}>
            <div className="mb-8 text-[10px] uppercase tracking-[.18em]" style={{ color: "#8e6657" }}>Compact stamp</div>
            <div className="flex items-center gap-5">
              <div className="flex h-[74px] w-[74px] items-center justify-center rounded-full border" style={{ borderColor: clay }}>
                <QuietMark size={48} />
              </div>
              <div className="text-[10px] font-semibold uppercase leading-4 tracking-[.13em]" style={{ color: ink }}>BMP<br />quietly<br />present</div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 border-t py-10 md:grid-cols-[1fr_1.1fr] md:items-center md:py-12" style={{ borderColor: "#d7dfd6" }}>
          <div>
            <Label>Applications</Label>
            <h3 className="font-['Playfair_Display'] text-3xl tracking-[-.035em]">A mark that travels<br /><i>with the pages.</i></h3>
            <p className="mt-4 max-w-[330px] text-xs leading-5" style={{ color: "#68776d" }}>The open-page silhouette remains distinct at small sizes, while the wordmark keeps the brand legible on a quiet shelf or a busy feed.</p>
          </div>
          <div className="flex flex-wrap items-end justify-center gap-10 rounded-sm p-8 sm:gap-16" style={{ background: "#e9eee8" }}>
            <div className="text-center">
              <CoverSample />
              <div className="mt-4 text-[9px] font-semibold uppercase tracking-[.18em]" style={{ color: "#68776d" }}>KDP cover</div>
            </div>
            <div className="text-center">
              <div className="flex h-[148px] w-[148px] items-center justify-center rounded-[28px] p-5" style={{ background: ink }}>
                <div className="flex h-full w-full flex-col items-center justify-center rounded-[21px] border" style={{ borderColor: "#768b7a" }}>
                  <QuietMark size={52} mono />
                  <div className="mt-2 text-[8px] font-semibold uppercase tracking-[.16em]" style={{ color: "#f8f5ee" }}>Bright Mindful</div>
                </div>
              </div>
              <div className="mt-4 text-[9px] font-semibold uppercase tracking-[.18em]" style={{ color: "#68776d" }}>Social avatar</div>
            </div>
          </div>
        </section>

        <section className="border-t pb-8 pt-10" style={{ borderColor: "#d7dfd6" }}>
          <div className="grid gap-7 md:grid-cols-[1.15fr_.85fr] md:items-end">
            <div className="rounded-sm p-7" style={{ background: ink }}>
              <div className="mb-7 text-[10px] uppercase tracking-[.18em]" style={{ color: "#b9cdbd" }}>Monochrome test / 100%</div>
              <div className="flex items-center gap-6 text-[#f8f5ee]">
                <QuietMark size={62} mono />
                <div className="font-['Playfair_Display'] text-3xl leading-[.86] tracking-[-.04em]">Bright <i>Mindful</i><br />Pages</div>
              </div>
            </div>
            <div className="text-xs leading-5" style={{ color: "#68776d" }}>
              <div className="mb-3 font-semibold uppercase tracking-[.16em]" style={{ color: clay }}>Recommendation</div>
              Keep the wordmark-led lockup as the primary signature. The tiny light cue is a useful moment of recognition, not a separate story.
            </div>
          </div>
          <footer className="mt-12 flex justify-between text-[9px] uppercase tracking-[.2em]" style={{ color: "#8a978d" }}>
            <span>Bright Mindful Pages</span><span>Quiet tools for real life</span><span>2024 / exploration</span>
          </footer>
        </section>
      </div>
    </main>
  );
}
