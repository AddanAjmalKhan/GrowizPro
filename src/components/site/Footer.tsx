import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";

const cols = [
  {
    title: "Sales Lead Generation",
    links: [
      "B2B Appointment Settings",
      "B2B Market Research",
      "LinkedIn Automation",
      "Prospect & List Building",
      "B2B Email Marketing",
    ],
  },
  {
    title: "Content Marketing",
    links: [
      "Blog Writing",
      "SEO Content Writing",
      "Web Copy Writing",
      "Social Media Marketing",
      "White Paper Writing",
    ],
  },
  {
    title: "Virtual Staff Augmentation",
    links: [
      "Marketing VSA",
      "Sales VSA",
      "Recruiting VSA",
      "Data & Analytics VSA",
      "Finance VSA",
    ],
  },
  {
    title: "Industries",
    links: [
      "IT MSP",
      "B2B SaaS Platforms",
      "Cybersecurity",
      "Recruitment & Staffing",
      "Financial Services",
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative gradient-dark text-white/80 overflow-hidden">
      <div className="absolute top-0 right-0 size-96 rounded-full bg-primary-glow/15 blur-3xl" />
      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid lg:grid-cols-6 gap-10">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl inline-block p-2">
              <Logo className="h-12" />
            </div>
            <p className="mt-5 text-sm text-white/70 leading-relaxed max-w-sm">
              Execution Service Partner for GTM. Embedded teams that deliver outcomes —
              faster than hiring, safer than outsourcing.
            </p>
            <div className="mt-6 space-y-2.5 text-sm">
              <a href="tel:+15717151688" className="flex items-center gap-2 hover:text-white">
                <Phone className="size-4 text-primary-glow" /> +1 (571) 715-1688
              </a>
              <a href="mailto:inquiry@growizpro.com" className="flex items-center gap-2 hover:text-white">
                <Mail className="size-4 text-primary-glow" /> inquiry@growizpro.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-primary-glow" /> United States
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              {[Linkedin, Twitter, Instagram, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="size-9 rounded-lg bg-white/10 backdrop-blur grid place-items-center text-white/80 hover:bg-primary-glow hover:text-white hover:-translate-y-0.5 transition-all"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="font-semibold text-sm text-white mb-4">{c.title}</h3>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-white/60 hover:text-primary-glow transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} GrowizPro. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Cookies</a>
            <a href="#" className="hover:text-white">Careers</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
