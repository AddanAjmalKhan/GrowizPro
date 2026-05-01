import { motion } from "framer-motion";

const badges = [
  "Top Content Writing Services 2025",
  "Top SOP Writing Company 2025",
  "Top Lead Generation Company 2025",
  "Ranked B2B Lead Gen — USA",
  "G2 High Performer",
  "Clutch Top Rated",
];

export function TrustBar() {
  return (
    <section className="py-12 border-y border-border/60 bg-secondary/40">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-6">
          Ranked among the Top B2B Lead Generation Companies in the USA
        </p>
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5">
          {badges.map((b, i) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-4 py-2 rounded-full glass border border-border/60 text-xs md:text-sm font-medium text-foreground/80 shadow-soft"
            >
              {b}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
