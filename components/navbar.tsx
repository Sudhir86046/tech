"use client";
import { useState, useEffect } from "react";
import { site } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#expertise", label: "Expertise" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all border-b border-transparent", scrolled ? "border-[#252A31] bg-[#08090B]/80 backdrop-blur-md" : "bg-transparent")}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-mono text-sm font-medium text-[#F5F7FA] tracking-tight">
          <span className="text-[#00D9FF]">&gt;</span> sudhir kumar tiwari
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-[#A0A6B2] hover:text-[#F5F7FA] transition-colors">{l.label}</a>
          ))}
          <a href={site.resume} target="_blank" className="rounded-full bg-[#F5F7FA] px-5 py-1.5 text-sm font-medium text-[#08090B] transition hover:bg-[#00D9FF]">Resume</a>
        </div>
      </nav>
    </header>
  );
}