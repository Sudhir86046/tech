import { cn } from "@/lib/utils";

export default function ProjectCard({ project, featured }: { project: any; featured?: boolean }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-[#0c0c0e] p-6 md:p-8 hover:border-zinc-700 transition">
      <div className="mb-4 flex flex-col md:flex-row md:justify-between md:items-start gap-2">
        <div>
          <h3 className="text-2xl font-semibold text-white mb-1">{project.title}</h3>
          <p className="text-cyan-400 text-xs font-mono">{project.category}</p>
        </div>
        <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
          {project.timeline}
        </span>
      </div>
      
      <p className="mb-6 text-sm text-zinc-400 leading-relaxed max-w-3xl">{project.description}</p>
      
      <div className="mb-6 flex flex-wrap gap-2">
        {project.stack.map((s: string) => (
          <span key={s} className="text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-md">
            {s}
          </span>
        ))}
      </div>

      <div className="flex gap-4 font-mono text-sm border-t border-zinc-800/50 pt-4">
        {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition">Live Demo ↗</a>}
        {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition">Source Code ↗</a>}
      </div>
    </article>
  );
}