import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section className="py-24 border-t border-zinc-800/50">
      <div className="mb-12 flex items-center gap-4">
        <span className="font-mono text-sm text-cyan-400">06</span>
        <h2 className="text-2xl font-semibold tracking-tight text-white">Certifications</h2>
        <div className="h-px flex-1 bg-zinc-800" />
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {certifications.map((c, i) => (
          <div key={i} className="rounded-xl border border-zinc-800 bg-[#0c0c0e] p-6">
            <h3 className="text-lg font-semibold text-white mb-1">{c.title}</h3>
            <p className="text-cyan-400 text-sm mb-4">{c.issuer}</p>
            <div className="flex justify-between items-center text-xs font-mono text-zinc-500 border-t border-zinc-800/50 pt-4">
              <span>Issued: {c.date}</span>
              <span className="bg-zinc-900 px-2 py-1 rounded">ID: {c.credential}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}