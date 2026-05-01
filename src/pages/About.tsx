import { useEffect } from "react";
import { motion } from "framer-motion";
import { PageLayout, PageHero } from "@/components/site/PageLayout";
import {
  Award,
  Compass,
  Rocket,
  Target,
  Users,
  Phone,
  Database,
  Megaphone,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Building2,
} from "lucide-react";

const stats = [
  { v: "20+", l: "Years in Sales Management" },
  { v: "1,500+", l: "Initial Sales Meetings" },
  { v: "3,500+", l: "Follow-up & Closing Calls" },
  { v: "350+", l: "Fortune 1000 Contracts Closed" },
  { v: "20,000+", l: "Appointments Scheduled" },
  { v: "Global", l: "Talent Network" },
];

const methodology = [
  "What is your target market?",
  "Who do you want to schedule your meetings with?",
  "How do you want your prospects to be contacted?",
  "What tools do you need to gain a competitive edge?",
];

const capabilities = [
  {
    icon: Phone,
    title: "Sales Lead Generation",
    desc: "Zaphyre offers appointments that support your business development.",
    accent: "from-[#38BDF8] to-[#14B8A6]",
  },
  {
    icon: Database,
    title: "BPO Solutions",
    desc: "Do what you do best and outsource the rest.",
    accent: "from-[#0B2A5B] to-[#38BDF8]",
  },
  {
    icon: Megaphone,
    title: "Content Marketing",
    desc: "Zaphyre empowers your business presence on digital platforms.",
    accent: "from-[#14B8A6] to-[#0B2A5B]",
  },
];

const team = [
  "Sales Development Reps",
  "Data Researchers",
  "Closers",
  "Sales Strategists",
  "Analysts",
];

// Reusable animated gradient blob
const Blob = ({ className }: { className?: string }) => (
  <motion.div
    aria-hidden
    className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
    animate={{
      scale: [1, 1.15, 0.95, 1],
      x: [0, 30, -20, 0],
      y: [0, -20, 15, 0],
    }}
    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
  />
);

function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Who We Are"
        breadcrumb="About"
        title={
          <>
            Experts in <span className="gradient-text">Sales Management</span>
          </>
        }
        subtitle="Zaphyre brings 20+ years of experience in sales management and executing sales processes — from cold outreach to closed contracts with Fortune 1000 companies."
      />

      {/* Who We Are — narrative + animated stat grid */}
      <section className="relative py-20 overflow-hidden">
        <Blob className="bg-primary-glow/20 size-[28rem] -top-20 -left-32" />
        <Blob className="bg-cyan/20 size-[24rem] bottom-0 right-0" />

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-glow bg-primary/10 px-3 py-1 rounded-full mb-4">
                <Award className="size-3.5" /> Our Track Record
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
                Built by operators who have actually <span className="gradient-text">closed the deals</span>
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                The founding team of Zaphyre has personally completed over{" "}
                <strong className="text-foreground">1,500 initial sales meetings</strong> with executives at
                Global 2000 companies, participated directly in more than{" "}
                <strong className="text-foreground">3,500 follow-up and closing calls</strong>, and personally
                closed over <strong className="text-foreground">350 contracts</strong> with Fortune 1000 companies.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Zaphyre leadership has managed inside sales teams who have collectively scheduled over{" "}
                <strong className="text-foreground">20,000 sales appointments</strong> — designing sales
                processes, roles, scripts, tools, and incentive plans to drive high-volume, high-conversion
                results.
              </p>
            </motion.div>

            <div className="lg:col-span-2 grid grid-cols-2 gap-3">
              {stats.map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  className="glass rounded-2xl p-4 border border-border/60 shadow-soft hover:shadow-elegant transition-shadow"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text">{s.v}</div>
                  <div className="text-[11px] text-muted-foreground mt-1 leading-tight">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-secondary/40 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-glow bg-primary/10 px-3 py-1 rounded-full mb-4">
              <Compass className="size-3.5" /> Our Methodology
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
              Unlocking the <span className="gradient-text">unique value</span> of your organization
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              With our extensive onboarding system, we create a customized go-to-market strategy designed
              around four foundational questions:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {methodology.map((q, i) => (
              <motion.div
                key={q}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group flex items-start gap-4 glass rounded-2xl p-5 border border-border/60 shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1"
              >
                <div className="shrink-0 size-10 rounded-xl gradient-cta grid place-items-center text-white font-bold shadow-elegant group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>
                <p className="text-base md:text-lg font-medium pt-1.5">{q}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark" />
        <Blob className="bg-primary-glow/25 size-[30rem] top-1/2 left-1/4 -translate-y-1/2" />
        <Blob className="bg-cyan/20 size-[24rem] -bottom-10 right-0" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-glow bg-white/10 px-3 py-1 rounded-full mb-5 backdrop-blur"
            >
              <Rocket className="size-3.5" /> Our Mission
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-balance"
            >
              Helping companies{" "}
              <span className="bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">
                accelerate their growth
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg text-white/80 leading-relaxed"
            >
              Our focus is on connecting a talented global workforce to all business sizes — Fortune 500s
              and startups alike. Zaphyre is a tightly-knit team built to help businesses scale.
            </motion.p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {team.map((role, i) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.06 }}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur text-sm text-white/90"
                >
                  <Users className="size-3.5 text-primary-glow" />
                  {role}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-glow bg-primary/10 px-3 py-1 rounded-full mb-4">
              <Sparkles className="size-3.5" /> Our Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
              More about Zaphyre & <span className="gradient-text">our services</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Zaphyre was originally founded as a company that provided cold-calling and hyper-targeted
              prospect data to the sales team. Over time, we expanded to connect a talented global workforce
              with extensive lead generation strategies and expertise across multiple industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group relative glass rounded-3xl p-7 border border-border/60 shadow-soft hover:shadow-elegant transition-all overflow-hidden"
              >
                <div
                  className={`absolute -top-12 -right-12 size-40 rounded-full bg-gradient-to-br ${c.accent} opacity-10 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500`}
                />
                <div
                  className={`relative size-14 rounded-2xl bg-gradient-to-br ${c.accent} grid place-items-center text-white shadow-elegant mb-5 group-hover:rotate-6 group-hover:scale-110 transition-transform`}
                >
                  <c.icon className="size-6" />
                </div>
                <h3 className="relative text-lg font-semibold tracking-tight">{c.title}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Company */}
      <section className="py-20 bg-secondary/40 relative overflow-hidden">
        <Blob className="bg-primary-glow/15 size-[26rem] top-0 right-0" />

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-glow bg-primary/10 px-3 py-1 rounded-full mb-4">
                <Building2 className="size-3.5" /> Our Company
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
                Founded to build a better{" "}
                <span className="gradient-text">operational system</span> for sales growth
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Zaphyre was founded with the initiative to create an operational system for businesses to
                grow their sales. Our process is simple and transparent.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We know how frustrating it is to source quality leads — wasting weeks digging through the
                internet for a small list of contacts who never respond. That's exactly why we sought a
                better way. Our proven lead generation techniques over-deliver results in any industry —
                and we bring that solution to every business, big or small.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-6 gradient-glow-bg rounded-[2rem] opacity-60" />
              <div className="relative glass rounded-3xl p-8 border border-border/60 shadow-elegant">
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-12 rounded-xl gradient-cta grid place-items-center text-white shadow-elegant">
                    <TrendingUp className="size-6" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Why Zaphyre</div>
                    <div className="text-xs text-muted-foreground">The right team. The right data.</div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Simple, transparent process built for clarity",
                    "Hyper-targeted prospect data, not bulk lists",
                    "Proven lead generation across multiple industries",
                    "Embedded execution — outcomes, not activity",
                    "Built for businesses of every size",
                  ].map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.06 }}
                      className="flex items-start gap-3 text-sm"
                    >
                      <CheckCircle2 className="size-5 text-cyan shrink-0 mt-0.5" style={{ color: "hsl(var(--cyan))" }} />
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get Started CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark" />
        <Blob className="bg-primary-glow/30 size-[32rem] -top-20 left-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-glow bg-white/10 px-3 py-1 rounded-full mb-5 backdrop-blur">
              <Target className="size-3.5" /> Get Started
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
              Don't know what to <span className="bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">start with?</span>
            </h2>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Get a solution for B2B lead generation. Book a meeting and let's design a strategy tailored
              to your business — because the sooner you start generating leads, the sooner you close deals.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href="/advisory"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-navy font-semibold shadow-elegant hover:shadow-glow transition-all hover:scale-105"
              >
                Book a Meeting
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-primary-glow"
                >
                  ⇨
                </motion.span>
              </a>
              <a
                href="/careers"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur"
              >
                Let's Grow Together
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}

export default function PageWithTitle() {
  useEffect(() => {
    document.title = "About Zaphyre — Experts in Sales Management & B2B Lead Generation";
  }, []);
  return <AboutPage />;
}
