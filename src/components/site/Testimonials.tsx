import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "I am happy with the progress, the first appointment went really well, and the pipeline looks really good for the upcoming quarter. Seems like we're on the right track and there's a good ROI coming our way!",
    name: "Operations Lead",
    role: "Commercial Cleaning Services of Oklahoma",
    initials: "CC",
  },
  {
    quote:
      "Really happy with the progress so far. We've closed a lead provided by you only in the first week for $750. Looking forward to better opportunities — this will go a long way.",
    name: "Founder",
    role: "Nova Clean Solutions",
    initials: "NC",
  },
  {
    quote:
      "Great process and an excellent job of booking leads and calls. It is the best follow-through of any company we have ever worked with.",
    name: "Sales Director",
    role: "WORX",
    initials: "WX",
  },
  {
    quote:
      "Solid meetings so far with all the prospects we've conversed with. Really satisfied with the service quality and the customer service you've provided.",
    name: "Head of Sales",
    role: "REDLEGG",
    initials: "RL",
  },
  {
    quote:
      "The meetings we've had with leads have all gone really well. Safe to say you're providing high quality, warmed-up leads. Your process looks tight — hope this continues!",
    name: "CEO",
    role: "ALINCO IT",
    initials: "AI",
  },
  {
    quote:
      "As a one-man operation, GrowizPro has become my essential appointment setter. They consistently meet their targets, delivering solid weekly meetings with key decision-makers.",
    name: "Owner",
    role: "Deerfield Employment Solutions",
    initials: "DE",
  },
];

export function Testimonials() {
  return (
    <section className="py-28 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary-glow bg-primary/10 px-3 py-1 rounded-full mb-4">
            Our Happy Clients
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Loved by <span className="gradient-text">B2B revenue teams</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="relative glass rounded-2xl p-6 shadow-soft hover:shadow-card transition-all border border-border/60"
            >
              <Quote className="absolute top-5 right-5 size-8 text-primary-glow/15" />
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="size-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-sm text-foreground/90 leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3 pt-4 border-t border-border/60">
                <div className="size-10 rounded-full gradient-cta grid place-items-center text-white text-sm font-semibold shadow-soft">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
