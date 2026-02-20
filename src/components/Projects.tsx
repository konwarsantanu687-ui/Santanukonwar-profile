"use client";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="min-h-screen px-20 py-32">
      <h2 className="text-4xl mb-12">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {[1,2,3].map((p)=>(
          <motion.div
            key={p}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10"
          >
            <h3 className="text-xl font-semibold">Project {p}</h3>
            <p className="text-gray-400 mt-2">
              Modern animated web project
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
