export default function Footer() {
  return (
    <footer className="border-t border-[#252A31] bg-[#08090B]">
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="font-mono text-sm font-bold text-[#F5F7FA] mb-2">&gt; sudhir kumar tiwari</p>
          <p className="text-xs text-[#737B88]">© 2026 Sudhir Kumar Tiwari. All Rights Reserved.</p>
        </div>
        <div className="text-xs text-[#737B88] text-center md:text-right">
          <p>Designed & engineered with code,</p>
          <p>curiosity & continuous learning.</p>
        </div>
      </div>
    </footer>
  );
}