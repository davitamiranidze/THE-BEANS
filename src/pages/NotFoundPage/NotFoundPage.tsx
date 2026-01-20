import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="mt-20 mb-20 flex items-center justify-center bg-muted px-4"
    >
      <div className="rounded-2xl p-8 text-center shadow-sm flex flex-col gap-5">
        <h1 className="text-6xl font-bold tracking-tight">404</h1>

        <p className="mt-3 text-foreground/70">
          Sorry, the page you’re looking for doesn’t exist.
        </p>

        <Link to="/" className="rounded-full bg-black text-white p-4">
          Go home
        </Link>
      </div>
    </motion.div>
  );
}
