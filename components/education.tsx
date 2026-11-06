import { education, certifications } from "@/data/portfolio";

export default function Education() {
  return (
    <section className="py-24 border-t border-zinc-800/50">
      <div className="mb-12 flex items-center gap-4">
        <span className="font-mono text-sm text-cyan-400">05</span>
        <h2 className="text-3xl font-semibold tracking-tight text-white">Education & Certifications</h2>
        <div className="h-px flex-1 bg-zinc-800" />
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Education Section */}
        <div className="space-y-8">
          <h3 className="text-xl font-semibold text-white">Education</h3>
          {education.map((e, i) => (
            <div key={i} className="border-l border-zinc-800 pl-6 relative">
              <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-cyan-400"></div>
              <h4 className="text-white font-medium">{e.degree}</h4>
              <p className="text-zinc-400 text-sm mt-1">{e.institution}</p>
              <div className="flex gap-4 mt-2 font-mono text-xs text-zinc-500">
                <span>{e.period}</span>
                <span>{e.score}</span>
              </div>
              {e.note && <p className="text-amber-500/80 text-[11px] mt-2">{e.note}</p>}
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="space-y-8">
          <h3 className="text-xl font-semibold text-white">Certifications</h3>
          {certifications.map((c, i) => (
            <div key={i} className="bg-[#0c0c0e] border border-zinc-800 p-5 rounded-lg">
              <h4 className="text-white font-medium">{c.title}</h4>
              <p className="text-cyan-400 text-sm mt-1">{c.issuer}</p>
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-zinc-800/50 text-xs font-mono text-zinc-500">
                <span>{c.date}</span>
                <span>ID: {c.credential}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}