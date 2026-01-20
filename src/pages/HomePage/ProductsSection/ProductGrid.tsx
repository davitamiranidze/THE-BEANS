import { ProductCard } from "./ProductCard";
import { motion } from "framer-motion";
import { Products } from "./product.data";

export default function ProductGrid() {
  return (
    <div>
      <div className="w-full max-w-7xl mx-auto py-10 px-4">
        <h1 className="mb-8 text-4xl  md:text-5xl tracking-wide">Top Picks</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Products.map((product) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group"
              key={product.id}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
