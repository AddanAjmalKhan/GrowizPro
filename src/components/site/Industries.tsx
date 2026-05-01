import { motion } from "framer-motion";
import { Server, Sparkles, Cloud, Shield, Users, Banknote, Package, Calculator, ArrowUpRight } from "lucide-react";

const industries = [
  { icon: Server, name: "IT MSP", desc: "Managed service providers scaling recurring revenue." },
  { icon: Sparkles, name: "Cleaning & Maintenance", desc: "Commercial facility services growing route density." },
  { icon: Cloud, name: "B2B SaaS Platforms", desc: "Pipeline and demos for product-led growth teams." },
  { icon: Shield, name: "Cybersecurity", desc: "Trust-led outbound for security & compliance." },
  { icon: Users, name: "Recruitment & Staffing", desc: "Net-new client acquisition for staffing firms." },
  { icon: Banknote, name: "Financial Services", desc: "Advisory, lending, and fintech demand programs." },
  { icon: Package, name: "Design & Packaging", desc: "Enterprise buyer outreach for packaging studios." },
  { icon: Calculator, name: "Bookkeeping", desc: "Recurring client acquisition for accounting firms." },
];

export function Industries() {
  return (
    <section id="industries" className="py-28 relative overflow-hidden">
      {/* Soft brand glow backdrop */}
      <div className="absolute -top-20 left-1/4 size-[420px] rounded-full bg-primary-glow/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 size-[420px] rounded-full bg-cyan/15 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
            Industries We Serve
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
            We excel in <span className="gradient-text">B2B sales lead generation</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Supporting inbound and outbound efforts across key industries in the USA.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {industries.map((it, i) => (
            <motion.a
              key={it.name}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl p-6 bg-white border border-border hover:border-primary-glow/60 transition-all hover:-translate-y-1 shadow-soft hover:shadow-elegant"
            >
              {/* Hover gradient sheen */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-primary-glow/5 via-transparent to-cyan/10 pointer-events-none" />

              <div className="relative flex items-start justify-between mb-4">
                <div className="size-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center text-white shadow-elegant">
                  <it.icon className="size-5" />
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all" />
              </div>

              <h3 className="relative font-semibold text-base text-foreground tracking-tight">{it.name}</h3>
              <p className="relative mt-1.5 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary-glow to-cyan scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
