import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Briefcase } from "lucide-react";
import logo from "@/assets/logo-mark.png";

const verticals = [
  {
    icon: Briefcase,
    name: "Zaphyrkeep",
    tag: "Bookkeeping & Finance Ops",
    desc: "Embedded bookkeeping, payroll, and financial reporting teams that operate as your internal finance back-office.",
  },
  {
    icon: Bot,
    name: "ZaphyrAI",
    tag: "AI-Powered Execution",
    desc: "AI-augmented workflows for outbound, content, and research — combining human SDRs with intelligent automation.",
  },
];

export function Verticals() {
  return (
    <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark" />
        <div className="absolute top-0 left-1/4 size-96 rounded-full bg-primary-glow/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 size-80 rounded-full bg-accent-blue/15 blur-3xl" />

        {/* Side logo watermark — right */}
        <div className="absolute inset-y-0 right-0 hidden md:flex items-center pointer-events-none pr-4 lg:pr-10">
          <img
            src={logo}
            alt=""
            aria-hidden="true"
            className="w-[28%] max-w-[360px] opacity-[0.18] select-none"
          />
        </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary-glow/90 bg-white/10 px-3 py-1 rounded-full mb-4 backdrop-blur">
            Our Verticals
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance text-white">
            Specialized squads. <span className="bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">One operating partner.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {verticals.map((v, i) => (
            <motion.a
              key={v.name}
              href="#"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-hover-dark group relative rounded-3xl p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="size-14 rounded-2xl bg-gradient-to-br from-primary-glow to-accent-blue grid place-items-center text-white shadow-glow">
                  <v.icon className="size-6" />
                </div>
                <ArrowUpRight className="size-5 text-white/60 group-hover:text-white group-hover:rotate-12 transition-all" />
              </div>
              <div className="text-xs font-semibold text-primary-glow uppercase tracking-wider mb-2">{v.tag}</div>
              <h3 className="text-2xl font-bold text-white tracking-tight">{v.name}</h3>
              <p className="mt-3 text-white/70 leading-relaxed">{v.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
