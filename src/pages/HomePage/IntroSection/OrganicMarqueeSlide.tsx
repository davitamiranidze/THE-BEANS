import { motion } from "framer-motion";

export default function OrganicMarqueeSlide() {
  const items = Array.from({ length: 8 }, () => "100% ORGANIC");

  return (
    <div className="w-full overflow-hidden bg-[#0b2b22] py-3">
      <motion.div
        className="flex w-max items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, ease: "linear", repeat: Infinity }}
      >
        {/* copy 1 */}
        <div className="flex items-center gap-8 px-4 whitespace-nowrap">
          {items.map((text, i) => (
            <span
              key={`a-${i}`}
              className="flex items-center gap-3 text-[#b8f0b0] font-semibold uppercase"
            >
              <span className="text-lg">✳</span>
              {text}
            </span>
          ))}
        </div>

        {/* copy 2 */}
        <div
          className="flex items-center gap-8 px-4 whitespace-nowrap"
          aria-hidden="true"
        >
          {items.map((text, i) => (
            <span
              key={`b-${i}`}
              className="flex items-center gap-3 text-[#b8f0b0] font-semibold uppercase"
            >
              <span className="text-lg">✳</span>
              {text}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
