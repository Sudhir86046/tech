"use client";

import { site } from "@/data/portfolio";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const codeString = `const developer = {
  name: "Sudhir Kumar Tiwari",
  role: "Full-Stack Software Engineer",
  primaryStack: ["React.js", "Node.js", "TypeScript"],
  focus: ["Product Development", "REST APIs", "Cloud Deployment"],
  projects: ["OpsPulse", "VYOM-X"],
  interests: ["AI Integration", "Scalable Systems", "Emerging Technologies"],
  status: "Open to Startup Opportunities"
};`;

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-20">
      <div className="w-full grid gap-12 md:grid-cols-2 items-center">
        
        {/* Left Text Section */}
        <div>
          <p className="font-mono text-sm text-cyan-400 mb-4">HELLO, I'M SUDHIR KUMAR TIWARI</p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight text-white">
            Building Digital Products.<br />
            <span className="text-zinc-500">Engineering Real-World Solutions.</span>
          </h1>
          <p className="mb-8 text-zinc-400 leading-relaxed text-sm md:text-base">
            I'm Sudhir Kumar Tiwari, a Full-Stack Developer focused on building modern web applications, backend systems, interactive dashboards and AI-powered digital products. With hands-on industry experience and independent project development, I enjoy transforming technical ideas into practical software solutions.
          </p>
          <div className="mb-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-full bg-cyan-400 px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-300">
              Explore My Work
            </a>
            <a href={site.resume} target="_blank" className="rounded-full border border-zinc-700 px-6 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white">
              View Resume
            </a>
          </div>
          <p className="text-xs text-zinc-500 font-mono">
            Based in India <br />
            Open to: Junior Full-Stack, React, Node.js Roles
          </p>
        </div>
        
        {/* Right VS Code Box */}
        <div className="hidden md:block rounded-xl border border-zinc-800 shadow-2xl relative overflow-hidden bg-[#1e1e1e]">
          {/* VS Code Header Bar */}
          <div className="flex items-center gap-2 bg-[#2d2d2d] px-4 py-3 border-b border-[#3c3c3c]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="text-[#9da5b4] font-mono text-xs ml-2">developer.ts</div>
          </div>
          
          {/* Code Area */}
          <div className="p-4 text-sm font-mono overflow-x-auto">
            <SyntaxHighlighter
              language="javascript"
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: 0,
                background: 'transparent',
                fontSize: '13px',
                lineHeight: '1.6'
              }}
              wrapLongLines={false}
            >
              {codeString}
            </SyntaxHighlighter>
          </div>
        </div>

      </div>
    </section>
  );
}