import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] overflow-hidden bg-lavender p-12 md:p-20 border border-border"
        >
          <div className="absolute -top-20 -left-20 size-80 rounded-full bg-coral/40 blur-3xl animate-blob" />
          <div className="absolute -bottom-24 -right-16 size-96 rounded-full bg-mint/50 blur-3xl animate-blob animation-delay-2000" />

          <div className="relative max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-foreground bg-white px-3 py-1 rounded-full mb-5 border border-border">
              Let's Talk
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground text-balance leading-[1.05]">
              Evaluate execution as a system.{" "}
              <span className="accent-underline">Partner with GrowizPro.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/70 max-w-xl mx-auto">
              From inbound demand to outbound activation and revenue conversion — book a strategy
              call and see how we plug into your GTM.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href="#"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 btn-ink font-semibold"
              >
                Book a Strategy Call
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+15717151688"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 btn-ghost-ink font-semibold"
              >
                <Phone className="size-4" />
                +1 (571) 715-1688
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
