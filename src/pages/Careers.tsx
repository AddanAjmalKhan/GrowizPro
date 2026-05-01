import { useEffect } from "react";
import { motion } from "framer-motion";
import { PageLayout, PageHero } from "@/components/site/PageLayout";
import {
  ArrowRight,
  FileSearch,
  UserCheck,
  MessagesSquare,
  Trophy,
  Calendar,
  Crown,
  Phone,
  Target,
  Code2,
  PenLine,
  Search,
  CalendarCheck,
  Link2,
} from "lucide-react";
import cultureImg from "@/assets/avatar-culture.jpg";
import positionsImg from "@/assets/avatar-positions.jpg";
import processImg from "@/assets/avatar-process.jpg";
import applyImg from "@/assets/avatar-apply.jpg";
import articlesImg from "@/assets/avatar-articles.jpg";


const positions = [
  { title: "Chief of Staff", desc: "Strategic partner enabling executive focus, alignment, and high-impact execution.", tag: "Leadership", Icon: Crown },
  { title: "SDR – Sales Development Representative", desc: "Drive business growth through strategic sales.", tag: "Sales", Icon: Phone },
  { title: "Outbound Lead Generation Specialist", desc: "Build scalable outbound campaigns that consistently create sales-ready opportunities.", tag: "Sales", Icon: Target },
  { title: "WordPress Developer", desc: "Design and build fast, conversion-focused WordPress sites that power revenue growth.", tag: "Engineering", Icon: Code2 },
  { title: "Content Strategist", desc: "Plan and optimize content that attracts, educates, and converts our ideal buyers.", tag: "Content", Icon: PenLine },
  { title: "SEO & AEO Expert", desc: "Drive organic growth and AI-powered visibility across search and answer engines.", tag: "Marketing", Icon: Search },
  { title: "Virtual Sales Assistant (Appointment Setter)", desc: "Book high-intent meetings by nurturing leads and keeping follow-up on track.", tag: "Sales", Icon: CalendarCheck },
  { title: "Junior SEO Executive (Off-Page SEO)", desc: "Build high-quality backlinks and partnerships that boost rankings and domain authority.", tag: "Marketing", Icon: Link2 },
];

const steps = [
  { icon: FileSearch, title: "Apply For The Job", desc: "Submit your resume and cover letter through our online portal, showcasing your skills, experience, and why you're a great fit for GrowizPro." },
  { icon: UserCheck, title: "Get Shortlisted", desc: "Our recruitment team carefully reviews all applications, selecting the most promising candidates for the next stage based on qualifications and potential." },
  { icon: MessagesSquare, title: "Interviews Process", desc: "Engage in a series of interviews with our team to discuss your expertise, cultural fit, and how you can contribute to GrowizPro's success." },
  { icon: Trophy, title: "Job Offered and Hired", desc: "Receive a job offer if selected, and upon acceptance, join our team to start an exciting journey of growth and impact at GrowizPro." },
];

const culture = ["Opportunity", "Empowerment", "Growth", "Journey", "Happiness", "Learning", "Connection"];

const articles = [
  { title: "GTM Engineer: The Most In-Demand Tech Role of 2026 (And How to Become One)", date: "March 4, 2026" },
  { title: "How to Build a Winning Go-to-Market Execution Plan [+Templates]", date: "March 3, 2026" },
  { title: "Which GTM Execution Model Scales Better? In-House, Agency, or ESP (2026 Guide)", date: "February 11, 2026" },
  { title: "What Is an ESP? 7 Reasons B2B Teams Need Execution Service Partners", date: "February 4, 2026" },
  { title: "Sales Development Representative: Roles, Benefits, & Hiring Guide for 2026", date: "December 23, 2025" },
  { title: "What If Google's Mobile-First Indexing Ignores Your Site?", date: "December 3, 2025" },
];

function CareersPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Work With Us"
        breadcrumb="Careers"
        title={<>Career At <span style={{ color: "#14B8A6" }}>GrowizPro</span></>}
        subtitle="Explore Diverse Opportunities — At GrowizPro, we're building a dynamic team across a range of roles to drive innovation and growth for our clients. Whether you're passionate about sales, content creation, digital optimization, project management, or leadership development, we have positions that leverage your skills to foster strong client relationships and deliver impactful solutions."
      />

      <div className="container mx-auto px-4 -mt-8 mb-16 text-center">
        <a
          href="#apply"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5"
          style={{ background: "linear-gradient(135deg, #0B2A5B, #14B8A6)" }}
        >
          Apply Now <ArrowRight className="size-4" />
        </a>
      </div>

      {/* Marquee culture */}
      <section className="py-6 border-y border-border/60 bg-secondary/40 overflow-hidden">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {[...culture, ...culture, ...culture].map((word, i) => (
            <div key={i} className="flex items-center gap-8 text-2xl md:text-3xl font-bold tracking-tight">
              <span style={{ color: "#14B8A6" }}>{word}.</span>
              <span style={{ color: "#0B2A5B", opacity: 0.4 }}>●</span>
            </div>
          ))}
        </div>
      </section>

      {/* Culture */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#14B8A6" }}>
                Culture At GrowizPro — B2B Sales Jobs
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-balance" style={{ color: "#0B2A5B" }}>
                Living Our Just Cause: A <span style={{ color: "#14B8A6" }}>Culture of Impact</span>
              </h2>
              <p className="mt-3 text-lg font-semibold text-foreground/80">
                Embrace Excellence and Growth at GrowizPro
              </p>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                At GrowizPro, we believe in the power of hard and honest work. Our culture fosters
                continuous learning, growth, and improvement. Every team member is vital, and we
                invest in human capital to create an environment of trust and support.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                If you thrive on challenges, take initiative, and are committed to excellence,
                GrowizPro is the place for you. Join us in building a sustainable company where your
                personal and professional goals are met.
              </p>

              <div
                className="mt-8 p-6 rounded-2xl glass border card-hover"
                style={{ borderColor: "rgba(20,184,166,0.25)" }}
              >
                <h3 className="font-semibold text-lg tracking-tight" style={{ color: "#0B2A5B" }}>
                  Be Part of Our Just Cause
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  At GrowizPro, we are driven by a deeper purpose that transcends traditional business
                  metrics. Our Just Cause is to empower and advance by turning transactions into
                  transformative relationships.
                </p>
              </div>

              <a
                href="#positions"
                className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #0B2A5B, #14B8A6)" }}
              >
                See Open Roles <ArrowRight className="size-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="absolute -inset-4 rounded-3xl blur-2xl opacity-60"
                style={{ background: "radial-gradient(circle at 50% 50%, rgba(20,184,166,0.35), transparent 70%)" }}
              />
              <img
                src={cultureImg}
                alt="GrowizPro team culture leader"
                className="relative rounded-3xl shadow-elegant border w-full h-auto max-w-sm mx-auto"
                style={{ borderColor: "rgba(20,184,166,0.3)" }}
                loading="lazy"
                width={768}
                height={768}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section id="positions" className="py-24 relative" style={{ background: "linear-gradient(180deg, #F4FBFA 0%, #FFFFFF 100%)" }}>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-center mb-14">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div
                className="absolute -inset-4 rounded-3xl blur-2xl opacity-50"
                style={{ background: "radial-gradient(circle at 50% 50%, rgba(11,42,91,0.3), transparent 70%)" }}
              />
              <img
                src={positionsImg}
                alt="GrowizPro diverse hiring team"
                className="relative rounded-3xl shadow-elegant border w-full h-auto max-w-sm mx-auto"
                style={{ borderColor: "rgba(20,184,166,0.3)" }}
                loading="lazy"
                width={1024}
                height={768}
              />
            </motion.div>
            <div className="order-1 lg:order-2">
              <span
                className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4"
                style={{ color: "#14B8A6", background: "rgba(20,184,166,0.1)" }}
              >
                Available Positions
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance" style={{ color: "#0B2A5B" }}>
                Join a team where{" "}
                <span style={{ color: "#14B8A6" }}>your growth and success</span> are our top priorities
              </h2>
              <p className="mt-5 text-muted-foreground">
                Find your fit across sales, content, engineering, and marketing — every role
                designed for impact, ownership, and long-term growth.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {positions.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="group glass rounded-2xl p-6 border shadow-soft card-hover flex gap-4 items-start"
                style={{ borderColor: "rgba(20,184,166,0.2)" }}
              >
                <div
                  className="size-14 rounded-2xl grid place-items-center text-white shadow-elegant shrink-0"
                  style={{ background: "linear-gradient(135deg, #0B2A5B, #14B8A6)" }}
                >
                  <p.Icon className="size-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-semibold text-lg tracking-tight" style={{ color: "#0B2A5B" }}>
                      {p.title}
                    </h3>
                    <span
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
                      style={{ background: "rgba(20,184,166,0.12)", color: "#0F766E" }}
                    >
                      {p.tag}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <a
                    href="#apply"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all"
                    style={{ color: "#14B8A6" }}
                  >
                    Apply Now! <ArrowRight className="size-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment process */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center mb-14">
            <div>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4"
                style={{ color: "#14B8A6", background: "rgba(20,184,166,0.1)" }}
              >
                Join The Team
              </span>
              <p className="text-sm font-semibold text-foreground/70 mb-3">
                Let Us Recruit, Train, And Reward You!
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance" style={{ color: "#0B2A5B" }}>
                Our <span style={{ color: "#14B8A6" }}>Recruitment Process</span>
              </h2>
              <p className="mt-5 text-muted-foreground">
                Our recruitment process at GrowizPro is designed to identify and attract top talent
                through a streamlined and transparent approach, ensuring a perfect fit for both the
                candidate and our team.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="absolute -inset-4 rounded-3xl blur-2xl opacity-60"
                style={{ background: "radial-gradient(circle at 50% 50%, rgba(20,184,166,0.35), transparent 70%)" }}
              />
              <img
                src={processImg}
                alt="GrowizPro recruitment process"
                className="relative rounded-3xl shadow-elegant border w-full h-auto max-w-sm mx-auto"
                style={{ borderColor: "rgba(20,184,166,0.3)" }}
                loading="lazy"
                width={1024}
                height={768}
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative glass rounded-2xl p-6 border shadow-soft text-center card-hover"
                style={{ borderColor: "rgba(20,184,166,0.2)" }}
              >
                <div
                  className="size-12 mx-auto rounded-xl grid place-items-center text-white shadow-elegant mb-4"
                  style={{ background: "linear-gradient(135deg, #0B2A5B, #14B8A6)" }}
                >
                  <s.icon className="size-5" />
                </div>
                <div className="text-xs font-bold mb-1" style={{ color: "#14B8A6" }}>STEP {i + 1}</div>
                <h3 className="font-semibold tracking-tight" style={{ color: "#0B2A5B" }}>{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply form */}
      <section id="apply" className="py-24" style={{ background: "linear-gradient(180deg, #F4FBFA 0%, #FFFFFF 100%)" }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="absolute -inset-4 rounded-3xl blur-2xl opacity-60"
                style={{ background: "radial-gradient(circle at 50% 50%, rgba(20,184,166,0.35), transparent 70%)" }}
              />
              <img
                src={applyImg}
                alt="Apply for a role at GrowizPro"
                className="relative rounded-3xl shadow-elegant border w-full h-auto max-w-sm mx-auto"
                style={{ borderColor: "rgba(20,184,166,0.3)" }}
                loading="lazy"
                width={768}
                height={768}
              />
              <div className="mt-6 text-center lg:text-left">
                <span
                  className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3"
                  style={{ color: "#14B8A6", background: "rgba(20,184,166,0.1)" }}
                >
                  Join Our Talent Network
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-balance" style={{ color: "#0B2A5B" }}>
                  Are You Ready? <span style={{ color: "#14B8A6" }}>Let's do that!</span>
                </h2>
              </div>
            </motion.div>

            <form
              className="glass rounded-3xl p-8 border shadow-elegant grid sm:grid-cols-2 gap-4"
              style={{ borderColor: "rgba(20,184,166,0.25)" }}
            >
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Full Name *</label>
                <input type="text" placeholder="Enter your full name (e.g., John Doe)" className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2" style={{ outlineColor: "#14B8A6" }} />
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Email Address *</label>
                <input type="email" placeholder="john.doe@example.com" className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2" />
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Phone *</label>
                <input type="tel" placeholder="+92 123-456-7890" className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2" />
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Position Applied For *</label>
                <select className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-muted-foreground focus:outline-none focus:ring-2">
                  <option>Select a position to apply</option>
                  {positions.map((p) => <option key={p.title}>{p.title}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">How Did You Discover Us? *</label>
                <select className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-muted-foreground focus:outline-none focus:ring-2">
                  <option>E.g., Google Search, LinkedIn, Referral</option>
                  <option>Google Search</option>
                  <option>LinkedIn</option>
                  <option>Referral</option>
                  <option>Cold email</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Upload Resume/CV *</label>
                <input
                  type="file"
                  className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:font-semibold"
                  style={{ color: "#0B2A5B" }}
                />
              </div>
              <label className="sm:col-span-2 flex items-start gap-3 text-xs text-muted-foreground leading-relaxed">
                <input type="checkbox" className="mt-0.5" />
                <span><strong style={{ color: "#0B2A5B" }}>Consent *</strong> — Yes, I confirm that the information I have provided is accurate, and I agree to be contacted for future job opportunities.</span>
              </label>
              <button
                type="submit"
                className="sm:col-span-2 mt-2 px-7 py-3.5 rounded-xl text-white font-semibold shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #0B2A5B, #14B8A6)" }}
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Recent articles */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4"
              style={{ color: "#14B8A6", background: "rgba(20,184,166,0.1)" }}
            >
              Insights
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance" style={{ color: "#0B2A5B" }}>
              Our <span style={{ color: "#14B8A6" }}>Recent Articles</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Stay ahead with GrowizPro's latest thought leadership and industry insights. Explore
              expert perspectives and innovative ideas in the ever-evolving landscape of B2B sales
              and marketing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((a, i) => (
              <motion.a
                key={a.title}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group glass rounded-2xl p-6 border shadow-soft card-hover flex flex-col"
                style={{ borderColor: "rgba(20,184,166,0.2)" }}
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar className="size-3.5" style={{ color: "#14B8A6" }} /> {a.date}
                </div>
                <h3 className="font-semibold text-base tracking-tight leading-snug flex-1" style={{ color: "#0B2A5B" }}>
                  {a.title}
                </h3>
                <span
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all"
                  style={{ color: "#14B8A6" }}
                >
                  Read Article <ArrowRight className="size-4" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}


export default function PageWithTitle() {
  useEffect(() => { document.title = "Careers — GrowizPro"; }, []);
  return <CareersPage />;
}
