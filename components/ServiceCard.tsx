"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  index?: number;
}

export default function ServiceCard({ icon, title, description, href, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={href}
        className="group flex flex-col h-full p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-blue/20 transition-all duration-300 hover:-translate-y-1"
      >
        <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-5 group-hover:bg-brand-blue/20 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1">{description}</p>
        <div className="flex items-center gap-2 mt-5 text-sm font-semibold text-brand-blue group-hover:gap-3 transition-all">
          Learn More <ArrowRight className="w-4 h-4" />
        </div>
      </Link>
    </motion.div>
  );
}
