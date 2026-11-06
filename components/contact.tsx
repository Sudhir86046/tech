// contact.tsx
import { site } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-32 border-t border-[#252A31]">
      <div className="max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-[#F5F7FA] mb-6">
          Have an Interesting Idea?<br />
          <span className="text-[#737B88]">Let's Engineer It.</span>
        </h2>
        <p className="text-[#A0A6B2] text-sm mb-12 max-w-xl">
          I'm interested in software engineering opportunities, product development, AI applications and meaningful technology collaborations.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <p className="font-mono text-xs text-[#737B88] mb-1">EMAIL</p>
              <a href={`mailto:${site.email}`} className="text-lg text-[#F5F7FA] hover:text-[#00D9FF] transition-colors">{site.email}</a>
            </div>
            <div>
              <p className="font-mono text-xs text-[#737B88] mb-1">SOCIAL</p>
              <div className="flex gap-4">
                <a href={site.github} target="_blank" className="text-[#F5F7FA] hover:text-[#00D9FF] transition-colors">GitHub ↗</a>
                <a href={site.linkedin} target="_blank" className="text-[#F5F7FA] hover:text-[#00D9FF] transition-colors">LinkedIn ↗</a>
              </div>
            </div>
            <div>
              <p className="font-mono text-xs text-[#737B88] mb-1">LOCATION</p>
              <p className="text-lg text-[#F5F7FA]">India</p>
            </div>
          </div>

          <form className="space-y-4" action={`mailto:${site.email}`} method="post" encType="text/plain">
            <input type="text" placeholder="Full Name" required className="w-full bg-[#101216] border border-[#252A31] rounded-md px-4 py-3 text-sm text-[#F5F7FA] focus:outline-none focus:border-[#00D9FF]" />
            <input type="email" placeholder="Email Address" required className="w-full bg-[#101216] border border-[#252A31] rounded-md px-4 py-3 text-sm text-[#F5F7FA] focus:outline-none focus:border-[#00D9FF]" />
            <input type="text" placeholder="Subject" required className="w-full bg-[#101216] border border-[#252A31] rounded-md px-4 py-3 text-sm text-[#F5F7FA] focus:outline-none focus:border-[#00D9FF]" />
            <textarea placeholder="Message" rows={4} required className="w-full bg-[#101216] border border-[#252A31] rounded-md px-4 py-3 text-sm text-[#F5F7FA] focus:outline-none focus:border-[#00D9FF]"></textarea>
            <button type="submit" className="w-full bg-[#F5F7FA] text-[#08090B] font-medium rounded-md px-4 py-3 text-sm hover:bg-[#00D9FF] transition-colors">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
