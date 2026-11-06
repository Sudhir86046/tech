import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section className="py-24 border-t border-zinc-800/50">
      <div className="mb-12 flex items-center gap-4">
        <span className="font-mono text-sm text-cyan-400">05</span>
        <h2 className="text-2xl font-semibold tracking-tight text-white">Education</h2>
        <div className="h-px flex-1 bg-zinc-800" />
      </div>
      <div className="space-y-8">
        {education.map((e, i) => (
          <div key={i} className="flex flex-col md:flex-row md:justify-between border-b border-zinc-800/50 pb-6">
            <div>
              <h3 className="text-lg font-semibold text-white">{e.degree}</h3>
              <p className="text-cyan-400 text-sm">{e.field || e.institution}</p>
              {e.field && <p className="text-zinc-500 text-xs">{e.institution}</p>}
              <p className="text-zinc-500 text-xs">{e.location}</p>
            </div>
            <div className="text-left md:text-right mt-2 md:mt-0">
              <p className="font-mono text-sm text-zinc-300">{e.period}</p>
              <p className="text-xs text-zinc-400">{e.score}</p>
              {e.note && <p className="text-[10px] text-amber-500/80 mt-1 max-w-[200px] md:ml-auto">{e.note}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}