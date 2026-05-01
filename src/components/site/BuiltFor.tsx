import { motion } from "framer-motion";
import { Rocket, Layers, Settings2, Handshake } from "lucide-react";
import builtforIllustration from "@/assets/builtfor-illustration.jpg";

const items = [
  {
    icon: Rocket,
    title: "Companies With Momentum",
    desc: "Organizations that are already growing and need execution systems that can scale without constant breakdowns.",
  },
  {
    icon: Layers,
    title: "Teams Tired of Fragmentation",
    desc: "Sales, marketing, operations, and tools feel disconnected, creating friction, delays, and unclear ownership.",
  },
  {
    icon: Settings2,
    title: "Leaders Who Value Systems",
    desc: "Founders and executives who prioritize repeatable processes, clarity, and structure over isolated tactics.",
  },
  {
    icon: Handshake,
    title: "Teams Seeking a True Partner",
    desc: "Organizations that want hands-on execution, shared accountability, and work embedded inside the business.",
  },
];

export function BuiltFor() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center mb-14 max-w-5xl mx-auto">
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary-glow bg-primary/10 px-3 py-1 rounded-full mb-4">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
              Who <span className="gradient-text">GrowizPro ESP</span> Is Built For
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              GrowizPro brings deep experience running sales and go-to-market execution inside real
              operating environments. Our ESP model is designed for organizations where execution
              must be governed as a system, not managed as a collection of tasks.
            </p>
          </div>
          <motion.img
            src={builtforIllustration}
            alt="Partnership illustration"
            width={1024}
            height={1024}
            loading="lazy"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[260px] lg:max-w-[300px] h-auto mx-auto"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group glass rounded-2xl p-6 shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1 border border-border/60"
            >
              <div className="size-12 rounded-xl gradient-cta grid place-items-center text-white shadow-elegant mb-4 group-hover:scale-110 transition-transform">
                <it.icon className="size-5" />
              </div>
              <h3 className="font-semibold tracking-tight">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
