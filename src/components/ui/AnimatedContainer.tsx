import { motion } from "framer-motion";
import type { ReactNode } from "react";

type AnimatedContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function AnimatedContainer({
  children,
  className = "",
}: AnimatedContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}