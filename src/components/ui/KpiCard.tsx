"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface KpiCardProps {
    label: string;
    value: number;
    suffix?: string;
    prefix?: string;
    icon: LucideIcon;
    description?: string;
    className?: string;
}

export const KpiCard = ({ label, value, suffix = "", prefix = "", icon: Icon, description, className }: KpiCardProps) => {
    const { ref, inView } = useInView({ triggerOnce: true });

    const springValue = useSpring(0, {
        stiffness: 40,
        damping: 20,
        restDelta: 0.001
    });

    const displayValue = useTransform(springValue, (latest) => {
        return Math.floor(latest).toLocaleString();
    });

    useEffect(() => {
        if (inView) {
            springValue.set(value);
        }
    }, [inView, value, springValue]);

    return (
        <div
            ref={ref}
            className={cn(
                "glass p-5 rounded-xl border-l-4 border-l-accent-blue glass-hover relative overflow-hidden",
                inView && "animate-pulse-border shadow-[0_0_20px_rgba(0,242,255,0.15)]",
                className
            )}
        >
            {/* Subtle internal scan line */}
            <div className="absolute inset-x-0 h-px bg-accent-blue/20 top-0 left-0 animate-scan pointer-events-none" />

            <div className="flex justify-between items-start mb-2 relative z-10">
                <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">{label}</span>
                <Icon className="w-5 h-5 text-accent-blue/70" />
            </div>
            <div className="flex items-baseline space-x-1 relative z-10">
                <span className="text-2xl font-bold text-white">
                    {prefix}
                    <motion.span
                        key={inView ? 'view' : 'hide'}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        {displayValue}
                    </motion.span>
                    {suffix}
                </span>
            </div>
            {description && <p className="text-slate-500 text-xs mt-2 relative z-10">{description}</p>}
        </div>
    );
};
