import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";

type SubLink = { label: string; href: string };
type MenuItem = {
  label: string;
  href?: string;
  groups?: { title?: string; links: SubLink[] }[];
};

const menu: MenuItem[] = [
  {
    label: "Our Verticals",
    groups: [
      {
        links: [
          { label: "Zaphyrkeep", href: "#" },
          { label: "ZaphyrAI", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Sales Lead Generation",
    groups: [
      {
        links: [
          { label: "B2B Appointment Settings", href: "#" },
          { label: "B2B Market Research", href: "#" },
          { label: "LinkedIn Automation", href: "#" },
          { label: "Prospect & List Building", href: "#" },
          { label: "B2B Email Marketing", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Content Marketing",
    groups: [
      {
        links: [
          { label: "Blog Writing", href: "#" },
          { label: "SEO Content Writing", href: "#" },
          { label: "Web Copy Writing", href: "#" },
          { label: "Social Media Marketing", href: "#" },
          { label: "Marketing Collateral", href: "#" },
          { label: "White Paper Writing", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Virtual Staff Augmentation",
    groups: [
      {
        title: "Marketing VSA",
        links: [
          { label: "Virtual Content Writer", href: "#" },
          { label: "Social Media Manager", href: "#" },
          { label: "SEO Specialist", href: "#" },
          { label: "Graphic & Multimedia", href: "#" },
        ],
      },
      {
        title: "Sales VSA",
        links: [
          { label: "SDR Team", href: "#" },
          { label: "Lead Gen Specialist", href: "#" },
          { label: "Cold Calling Assistant", href: "#" },
          { label: "LinkedIn Management", href: "#" },
        ],
      },
      {
        title: "Recruiting & Data VSA",
        links: [
          { label: "Talent Sourcing", href: "#" },
          { label: "Interview Scheduling", href: "#" },
          { label: "Power BI Analyst", href: "#" },
          { label: "CRM Reporting", href: "#" },
        ],
      },
      {
        title: "Finance VSA",
        links: [
          { label: "Virtual Bookkeeper", href: "#" },
          { label: "Payroll Processing", href: "#" },
          { label: "Financial Data Entry", href: "#" },
          { label: "QuickBooks/Xero Support", href: "#" },
        ],
      },
    ],
  },
  { label: "Advisory", href: "/advisory" },
  {
    label: "Industries",
    groups: [
      {
        links: [
          { label: "IT MSP", href: "#" },
          { label: "Cleaning & Maintenance", href: "#" },
          { label: "B2B SaaS Platforms", href: "#" },
          { label: "Cybersecurity", href: "#" },
          { label: "Recruitment & Staffing", href: "#" },
          { label: "Financial Services", href: "#" },
          { label: "Design & Packaging", href: "#" },
          { label: "Bookkeeping", href: "#" },
        ],
      },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden md:block bg-foreground text-background/90 text-xs">
        <div className="container mx-auto px-4 flex items-center justify-between py-2">
          <div className="flex items-center gap-5">
            <a href="tel:+15717151688" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="size-3" /> +1 (571) 715-1688
            </a>
            <a href="mailto:inquiry@growizpro.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="size-3" /> inquiry@growizpro.com
            </a>
          </div>
          <div className="opacity-80">Execution Service Partner — Built for B2B Growth</div>
        </div>
      </div>

      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 inset-x-0 z-50 transition-all ${scrolled ? "py-2" : "py-4"}`}
      >
        <div className="container mx-auto px-4">
          <div
            className={`flex items-center justify-between rounded-full pl-5 pr-2 lg:pl-7 lg:pr-2 py-3 transition-all bg-white border border-border ${
              scrolled ? "shadow-elegant" : "shadow-soft"
            }`}
          >
            <Logo className="h-16 md:h-20" />

            <nav className="hidden xl:flex items-center gap-1">
              {menu.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setHovered(item.label)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <a
                    href={item.href ?? "#"}
                    className="flex items-center gap-1 text-sm font-semibold text-foreground hover:text-foreground/70 transition-colors px-3 py-2 rounded-full"
                  >
                    {item.label}
                    {item.groups && <ChevronDown className="size-3.5 opacity-60" />}
                  </a>

                  <AnimatePresence>
                    {item.groups && hovered === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 ${
                          item.groups.length > 1 ? "w-[640px]" : "w-64"
                        }`}
                      >
                        <div className="bg-white rounded-2xl shadow-elegant border border-border p-4 grid gap-x-4 gap-y-3" style={{ gridTemplateColumns: `repeat(${item.groups.length > 1 ? 2 : 1}, minmax(0, 1fr))` }}>
                          {item.groups.map((g, gi) => (
                            <div key={gi}>
                              {g.title && (
                                <div className="text-[11px] font-bold uppercase tracking-wider text-foreground/60 mb-2 px-2">
                                  {g.title}
                                </div>
                              )}
                              <div className="flex flex-col">
                                {g.links.map((l) => (
                                  <a
                                    key={l.label}
                                    href={l.href}
                                    className="text-sm text-foreground/80 hover:text-foreground hover:bg-lavender px-2 py-1.5 rounded-md transition-all"
                                  >
                                    {l.label}
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-2">
              <a
                href="#contact"
                className="text-sm font-semibold px-5 py-2.5 btn-ink"
              >
                Let's Talk
              </a>
            </div>

            <button
              className="xl:hidden p-2 rounded-full hover:bg-lavender"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="xl:hidden mt-2 glass rounded-2xl p-4 shadow-card max-h-[80vh] overflow-y-auto"
              >
                <div className="flex flex-col gap-1">
                  {menu.map((item) => (
                    <details key={item.label} className="group">
                      <summary className="flex items-center justify-between text-sm font-semibold py-2.5 px-2 rounded-lg cursor-pointer hover:bg-accent/60">
                        {item.label}
                        {item.groups && <ChevronDown className="size-4 group-open:rotate-180 transition-transform" />}
                      </summary>
                      {item.groups && (
                        <div className="pl-3 pb-2 flex flex-col gap-2">
                          {item.groups.map((g, gi) => (
                            <div key={gi}>
                              {g.title && (
                                <div className="text-[11px] font-bold uppercase tracking-wider text-primary mt-2 mb-1">
                                  {g.title}
                                </div>
                              )}
                              {g.links.map((l) => (
                                <a key={l.label} href={l.href} className="block text-sm text-muted-foreground py-1.5">
                                  {l.label}
                                </a>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </details>
                  ))}
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="mt-3 text-sm font-semibold px-5 py-3 rounded-xl gradient-cta text-white text-center shadow-elegant"
                  >
                    Let's Talk
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
}
