import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PageLayout, PageHero } from "@/components/site/PageLayout";
import {
  Phone, GitBranch, FileText, Search, ClipboardCheck, Wrench, Headphones, RefreshCw,
  CheckCircle2, ArrowRight, X, Calendar, Mail, User, Building2, MessageSquare,
  TrendingUp, Target, Users, Zap, BookOpen, Brain, FileCheck, BarChart3,
  Briefcase, Server, Factory, ChevronDown,
} from "lucide-react";
import advisoryImg from "@/assets/advisory.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const pains = [
  "Deals are stalling",
  "Proposals go silent",
  "Follow-ups are inconsistent",
  "Upsells and renewals get missed",
];

const partnerPoints = [
  "How your team conducts sales calls with clarity and confidence",
  "How you follow up with precision and consistency",
  "How you renew, upsell, and retain without forcing the sale",
  "How your pipeline flows—and how revenue forecasts stay accurate",
];

const pillars = [
  {
    icon: Phone,
    title: "Closing Execution",
    points: [
      "Join your real sales calls and guide how deals are handled",
      "Build objection-handling templates for the most common blockers",
      "Design follow-up cadences that don't drop the ball",
      "Review proposals and pricing to align value with urgency",
    ],
  },
  {
    icon: GitBranch,
    title: "Pipeline Design & Forecasting",
    points: [
      "Map your full pipeline structure inside your CRM",
      "Define key stages, handoffs, and follow-through actions",
      "Install pipeline hygiene protocols to prevent bloat",
      "Set up forecasting dashboards for revenue visibility",
    ],
  },
  {
    icon: FileText,
    title: "Messaging & Sales Assets",
    points: [
      "Refine value propositions and sales scripts",
      "Build collateral that supports the buying journey",
      "Create one-pagers and proposals that convert",
      "Align messaging across the entire funnel",
    ],
  },
  {
    icon: Search,
    title: "SEO & Website Content",
    points: [
      "Optimize every page with SEO-driven content",
      "Conversion-focused copy that turns visitors into customers",
      "Technical SEO to compound organic visibility",
      "Content systems that support sales conversations",
    ],
  },
];

const services = [
  { title: "Sales Call Coaching", desc: "Real-time deal support to improve objection handling, urgency framing, and close confidence." },
  { title: "Follow-Up Cadence Design", desc: "Custom email, call, and task sequences that prevent drift and drive consistent deal momentum." },
  { title: "Proposal & Pricing Optimization", desc: "Value-aligned proposal frameworks that shorten the sales cycle and increase win rates." },
  { title: "CRM Pipeline Structuring", desc: "Clean, actionable deal stages with clear handoffs, automation triggers, and close tracking." },
  { title: "Upsell & Renewal Playbooks", desc: "Retention-driven systems that expand account value without aggressive sales pressure." },
  { title: "Forecasting Dashboards", desc: "Visual reports that track deal velocity, pipeline health, and revenue predictability." },
  { title: "Messaging & Asset Development", desc: "Refined value propositions, scripts, and collaterals." },
  { title: "Churn Risk Monitoring", desc: "Post-sale workflows that flag early warning signs and activate proactive engagement." },
  { title: "Live Deal Reviews & Iteration", desc: "Ongoing 1:1 debriefs that refine your team's approach based on actual pipeline activity." },
];

const steps = [
  { icon: ClipboardCheck, title: "Audit & Diagnosis", desc: "We dig into your CRM, call recordings, proposals, and pipeline to identify where deals are stalling and revenue is leaking." },
  { icon: Wrench, title: "Sales System Design", desc: "From follow-up cadences to renewal flows, we build custom workflows, templates, and dashboards mapped to your actual buyer journey." },
  { icon: Headphones, title: "Live Coaching & Execution", desc: "We join live sales calls, guide your team in real time, and refine scripts, objections, and offers based on what's actually happening." },
  { icon: RefreshCw, title: "Review & Optimization", desc: "We run bi-weekly reviews of close rates, pipeline movement, and retention signals so the system keeps improving as your team scales." },
];

const ebookReasons = [
  { icon: Target, title: "Battle-Tested Sales Systems", desc: "Proven frameworks from real closers that replace guesswork with structure, helping you close consistently." },
  { icon: TrendingUp, title: "Predictable, Scalable Revenue", desc: "A data-driven system that tracks leads, stages, and conversions to make revenue growth reliable." },
  { icon: Zap, title: "Close Faster, Stress Less", desc: "Learn how to keep momentum, revive stalled deals, and accelerate the sales cycle without pressure." },
  { icon: Brain, title: "Buyer Psychology Unlocked", desc: "Understand the logic, emotion, and timing behind decisions so you can guide prospects to a 'yes.'" },
  { icon: FileCheck, title: "Ready-to-Use Templates & Scripts", desc: "Plug-and-play emails, follow-ups, and objection handlers you can apply immediately." },
  { icon: BarChart3, title: "Built for Teams & Growth", desc: "Dashboards, KPIs, and reviews designed to help solo reps and scaling teams win smarter." },
];

const audiences = [
  { icon: Server, title: "B2B Technology & SaaS" },
  { icon: Briefcase, title: "Professional & Enterprise Services" },
  { icon: Factory, title: "Commercial & Industrial Solutions" },
];

const faqs = [
  {
    q: "Is a fractional CRO right for a company our size?",
    a: "If you're generating leads but struggling to convert them consistently, a fractional CRO brings senior-level sales leadership without the full-time cost. It works for early-stage startups through mid-market companies.",
  },
  {
    q: "How is this different from hiring a sales consultant?",
    a: "Consultants advise. We install. We embed inside your sales process — joining calls, building systems, coaching your team — and stay accountable to revenue outcomes, not just recommendations.",
  },
  {
    q: "Do you work with founders who still handle sales themselves?",
    a: "Absolutely. Many of our partners are founder-led sales teams. We help you systemize what's working, fix what isn't, and prepare your process for the first hires.",
  },
  {
    q: "What if we already have a sales team?",
    a: "Even better. We layer in coaching, structure, and forecasting on top of your existing team — improving close rates and pipeline hygiene without disruption.",
  },
  {
    q: "How soon can we see results?",
    a: "Most partners see pipeline clarity and follow-up improvements within the first 2–3 weeks. Close-rate gains typically compound over the first 60–90 days.",
  },
];

function BookingForm() {
  const [msg, setMsg] = useState("");
  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={(e) => e.preventDefault()}
      className="glass rounded-3xl p-6 md:p-8 border border-border/60 shadow-elegant space-y-4"
    >
      <div className="flex items-center gap-2 mb-2">
        <Calendar className="size-5 text-primary-glow" />
        <h3 className="text-lg font-semibold">Book a Discovery Call</h3>
      </div>

      <div>
        <label className="text-xs font-medium text-foreground/80 flex items-center gap-1.5">
          <User className="size-3.5" /> Full Name *
        </label>
        <input required placeholder="E.g. John Doe" className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
      </div>
      <div>
        <label className="text-xs font-medium text-foreground/80 flex items-center gap-1.5">
          <Mail className="size-3.5" /> Email Address *
        </label>
        <input required type="email" placeholder="E.g. john@doe.com" className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
      </div>
      <div>
        <label className="text-xs font-medium text-foreground/80 flex items-center gap-1.5">
          <Building2 className="size-3.5" /> Company Name *
        </label>
        <input required placeholder="E.g. Acme Corp" className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
      </div>
      <div>
        <label className="text-xs font-medium text-foreground/80 flex items-center gap-1.5">
          <Phone className="size-3.5" /> Phone Number
        </label>
        <div className="mt-1.5 flex gap-2">
          <select className="rounded-lg border border-input bg-background px-2 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
            <option>+1</option><option>+44</option><option>+91</option><option>+61</option>
          </select>
          <input placeholder="E.g. +1 3004005000" className="flex-1 rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
        </div>
      </div>
      <div>
        <label className="text-xs font-medium text-foreground/80 flex items-center gap-1.5">
          <MessageSquare className="size-3.5" /> Message or Specific Inquiry
        </label>
        <textarea
          maxLength={180}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Any specific requirements you want to mention..."
          rows={3}
          className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
        />
        <div className="text-right text-[11px] text-muted-foreground mt-1">{msg.length} / 180</div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl gradient-cta text-white font-semibold shadow-elegant hover:shadow-glow transition-all"
      >
        Fix My Sales System! <ArrowRight className="size-4" />
      </motion.button>
      <p className="text-[11px] text-muted-foreground text-center">B2B • United States</p>
    </motion.form>
  );
}

function AdvisoryPage() {
  return (
    <PageLayout>
      {/* HERO with form */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero pointer-events-none" />
        <div className="absolute top-10 -left-20 size-72 rounded-full bg-primary-glow/20 blur-3xl animate-blob" />
        <div className="absolute top-20 right-0 size-80 rounded-full bg-cyan/20 blur-3xl animate-blob animation-delay-2000" />

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary-glow bg-primary/10 px-3 py-1 rounded-full mb-5">
                Advisory & Growth Consulting Services For You
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.05]">
                Your Lead Flow Is Strong — But <span className="gradient-text">Revenue Isn't Keeping Up</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                We help businesses build the structure, systems, and strategy to turn leads into long-term revenue. Get support in closing deals without the full-time commitment.
              </p>

              {/* Animated quick-stat icon row */}
              <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
                {[
                  { icon: TrendingUp, label: "Higher Close Rate" },
                  { icon: Target, label: "Pipeline Clarity" },
                  { icon: Zap, label: "Faster Cycles" },
                ].map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ y: -4, scale: 1.04 }}
                    className="glass rounded-xl p-3 border border-border/60 shadow-soft flex flex-col items-center text-center gap-1.5"
                  >
                    <span className="size-9 rounded-lg gradient-cta grid place-items-center text-white shadow-elegant">
                      <s.icon className="size-4" />
                    </span>
                    <span className="text-[11px] font-semibold text-foreground/80 leading-tight">{s.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Bottleneck */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="absolute -inset-4 gradient-glow-bg rounded-3xl" />
              <img src={advisoryImg} alt="Advisory partnership" className="relative rounded-3xl shadow-elegant border border-border/60 w-full h-auto" loading="lazy" width={1280} height={896} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-glow">B2B • United States</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-balance">
                The Real Bottleneck Isn't Leads — It's the Lack of <span className="gradient-text">Structure</span>
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Most businesses eventually hit the same ceiling. You're generating interest. Your calendar has demos. Referrals are flowing. But…
              </p>
              <ul className="mt-5 space-y-3">
                {pains.map((p, i) => (
                  <motion.li
                    key={p}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3 text-foreground/80"
                  >
                    <span className="size-6 rounded-lg bg-destructive/10 grid place-items-center text-destructive">
                      <X className="size-3.5" />
                    </span>
                    {p}
                  </motion.li>
                ))}
              </ul>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                The problem isn't effort — it's the absence of a repeatable sales engine. Without structure, even warm leads drift away.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner section */}
      <section className="py-24 bg-secondary/40 relative">
        <div className="absolute inset-0 gradient-mesh opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary-glow bg-primary/10 px-3 py-1 rounded-full mb-4">
              B2B AGS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
              We Step In as Your <span className="gradient-text">Advisory and Growth Partner</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              We work alongside founders to transform how leads move through your sales process—so more of them become customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {partnerPoints.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass rounded-2xl p-5 border border-border/60 shadow-soft flex gap-3"
              >
                <CheckCircle2 className="size-5 text-primary-glow shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/80">{p}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-10 max-w-2xl mx-auto">
            You get more than advice. You get a partner who installs the systems, habits, and tools that make closing deals predictable.
          </p>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl gradient-dark text-white p-10 md:p-14 shadow-elegant"
          >
            <div className="absolute -top-20 -right-20 size-72 rounded-full bg-primary-glow/30 blur-3xl animate-blob" />
            <div className="absolute -bottom-20 -left-20 size-72 rounded-full bg-cyan/30 blur-3xl animate-blob animation-delay-2000" />
            <div className="relative max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                Build a Sales System That Closes More Deals—Consistently
              </h3>
              <p className="mt-4 text-white/80">
                Turn leads into revenue with structured systems, live coaching, and measurable results.
              </p>
              <a href="#contact" className="mt-6 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-foreground font-semibold shadow-elegant hover:-translate-y-0.5 transition-all">
                Book Free Sales Process Audit <ArrowRight className="size-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-24 bg-secondary/40 relative">
        <div className="absolute inset-0 gradient-mesh opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary-glow bg-primary/10 px-3 py-1 rounded-full mb-4">
              What We Do (And Do Well)
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
              What You Can Expect with <span className="gradient-text">Zaphyre's AGC Service</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              When we partner with your team, we focus on making your sales process faster, cleaner, and more predictable—so more leads turn into long-term clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass rounded-2xl p-7 border border-border/60 shadow-soft hover:shadow-elegant transition-all"
              >
                <div className="size-12 rounded-xl gradient-cta grid place-items-center text-white shadow-elegant mb-4">
                  <p.icon className="size-5" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="size-4 text-primary-glow shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How we build */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary-glow bg-primary/10 px-3 py-1 rounded-full mb-4">
              From Leads to Lifetime Revenue
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
              How We Build <span className="gradient-text">Sales Systems That Don't Miss</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              We don't guess or hand you a playbook and walk away. Every system is installed, tested, and tuned to drive real sales outcomes.
            </p>
          </div>

          <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative glass rounded-2xl p-6 border border-border/60 shadow-soft text-center"
              >
                <div className="size-14 mx-auto rounded-2xl gradient-cta grid place-items-center text-white shadow-elegant mb-4 relative">
                  <s.icon className="size-6" />
                  <div className="absolute -top-2 -right-2 size-6 rounded-full bg-card border-2 border-primary-glow text-primary-glow text-xs font-bold grid place-items-center shadow-soft">
                    {i + 1}
                  </div>
                </div>
                <h3 className="font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AGC services */}
      <section className="py-24 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary-glow bg-primary/10 px-3 py-1 rounded-full mb-4">
              AGC Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
              Zaphyre AGC Services — Built for <span className="gradient-text">Sales Systems That Scale</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group glass rounded-2xl p-6 border border-border/60 shadow-soft hover:shadow-elegant transition-all"
              >
                <CheckCircle2 className="size-7 text-primary-glow mb-3" />
                <h3 className="font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl gradient-cta text-white font-semibold shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5"
            >
              Book Free Sales Process Audit <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* E-Book section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-20 right-10 size-72 rounded-full bg-primary-glow/10 blur-3xl animate-blob" />
        <div className="absolute bottom-10 left-10 size-72 rounded-full bg-cyan/10 blur-3xl animate-blob animation-delay-2000" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-glow bg-primary/10 px-3 py-1 rounded-full mb-4">
              <BookOpen className="size-3.5" /> 6 Reasons
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
              Why You Need This <span className="gradient-text">E-Book?</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Here's why this isn't just another e-book — A Sales Deep Dive: 11 Proven Ways To Stop Losing Deals You Should Have Won.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ebookReasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass rounded-2xl p-6 border border-border/60 shadow-soft hover:shadow-elegant transition-all"
              >
                <div className="size-12 rounded-xl gradient-cta grid place-items-center text-white shadow-elegant mb-4">
                  <r.icon className="size-5" />
                </div>
                <h3 className="font-semibold tracking-tight">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary-glow bg-primary/10 px-3 py-1 rounded-full mb-4">
              Who Should Read This?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
              If your business relies on <span className="gradient-text">high-stakes B2B deals</span>, this guide was built for you.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Long sales cycles or multi-touch buyer journeys — this is for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {audiences.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass rounded-2xl p-6 border border-border/60 shadow-soft text-center"
              >
                <div className="size-14 mx-auto rounded-2xl gradient-cta grid place-items-center text-white shadow-elegant mb-4">
                  <a.icon className="size-6" />
                </div>
                <h3 className="font-semibold tracking-tight">{a.title}</h3>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl gradient-cta text-white font-semibold shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5">
              Let's Read This! <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Smarter Sales Strategy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Users className="size-10 mx-auto text-primary-glow mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
              Get a <span className="gradient-text">Smarter Sales Strategy</span> That Scales
            </h2>
            <p className="mt-5 text-muted-foreground">
              At Zaphyre, we don't just review your pipeline—we help you build a revenue system that keeps moving. Our AGC model blends live coaching with strategic execution, so your team knows what to do at every stage of the sales journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary-glow bg-primary/10 px-3 py-1 rounded-full mb-4">
              FAQs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="glass rounded-2xl border border-border/60 px-5 shadow-soft"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}

export default function PageWithTitle() {
  useEffect(() => { document.title = "Advisory & Growth Consulting — Zaphyre"; }, []);
  return <AdvisoryPage />;
}
