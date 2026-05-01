import { motion } from "framer-motion";
import {
  Briefcase,
  CalendarCheck,
  Mail,
  FileText,
  Search,
  Linkedin,
  Target,
  MessageSquare,
} from "lucide-react";
import servicesIllustration from "@/assets/services-illustration.jpg";

const services = [
  {
    icon: Briefcase,
    title: "B2B Sales Outsourcing",
    desc: "Scale your sales efforts with our expert B2B sales team, accelerating lead conversion and driving revenue.",
  },
  {
    icon: CalendarCheck,
    title: "B2B Appointment Setting",
    desc: "Secure qualified meetings for your sales team with our proven appointment setting strategies.",
  },
  {
    icon: Mail,
    title: "B2B Email Marketing",
    desc: "Nurture leads and drive conversions with targeted B2B email campaigns crafted by our marketing specialists.",
  },
  {
    icon: FileText,
    title: "B2B Content Marketing",
    desc: "Attract and engage your target audience with high-quality B2B content that positions you as a thought leader.",
  },
  {
    icon: Search,
    title: "B2B Market Research",
    desc: "Gain a competitive edge with in-depth B2B market research that informs your sales and marketing strategies.",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Automation",
    desc: "Maximize your LinkedIn outreach and connect with qualified leads through our strategic automation solutions.",
  },
  {
    icon: Target,
    title: "B2B Prospecting",
    desc: "Uncover high-value prospects with our targeted B2B prospecting strategies, filling your sales pipeline with qualified leads.",
  },
  {
    icon: MessageSquare,
    title: "Chat & Call Support",
    desc: "BPO solutions that deliver back-office services personalized to your needs — supporting and scaling with you.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #F5F7FB 100%)",
      }}
    >
      {/* Subtle premium glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 size-[640px] rounded-full blur-3xl"
        style={{ background: "rgba(14,165,233,0.08)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 size-[420px] rounded-full blur-3xl"
        style={{ background: "rgba(30,64,175,0.06)" }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center mb-16">
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4"
              style={{
                color: "#0EA5E9",
                background: "rgba(14,165,233,0.1)",
              }}
            >
              Services We Provide
            </span>
            <h2
              className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance"
              style={{ color: "#0B2A5B" }}
            >
              Built to execute full{" "}
              <span style={{ color: "#38BDF8" }}>go-to-market engines</span>
            </h2>
            <p className="mt-5 text-lg" style={{ color: "#64748B" }}>
              From inbound demand to outbound activation and revenue conversion, GrowizPro owns
              execution across the entire GTM lifecycle.
            </p>
          </div>
          <motion.img
            src={servicesIllustration}
            alt="Go-to-market execution illustration"
            width={1024}
            height={1024}
            loading="lazy"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[280px] lg:max-w-[320px] h-auto mx-auto"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-hover group relative rounded-2xl p-6 transition-all hover:-translate-y-1"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(0,0,0,0.05)",
                boxShadow:
                  "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.04)",
              }}
            >
              <div
                className="size-12 rounded-xl grid place-items-center mb-4 transition-transform group-hover:scale-105"
                style={{
                  background: "rgba(14,165,233,0.1)",
                  color: "#0EA5E9",
                }}
              >
                <s.icon className="size-5" />
              </div>
              <h3
                className="text-base font-bold tracking-tight"
                style={{ color: "#1E40AF" }}
              >
                {s.title}
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{ color: "#64748B" }}
              >
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
