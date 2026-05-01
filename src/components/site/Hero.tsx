import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "4", label: "Core Services" },
  { value: "8", label: "Program Models" },
  { value: "90", label: "Days to Results" },
];

export function Hero() {
  return (
    <section className="relative pt-10 pb-24 overflow-hidden">
      {/* Soft pastel blobs — Qvery style */}
      <div className="absolute -top-10 -left-20 size-[420px] rounded-full bg-coral/30 blur-3xl animate-blob pointer-events-none" />
      <div className="absolute top-32 -right-16 size-[460px] rounded-full bg-mint/40 blur-3xl animate-blob animation-delay-2000 pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 size-[360px] rounded-full bg-coral-soft blur-3xl animate-blob animation-delay-4000 pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div className="text-center lg:text-left lg:pl-8 xl:pl-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance leading-[1.02] text-foreground"
            >
              Content, Outbound, and{" "}
              <span className="accent-underline">Sales Execution</span> Squads
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-7 text-lg text-muted-foreground max-w-xl lg:mx-0 mx-auto"
            >
              Embedded teams that deliver outcomes. Faster than hiring, safer than outsourcing.
              Partner with GrowizPro to build inbound and outbound GTM engines that drive
              predictable pipeline and revenue.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-9 flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 btn-ink font-semibold"
              >
                Book a Strategy Call
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-1.5 px-7 py-3.5 btn-ghost-ink font-semibold"
              >
                Get a Free Quote
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 grid grid-cols-3 gap-4 max-w-md lg:mx-0 mx-auto"
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-foreground">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: hand-drawn style illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroIllustration() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto">
      <svg viewBox="0 0 560 520" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Brand palette: navy #0A1628, royal #0B2A5B, light blue #38BDF8, teal #14B8A6 */}
        {/* Top: target / globe */}
        <circle cx="280" cy="120" r="78" fill="#E6F1FB" />
        <circle cx="280" cy="120" r="78" stroke="#0A1628" strokeWidth="3" />
        <circle cx="280" cy="120" r="50" stroke="#0A1628" strokeWidth="2.5" fill="none" />
        <circle cx="280" cy="120" r="22" fill="#14B8A6" stroke="#0A1628" strokeWidth="2.5" />
        <circle cx="280" cy="120" r="6" fill="#0A1628" />

        {/* Arrow hitting bullseye */}
        <line x1="380" y1="40" x2="290" y2="115" stroke="#0A1628" strokeWidth="3" strokeLinecap="round" />
        <polygon points="290,115 305,108 302,122" fill="#0A1628" />
        <polygon points="380,40 372,52 388,52" fill="#38BDF8" stroke="#0A1628" strokeWidth="2" />

        {/* Connecting lines down to team */}
        <path d="M 230 180 Q 200 240 180 300" stroke="#0B2A5B" strokeWidth="2.5" fill="none" strokeDasharray="4 4" />
        <path d="M 280 198 L 280 300" stroke="#0B2A5B" strokeWidth="2.5" fill="none" strokeDasharray="4 4" />
        <path d="M 330 180 Q 360 240 380 300" stroke="#0B2A5B" strokeWidth="2.5" fill="none" strokeDasharray="4 4" />

        {/* Team desk platform */}
        <rect x="80" y="300" width="400" height="120" rx="12" fill="#FFFFFF" stroke="#0A1628" strokeWidth="3" />
        <line x1="80" y1="340" x2="480" y2="340" stroke="#0A1628" strokeWidth="2" />

        {/* Team members */}
        {[130, 215, 300, 385].map((x, i) => (
          <g key={x}>
            <circle cx={x} cy="320" r="14" fill={i % 2 === 0 ? "#38BDF8" : "#14B8A6"} stroke="#0A1628" strokeWidth="2.5" />
            <rect x={x - 18} y="334" width="36" height="28" rx="4" fill={i % 2 === 0 ? "#E6F1FB" : "#DDF4F1"} stroke="#0A1628" strokeWidth="2.5" />
            <rect x={x - 14} y="362" width="28" height="14" rx="2" fill="#0B2A5B" />
          </g>
        ))}

        {/* Output documents flowing down */}
        {[140, 220, 300, 380].map((x, i) => (
          <g key={`doc-${x}`}>
            <line x1={x} y1="420" x2={x} y2="450" stroke="#0B2A5B" strokeWidth="2" />
            <rect x={x - 22} y="450" width="44" height="56" rx="3" fill="#FFFFFF" stroke="#0A1628" strokeWidth="2.5" />
            <line x1={x - 14} y1="466" x2={x + 14} y2="466" stroke="#0B2A5B" strokeWidth="1.5" />
            <line x1={x - 14} y1="476" x2={x + 8} y2="476" stroke="#0B2A5B" strokeWidth="1.5" />
            <line x1={x - 14} y1="486" x2={x + 12} y2="486" stroke="#0B2A5B" strokeWidth="1.5" />
            <circle cx={x} cy="498" r="3" fill={i % 2 === 0 ? "#38BDF8" : "#14B8A6"} />
          </g>
        ))}

        {/* Labels */}
        <text x="395" y="80" fontSize="10" fontWeight="700" fill="#0B2A5B" letterSpacing="1">PRECISION</text>
        <text x="395" y="94" fontSize="10" fontWeight="700" fill="#0B2A5B" letterSpacing="1">TARGETING</text>
        <text x="20" y="370" fontSize="10" fontWeight="700" fill="#0B2A5B" letterSpacing="1">EXECUTION</text>
        <text x="20" y="384" fontSize="10" fontWeight="700" fill="#0B2A5B" letterSpacing="1">SQUADS</text>
        <text x="395" y="490" fontSize="10" fontWeight="700" fill="#0B2A5B" letterSpacing="1">PIPELINE</text>
        <text x="395" y="504" fontSize="10" fontWeight="700" fill="#0B2A5B" letterSpacing="1">&amp; REVENUE</text>
      </svg>

      {/* Floating sparkle accents */}
      <div className="absolute top-4 left-6 size-3 rounded-full bg-blue animate-float" />
      <div className="absolute top-1/3 right-2 size-2 rounded-full bg-cyan animate-float-slow" />
      <div className="absolute bottom-10 left-2 size-2.5 rounded-full bg-blue animate-float" />
    </div>
  );
}
