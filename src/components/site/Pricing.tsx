import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$1,500",
    period: "/ month",
    desc: "For founders validating outbound and booking the first meetings.",
    features: [
      "1 outbound channel (email or LinkedIn)",
      "1,500 prospects / month",
      "Verified contact data",
      "Weekly performance reports",
      "Dedicated campaign manager",
    ],
    cta: "Start with Starter",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$3,200",
    period: "/ month",
    desc: "For teams ready to scale a predictable, multi-channel pipeline.",
    features: [
      "Email + LinkedIn outreach",
      "5,000 prospects / month",
      "AI-personalized messaging",
      "Appointment setting included",
      "Dedicated SDR team",
      "Bi-weekly strategy calls",
    ],
    cta: "Choose Growth",
    highlight: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    desc: "For sales orgs running multi-segment, multi-region campaigns.",
    features: [
      "Unlimited campaigns & channels",
      "Custom prospect volume",
      "CRM & workflow integration",
      "Senior strategist + SDR pod",
      "Inbound SEO & content add-on",
      "Quarterly business reviews",
    ],
    cta: "Talk to sales",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-28 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Plans that scale with your <span className="gradient-text">pipeline goals</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Transparent, performance-driven pricing. No long lock-ins.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`card-hover relative rounded-3xl p-8 transition-all ${
                p.highlight
                  ? "gradient-primary text-primary-foreground shadow-elegant scale-[1.03] md:-translate-y-2"
                  : "glass shadow-soft hover:shadow-card"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-card text-primary text-xs font-semibold px-3 py-1 rounded-full shadow-soft">
                  <Sparkles className="size-3" /> Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight">{p.price}</span>
                  <span className={p.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}>{p.period}</span>
                </div>
                <p className={`mt-3 text-sm ${p.highlight ? "text-primary-foreground/85" : "text-muted-foreground"}`}>
                  {p.desc}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className={`size-4 mt-0.5 shrink-0 ${p.highlight ? "text-primary-foreground" : "text-primary"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center px-5 py-3 rounded-xl font-semibold transition-all ${
                  p.highlight
                    ? "bg-card text-primary hover:bg-card/90 shadow-soft"
                    : "gradient-primary text-primary-foreground shadow-soft hover:shadow-elegant"
                }`}
              >
                {p.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
