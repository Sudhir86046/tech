import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24 border-t border-zinc-800/50">
      <div className="mb-12 flex items-center gap-4">
        <span className="font-mono text-sm text-cyan-400">04</span>
        <h2 className="text-2xl font-semibold tracking-tight text-white">Experience</h2>
        <div className="h-px flex-1 bg-zinc-800" />
      </div>
      <div className="space-y-8">
        {experience.map((e) => (
          <div key={e.company} className="relative border-l-2 border-cyan-400/20 pl-6 pb-2">
            <div className="absolute w-3 h-3 bg-cyan-400 rounded-full -left-[7px] top-1.5" />
            <div className="mb-2 flex flex-col md:flex-row md:justify-between md:items-center">
              <h3 className="text-lg font-semibold text-white">{e.role}</h3>
              <span className="text-xs font-mono text-zinc-500">{e.period}</span>
            </div>
            <p className="text-sm text-cyan-400 mb-4">{e.company} <span className="text-zinc-500">| {e.location}</span></p>
            <ul className="space-y-2">
              {e.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-sm text-zinc-400">
                  <span className="text-cyan-400">▹</span><span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}