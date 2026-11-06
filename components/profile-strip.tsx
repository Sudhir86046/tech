export default function ProfileStrip() {
  const items = ["FULL-STACK ENGINEERING", "PRODUCT DEVELOPMENT", "BACKEND SYSTEMS", "AI INTEGRATION", "CLOUD INFRASTRUCTURE"];
  return (
    <div className="border-y border-[#252A31] bg-[#101216] overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between flex-wrap gap-4">
        {items.map((item, i) => (
          <div key={item} className="flex items-center gap-4">
            <span className="font-mono text-[10px] tracking-widest text-[#737B88]">{item}</span>
            {i !== items.length - 1 && <span className="text-[#252A31] hidden md:inline">|</span>}
          </div>
        ))}
      </div>
    </div>
  );
}