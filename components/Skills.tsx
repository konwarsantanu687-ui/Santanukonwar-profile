"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "Next.js", level: "90%" },
  { name: "UI Design", level: "85%" },
  { name: "Animations", level: "88%" },
];

export default function Skills() {
  return (
    <section className="min-h-screen px-20 py-32">
      <h2 className="text-4xl mb-12">Skills</h2>

      {skills.map((skill, i) => (
        <div key={i} className="mb-8">
          <p>{skill.name}</p>
          <div className="w-full h-2 bg-gray-800 rounded">
            <motion.div
              whileInView={{ width: skill.level }}
              initial={{ width: 0 }}
              transition={{ duration: 1 }}
              className="h-2 bg-cyan-400 rounded"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
