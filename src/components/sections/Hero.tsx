"use client";

import { motion } from "framer-motion";
import { KpiCard } from "@/components/ui/KpiCard";
import {
    BarChart3,
    Clock,
    TrendingUp,
    ShieldCheck,
    ArrowRight
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { heroSkills } from "@/lib/data";
import { DataStreamBackground } from "@/components/ui/DataStreamBackground";

export const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="home" className="relative min-h-screen pt-24 pb-12 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 grid-overlay -z-10" />
            <DataStreamBackground />

            {/* Animated Scanline Overlay - Intensified for black theme */}
            <div className="absolute inset-x-0 h-1/2 bg-gradient-to-b from-accent-blue/10 to-transparent top-0 -z-10 animate-scan pointer-events-none opacity-40" />

            <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent-blue/15 blur-[140px] rounded-full -z-10" />
            <div className="absolute top-1/2 -right-24 w-64 h-64 bg-accent-purple/15 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Content */}
                <div className="lg:col-span-12 xl:col-span-8 flex flex-col justify-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-bold uppercase tracking-widest mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue"></span>
                            </span>
                            <span>Available for Freelance Projects</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                            Transforming ERP & Business Data into <br />
                            <span className="glow-text tracking-tight italic">Powerful Insights</span>
                        </h1>

                        <p className="mt-6 text-lg text-slate-400 max-w-2xl leading-relaxed">
                            Power BI Developer | SQL Analyst | SAP HANA | Data Modeling.
                            Helping businesses reduce reporting time and optimize operations through
                            data-driven intelligence.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <button className="px-8 py-4 bg-accent-blue text-white rounded-xl font-bold hover:bg-accent-blue/90 transition-all flex items-center justify-center space-x-2 shadow-xl shadow-accent-blue/20 group">
                                <span>View Projects</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 bg-slate-800/50 text-white border border-slate-700 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center">
                                Hire Me for BI Solutions
                            </button>
                        </div>
                    </motion.div>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <KpiCard
                            label="BI Experience"
                            value={3}
                            suffix="+"
                            icon={BarChart3}
                            description="Dedicated BI Portfolio"
                        />
                        <KpiCard
                            label="Professional Exp"
                            value={8}
                            suffix="+"
                            icon={Clock}
                            description="Years of Domain Expertise"
                        />
                        <KpiCard
                            label="OTD Improvement"
                            value={15}
                            suffix="%"
                            icon={TrendingUp}
                            description="Impact Delivered"
                        />
                        <KpiCard
                            label="Reporting Time"
                            value={20}
                            suffix="%"
                            icon={ShieldCheck}
                            description="Efficiency Gains"
                        />
                    </div>
                </div>

                {/* Right Skills Snapshot (Mini Dashboard) */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="lg:col-span-12 xl:col-span-4 lg:grid lg:grid-cols-2 lg:gap-4 xl:flex xl:flex-col xl:space-y-4"
                >
                    {heroSkills.map((skill, idx) => (
                        <motion.div key={idx} variants={itemVariants}>
                            <GlassCard className="p-4" hoverEffect>
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-slate-800/50 rounded-lg group-hover:bg-accent-blue/20 transition-colors">
                                        <skill.icon className="w-6 h-6 text-accent-blue" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{skill.category}</p>
                                        <h3 className="text-lg font-bold text-white">{skill.name}</h3>
                                        <p className="text-xs text-slate-400">{skill.details}</p>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
