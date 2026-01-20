import { type Product } from "./product.data.ts";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  product: Product;
  isOpen: boolean;
  onToggle: () => void;
};

export default function ProductAccordion({ product, isOpen, onToggle }: Props) {
  return (
    <div className="w-full border-y border-[#9FB8A8]/30 px-4">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <h2 className="text-lg tracking-wide text-[#D6F2C2]">{product.name}</h2>
        <span className="text-2xl text-[#D6F2C2]">{isOpen ? "−" : "+"}</span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="grid grid-cols-1 gap-8 pb-10 md:grid-cols-2 w-full max-w-2xl mx-auto"
            >
              {/* LEFT */}
              <div className="space-y-6 text-sm text-[#D6F2C2]/80">
                <div>
                  <p className="text-lg uppercase tracking-wide opacity-60">
                    Origin
                  </p>
                  <p>{product.origin}</p>
                </div>

                <div>
                  <p className="text-lg uppercase tracking-wide opacity-60">
                    Good For
                  </p>
                  <p>{product.goodFor}</p>
                </div>

                <div>
                  <p className="text-lg uppercase tracking-wide opacity-60">
                    Taste Notes
                  </p>
                  <p>{product.tasteNotes}</p>
                </div>

                <button className="mt-4 w-fit rounded-full bg-[#D6F2C2] px-6 py-3 text-xs font-medium uppercase tracking-wide text-black">
                  Shop now
                </button>
              </div>

              {/* RIGHT */}
              <div className="flex justify-center md:justify-end">
                <div className="aspect-3/4 w-full max-w-100 overflow-hidden rounded-2xl bg-black/10">
                  <img
                    src={product.imageSide}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
