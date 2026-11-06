import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24 border-t border-zinc-800/50">
      <div className="mb-12 flex items-center gap-4">
        <span className="font-mono text-sm text-cyan-400">02</span>
        <h2 className="text-3xl font-semibold tracking-tight text-white">Selected Work</h2>
        <div className="h-px flex-1 bg-zinc-800" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <article key={p.id} className={`group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-zinc-700 transition ${i === 0 ? 'md:col-span-2' : ''}`}>
            
            <div className="mb-4 flex flex-col md:flex-row md:justify-between md:items-start gap-2">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-1">{p.title}</h3>
                <p className="text-cyan-400 text-xs font-mono">{p.category}</p>
              </div>
            </div>
            
            <p className="mb-6 text-sm text-zinc-400 leading-relaxed max-w-2xl">{p.description}</p>
            
            <div className="mb-6 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-md">
                  {s}
                </span>
              ))}
            </div>

            <div className="flex gap-4 font-mono text-sm border-t border-zinc-800/50 pt-4">
              {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition">Live Demo ↗</a>}
              {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition">Source Code ↗</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}