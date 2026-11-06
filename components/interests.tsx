import { interests, currentFocus } from "@/data/portfolio";

export default function Interests() {
  return (
    <section className="py-24 border-t border-zinc-800/50">
      <div className="mb-12 flex items-center gap-4">
        <span className="font-mono text-sm text-cyan-400">08</span>
        <h2 className="text-2xl font-semibold tracking-tight text-white">What I Enjoy Building</h2>
        <div className="h-px flex-1 bg-zinc-800" />
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          {interests.map((item, i) => (
            <div key={i}>
              <h3 className="text-white text-sm font-semibold mb-1">{item.title}</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-[#0c0c0e] border border-zinc-800 rounded-xl p-6 h-fit">
          <h3 className="font-mono text-xs text-cyan-400 uppercase mb-4 tracking-wider">Current Focus</h3>
          <ul className="space-y-3">
            {currentFocus.map((focus, i) => (
              <li key={i} className="flex gap-3 text-sm text-zinc-300">
                <span className="text-cyan-400 font-mono text-xs mt-0.5">0{i+1}</span>
                <span>{focus}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}