export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 border-t border-zinc-800/50">
      <div className="mb-12 flex items-center gap-4">
        <span className="font-mono text-sm text-cyan-400">01</span>
        <h2 className="text-2xl font-semibold tracking-tight text-white">About Me</h2>
        <div className="h-px flex-1 bg-zinc-800" />
      </div>

      <div className="grid gap-12 md:grid-cols-3">
        <div className="space-y-4 text-zinc-400 md:col-span-2 text-sm leading-relaxed">
          <p className="text-lg text-zinc-200 font-medium">More Than Code. A Mindset Built Around Building.</p>
          <p>I'm a Computer Science and Engineering graduate with a strong interest in full-stack development, software engineering and emerging technologies.</p>
          <p>I have worked on real-world product development as an Associate Full Stack Developer at Anturon, contributing to its website and Voice AI SaaS product ecosystem. Beyond professional experience, I enjoy building independent projects like <strong className="text-zinc-200">OpsPulse</strong> and <strong className="text-zinc-200">VYOM-X</strong>.</p>
          <p>My approach is simple: Understand the problem. Design the solution. Build the product. Test the experience. Improve continuously.</p>
        </div>
        
        <div className="space-y-6">
          <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-500">Principles</h3>
          {[
            ["Problem Solving", "Understand before selecting a technical solution."],
            ["Continuous Learning", "Learn through implementation."],
            ["Product Thinking", "Useful, understandable, accessible."],
            ["Engineering Mindset", "Clean code and maintainability."],
          ].map(([title, desc]) => (
            <div key={title}>
              <p className="text-zinc-200 text-sm font-medium">{title}</p>
              <p className="text-xs text-zinc-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}