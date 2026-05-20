"use client";

import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
  dark?: boolean;
}

export default function FeatureCard({
  icon,
  title,
  description,
  index = 0,
  dark = false,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`p-6 rounded-2xl ${
        dark
          ? "bg-white/5 border border-white/10 hover:bg-white/8 transition-colors"
          : "bg-gray-50 border border-gray-100 hover:border-brand-blue/20 transition-colors"
      }`}
    >
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
          dark ? "bg-brand-green/15" : "bg-brand-blue/10"
        }`}
      >
        {icon}
      </div>
      <h3
        className={`font-heading font-semibold mb-2 ${
          dark ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h3>
      <p className={`text-sm leading-relaxed ${dark ? "text-gray-400" : "text-gray-500"}`}>
        {description}
      </p>
    </motion.div>
  );
}
