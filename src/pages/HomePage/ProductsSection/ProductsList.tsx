import ProductAccordion from "./ProductAccordion.tsx";
import { Products } from "./product.data.ts";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ProductsList() {
  const [openId, setOpenId] = useState<number | null>(null);
  return (
    <div className="bg-[#17352E]">
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }} // triggers when 25% visible
        className="mx-auto max-w-6xl px-4 py-12 text-[#D6F2C2] md:py-20"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h1 className="mb-10 text-4xl tracking-wide md:text-5xl">
              COFFEE COLLECTION
            </h1>
            <p className="max-w-md text-sm leading-6 text-[#D6F2C2]/80">
              This is a space to welcome visitors to the site. Grab their
              attention with copy that clearly states what the site is about,
              and add an engaging image or video.
            </p>
          </div>

          <div className="flex items-center justify-center md:justify-end">
            <button className="rounded-full bg-[#D6F2C2] px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]">
              Discover more
            </button>
          </div>
        </div>
      </motion.div>
      {Products.map((product) => (
        <ProductAccordion
          key={product.id}
          isOpen={openId === product.id}
          product={product}
          onToggle={() =>
            setOpenId((prev) => (prev === product.id ? null : product.id))
          }
        />
      ))}
    </div>
  );
}
