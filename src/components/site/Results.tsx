import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import resultsIllustration from "@/assets/results-illustration.jpg";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v: number) => `${Math.round(v).toLocaleString()}${suffix}`);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, count]);

  useEffect(() => {
    return rounded.on("change", (latest: string) => {
      if (ref.current) ref.current.textContent = latest;
    });
  }, [rounded]);

  return <span ref={ref}>0{suffix}</span>;
}

const metrics = [
  { value: 47, suffix: "%", label: "Average reply rate increase", desc: "vs. industry benchmarks" },
  { value: 312, suffix: "%", label: "More qualified leads", desc: "in the first 90 days" },
  { value: 28, suffix: "%", label: "Higher conversion rates", desc: "from MQL to closed-won" },
  { value: 6, suffix: "x", label: "Faster pipeline velocity", desc: "with our process optimization" },
];

export function Results() {
  return (
    <section id="results" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[420px] gradient-glow rounded-full opacity-70" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
            Results
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
            Numbers that move the <span className="gradient-text">revenue needle</span>
          </h2>
          <motion.img
            src={resultsIllustration}
            alt="Growth chart illustration"
            width={1024}
            height={1024}
            loading="lazy"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[160px] h-auto mx-auto mt-6"
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-5 text-center shadow-card"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                <Counter to={m.value} suffix={m.suffix} />
              </div>
              <div className="mt-2 font-semibold text-sm">{m.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{m.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
