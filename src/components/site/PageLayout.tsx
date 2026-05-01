import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CTA } from "./CTA";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  breadcrumb?: string;
};

export function PageHero({ eyebrow, title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative pt-16 pb-20 overflow-hidden">
      <div className="absolute inset-0 gradient-hero pointer-events-none" />
      <div className="absolute top-10 -left-20 size-72 rounded-full bg-primary-glow/20 blur-3xl animate-blob" />
      <div className="absolute top-20 right-0 size-80 rounded-full bg-accent-blue/20 blur-3xl animate-blob animation-delay-2000" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <nav className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground mb-5">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="size-3" />
            <span className="text-foreground">{breadcrumb ?? eyebrow}</span>
          </nav>
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary-glow bg-primary/10 px-3 py-1 rounded-full mb-5">
            {eyebrow}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance leading-[1.05]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>{children}</main>
      <CTA />
      <Footer />
    </div>
  );
}
