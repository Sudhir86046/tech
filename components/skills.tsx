import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="expertise" className="scroll-mt-24 py-24 border-t border-[#252A31]">
      <div className="mb-16">
        <p className="font-mono text-xs text-[#00D9FF] mb-2 tracking-widest uppercase">Toolkit</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#F5F7FA]">Engineering Toolkit.</h2>
      </div>
      <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2 md:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="font-mono text-xs tracking-widest text-[#737B88] uppercase mb-4 border-b border-[#252A31] pb-2">{group.category}</h3>
            <ul className="space-y-2">
              {group.items.map(item => (
                <li key={item} className="text-sm text-[#A0A6B2] flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[#00D9FF]"></span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}