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
        <div ref={ref} className={cn("glass p-5 rounded-xl border-l-4 border-l-accent-blue glass-hover", className)}>
            <div className="flex justify-between items-start mb-2">
                <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">{label}</span>
                <Icon className="w-5 h-5 text-accent-blue/70" />
            </div>
            <div className="flex items-baseline space-x-1">
                <span className="text-2xl font-bold text-white">
                    {prefix}
                    <motion.span>{displayValue}</motion.span>
                    {suffix}
                </span>
            </div>
            {description && <p className="text-slate-500 text-xs mt-2">{description}</p>}
        </div>
    );
};
