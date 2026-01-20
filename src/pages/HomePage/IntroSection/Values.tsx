import OrganicMarqueeSlide from "./OrganicMarqueeSlide";
import { motion } from "framer-motion";

export default function Values() {
  return (
    <motion.div
      className="bg-green-200/60"
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }} // triggers when 25% visible
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          {/* LEFT IMAGE */}
          <div className="w-full max-w-65 lg:max-w-60">
            <div className="rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5">
              <img
                src="/beans-nature.avif"
                alt=""
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="flex-1">
            <p className="mx-auto max-w-2xl text-center text-[30px] md:text-[38px] leading-[1.05] tracking-tight">
              Our coffee, team, farmers and planet are at our core. Each cup
              reflects our commitment to quality and sustainability.
            </p>

            {/* small supporting line makes it feel designed */}
            <p className="mt-4 text-center text-sm text-foreground/70">
              Quality beans. Responsible sourcing. Better everyday rituals.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full max-w-65 lg:max-w-60 lg:translate-y-6">
            <div className="rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5">
              <img
                src="/coffee-cup-top-view.avif"
                alt=""
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <OrganicMarqueeSlide />
      </div>
    </motion.div>
  );
}
