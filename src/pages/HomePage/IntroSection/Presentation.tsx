import { motion } from "framer-motion";

export default function Presentation() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="mx-auto max-w-6xl px-4 py-12 md:py-20"
    >
      <div className="flex flex-col gap-12 md:flex-row md:items-stretch md:gap-20">
        {/* LEFT */}
        <div className="flex flex-col justify-between gap-10 md:w-[45%]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">
              Specialty / Sustainable
            </p>

            <h1 className="mt-4 text-[44px] leading-[0.95] tracking-tight uppercase md:text-[60px]">
              Coffee <br />
              Curations
            </h1>

            <p className="mt-6 max-w-sm text-base leading-7 text-foreground/70">
              This is a space to welcome visitors to the site. Grab their
              attention with copy that clearly states what the site is about,
              and add an engaging image or video.
            </p>

            <button className="group mt-10 inline-flex items-center gap-3 border-b border-foreground/30 pb-2 text-sm tracking-wide uppercase w-fit hover:border-foreground/70">
              Discover more
              <span
                className="transition-transform group-hover:translate-x-1"
                aria-hidden
              >
                →
              </span>
            </button>
          </div>

          <div className="w-full max-w-md aspect-square">
            <img
              src="/coffee-cup.avif"
              alt=""
              className="h-full w-full rounded-4xl object-cover shadow-sm"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex-1 overflow-hidden rounded-[36px] bg-muted aspect-3/4 md:aspect-auto md:min-h-140">
          <img
            src="/beans-package-2nd-fold.avif"
            alt="Coffee bag"
            className="h-full w-full object-cover"
          />

          {/* subtle overlay to make it feel editorial */}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/15 via-transparent to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}
