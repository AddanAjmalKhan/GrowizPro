import { motion } from "framer-motion";
import pipelineImg from "@/assets/pipeline-illustration.jpg";

const steps = [
  { num: "01", title: "B2B Sales Outsourcing", desc: "We manage your sales process end-to-end — from lead generation to closing deals — delivering qualified leads and helping you scale efficiently with proven strategies." },
  { num: "02", title: "B2B Email Marketing", desc: "Flexible email programs that drive lead generation, nurture, conversion, and brand recognition — measurable at every touchpoint." },
  { num: "03", title: "Cold Call Appointment Setting", desc: "Whether you hire a Lead-Gen Specialist or a closer, we enrich your sales funnel with qualified prospects and scheduled meetings." },
  { num: "04", title: "B2B Market Research", desc: "Market research that helps companies recognize development opportunities and form competitive approaches grounded in deep customer understanding." },
  { num: "05", title: "LinkedIn Automation", desc: "Maximize LinkedIn outreach and connect with qualified leads through strategic automation tuned for replies, not noise." },
  { num: "06", title: "B2B Content Marketing", desc: "Strategic, high-quality content that boosts brand authority, drives organic traffic, and generates inbound leads on autopilot." },
  { num: "07", title: "B2B Prospecting", desc: "Discover high-value prospects through proven B2B prospecting methods that fuel your sales engine with qualified leads." },
  { num: "08", title: "Chat & Call Support", desc: "Back-office BPO solutions that support, plan, and grow with you — preparing your operation for what's next." },
];

export function Process() {
  return (
    <section id="process" className="py-28 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary-glow bg-primary/10 px-3 py-1 rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            How our B2B lead generation services{" "}
            <span className="gradient-text">operate as a GTM system</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1 lg:sticky lg:top-28">
            <div className="relative glass rounded-3xl overflow-hidden shadow-elegant border border-border/60">
              <img
                src={pipelineImg}
                alt="Pipeline funnel illustration"
                className="w-full h-auto"
                loading="lazy"
                width={1280}
                height={896}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 glass rounded-xl p-4 border border-white/60">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider">Outcome</div>
                <div className="text-sm font-semibold mt-1">A predictable, accountable revenue engine — embedded in your business.</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group glass rounded-2xl p-5 border border-border/60 shadow-soft hover:shadow-elegant transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-3xl font-bold gradient-text">{s.num}</span>
                  <h3 className="font-semibold text-base tracking-tight">{s.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
