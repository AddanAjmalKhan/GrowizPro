import { motion } from "framer-motion";
import { Crosshair, Activity, DollarSign, LineChart, GitMerge, Maximize2 } from "lucide-react";
import whyusIllustration from "@/assets/whyus-illustration.jpg";

const benefits = [
  { icon: Crosshair, title: "Account-Level Precision", desc: "Target real buyers aligned to deal size and intent." },
  { icon: Activity, title: "Predictable Pipeline Flow", desc: "Creates consistent pipeline with clear volume and velocity." },
  { icon: DollarSign, title: "Lower Execution Cost", desc: "Replace multiple hires and tools with one accountable partner." },
  { icon: LineChart, title: "Revenue-Centric Measurement", desc: "Optimize channels by pipeline quality and closed revenue." },
  { icon: GitMerge, title: "Sales & Marketing Alignment", desc: "Reduce handoff friction between demand and conversion." },
  { icon: Maximize2, title: "Scalable Without Rebuilds", desc: "Scale execution without reworking systems every quarter." },
];

export function WhyUs() {
  return (
    <section className="py-28 relative bg-secondary/40">
      <div className="absolute inset-0 gradient-mesh opacity-30 pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-[auto_1fr] gap-10 items-center mb-16 max-w-5xl mx-auto">
          <motion.img
            src={whyusIllustration}
            alt="Connected execution system illustration"
            width={1024}
            height={1024}
            loading="lazy"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[260px] lg:max-w-[300px] h-auto mx-auto"
          />
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary-glow bg-primary/10 px-3 py-1 rounded-full mb-4">
              B2B Lead Generation Benefits
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
              What changes when execution is{" "}
              <span className="gradient-text">owned end-to-end</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Built by operators, not agencies. Decisions backed by performance, not opinion.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group flex gap-4 glass rounded-2xl p-6 shadow-soft hover:shadow-card transition-all border border-border/60"
            >
              <div className="shrink-0 size-12 rounded-xl bg-primary/10 grid place-items-center text-primary-glow group-hover:gradient-cta group-hover:text-white transition-all">
                <r.icon className="size-5" />
              </div>
              <div>
                <h3 className="font-semibold tracking-tight">{r.title}</h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
