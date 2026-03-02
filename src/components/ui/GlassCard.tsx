"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const GlassCard = ({ children, className, hoverEffect = true }: GlassCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(
                "glass p-6 rounded-xl relative overflow-hidden group",
                hoverEffect && "glass-hover",
                className
            )}
        >
            <div className="relative z-10">{children}</div>

            {/* Subtle corner accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-accent-blue/5 rounded-bl-3xl blur-2xl group-hover:bg-accent-blue/10 transition-colors" />
        </motion.div>
    );
};
