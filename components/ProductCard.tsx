"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  model: string;
  tagline: string;
  specs: string;
  description: string;
  highlights: string[];
  index?: number;
  accent?: "green" | "blue";
}

export default function ProductCard({
  model,
  tagline,
  specs,
  description,
  highlights,
  index = 0,
  accent = "blue",
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-heading font-bold text-gray-900">{model}</h3>
          <p className="text-sm text-gray-500 mt-0.5">{tagline}</p>
        </div>
        <div
          className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
            accent === "green"
              ? "bg-brand-green/10 text-brand-green"
              : "bg-brand-blue/10 text-brand-blue"
          }`}
        >
          In Stock
        </div>
      </div>

      {/* Specs badge */}
      <div className="mb-4 px-3 py-2 rounded-lg bg-gray-50 border border-gray-100">
        <p className="text-xs font-medium text-gray-600">{specs}</p>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed mb-5">{description}</p>

      {/* Highlights */}
      <ul className="space-y-2">
        {highlights.map((h) => (
          <li key={h} className="flex items-center gap-2 text-sm text-gray-700">
            <CheckCircle
              className={`w-4 h-4 flex-shrink-0 ${
                accent === "green" ? "text-brand-green" : "text-brand-blue"
              }`}
            />
            {h}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
