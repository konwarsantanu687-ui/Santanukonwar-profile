"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen flex items-center px-20">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-semibold mb-6">About Me</h2>
        <p className="text-gray-400 max-w-2xl">
          I build modern web experiences with smooth animations and clean UI.
          Passionate about creating startup-level products and interactive websites.
        </p>
      </motion.div>
    </section>
  );
}
