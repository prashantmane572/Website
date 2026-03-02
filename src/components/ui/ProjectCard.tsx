"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowUpRight, BarChart, Database, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectCardProps {
    id: string;
    title: string;
    summary: string;
    tools: string[];
    industry: string;
    image?: string;
    impact?: string | string[];
}

export const ProjectCard = ({ id, title, summary, tools, industry, impact }: ProjectCardProps) => {
    return (
        <GlassCard className="h-full group/card p-0 overflow-hidden flex flex-col" hoverEffect>
            {/* Mock Dashboard Preview Header */}
            <div className="w-full h-48 bg-slate-900 border-b border-white/5 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 grid-overlay opacity-30" />
                <div className="p-4 w-full h-full flex flex-col justify-between relative z-10">
                    <div className="flex justify-between items-start">
                        <div className="flex space-x-1">
                            <div className="w-2 h-2 rounded-full bg-red-500/50" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                            <div className="w-2 h-2 rounded-full bg-green-500/50" />
                        </div>
                        <div className="p-1 px-2 rounded-md bg-white/5 border border-white/10 text-[10px] text-white/50 font-mono">
                            LIVE_REPORT.BI
                        </div>
                    </div>

                    {/* Abstract Data Viz */}
                    <div className="flex items-end space-x-1 h-20 opacity-40 group-hover/card:opacity-60 transition-opacity">
                        {[40, 70, 45, 90, 65, 80, 50, 95, 30, 60].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                className="flex-1 bg-accent-blue rounded-t-sm"
                            />
                        ))}
                    </div>
                </div>

                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent group-hover/card:opacity-0 transition-opacity" />
            </div>

            <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-accent-blue py-1 px-2 bg-accent-blue/10 rounded border border-accent-blue/20">
                        {industry}
                    </span>
                    <Link href={`/projects/${id}`} className="text-slate-400 hover:text-accent-blue transition-colors">
                        <ArrowUpRight className="w-5 h-5" />
                    </Link>
                </div>

                <Link href={`/projects/${id}`} className="block group/title">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover/title:text-accent-blue transition-colors">
                        {title}
                    </h3>
                </Link>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {summary}
                </p>

                <div className="mt-auto pt-6 border-t border-white/5 flex flex-col space-y-4">
                    <div className="flex flex-wrap gap-2">
                        {tools.map(tool => (
                            <span key={tool} className="text-[10px] font-mono text-slate-500 bg-white/5 px-2 py-1 rounded border border-white/10">
                                {tool}
                            </span>
                        ))}
                    </div>

                    {impact && (
                        <div className="flex items-center space-x-2 text-xs font-semibold text-accent-yellow">
                            <TrendingUp className="w-3 h-3" />
                            <span>
                                {Array.isArray(impact) ? impact[0] : impact}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </GlassCard>
    );
};

const TrendingUp = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
);
