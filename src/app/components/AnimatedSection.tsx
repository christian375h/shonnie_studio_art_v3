"use client";

import { motion } from "framer-motion";

// This is a reusable component that animates its children.
// It applies a "slide up" and "fade in" effect as it enters the viewport.
export const AnimatedSection = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start invisible and 50px down
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
      viewport={{ once: true }} // Only animate once
      transition={{ duration: 0.6, ease: "easeOut" }} // Animation timing
    >
      {children}
    </motion.div>
  );
};
