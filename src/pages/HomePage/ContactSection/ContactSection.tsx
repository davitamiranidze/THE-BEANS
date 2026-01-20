import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <motion.section
      className="w-full"
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }} // triggers when 25% visible
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-stretch md:gap-20">
          {/* LEFT */}
          <div className="flex flex-col justify-between gap-10 md:w-[45%]">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">
                OUR STORY
              </p>

              <h1 className="mt-4 text-[44px] leading-[0.95] tracking-tight uppercase md:text-[60px]">
                THE SPECIALTY <br />
                JOURNEY
              </h1>

              <p className="mt-6 max-w-sm text-base leading-7 text-foreground/70">
                This is the space to introduce the business and what it has to
                offer. Define the qualities and values that make it unique.
              </p>

              <button className="group mt-10 inline-flex items-center gap-3 border-b border-foreground/30 pb-2 text-sm tracking-wide uppercase w-fit hover:border-foreground/70">
                Contact Us
                <span
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden
                >
                  →
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex-1 overflow-hidden rounded-[36px] bg-muted aspect-3/4 md:aspect-auto md:min-h-140">
            <img
              src="/people-about.avif"
              alt="Coffee bag"
              className="h-full w-full object-cover"
            />

            {/* subtle overlay to make it feel editorial */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/15 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
