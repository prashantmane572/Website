"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Projects } from "@/components/sections/Projects";
import { DataStreamBackground } from "@/components/ui/DataStreamBackground";
import { heroSkills } from "@/lib/data";
import { GlassCard } from "@/components/ui/GlassCard";
import { KpiCard } from "@/components/ui/KpiCard";
import {
    BarChart3,
    Clock,
    TrendingUp,
    ShieldCheck,
    Cpu,
    Target
} from "lucide-react";

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-background selection:bg-accent-blue/30 text-white">
            <Navbar />

            {/* Background Layer */}
            <div className="fixed inset-0 grid-overlay -z-10" />
            <DataStreamBackground />

            <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 md:px-12">
                {/* Portfolio Hero Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center lg:text-left"
                >
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-bold uppercase tracking-widest mb-6">
                        <Target className="w-4 h-4" />
                        <span>Professional Showcase</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 italic uppercase tracking-tighter">
                        Solution <span className="glow-text">Portfolio</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
                        A comprehensive display of BI architecture, ERP data modeling, and performance analytics.
                        Solving complex business problems with data-driven precision.
                    </p>
                </motion.div>

                {/* Professional Impact KPIs */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
                >
                    <KpiCard
                        label="BI Experience"
                        value={3}
                        suffix="+"
                        icon={BarChart3}
                        description="Years of BI Design"
                    />
                    <KpiCard
                        label="ERP Systems"
                        value={5}
                        suffix="+"
                        icon={Cpu}
                        description="Deep Integration"
                    />
                    <KpiCard
                        label="Impact Delivered"
                        value={15}
                        suffix="%"
                        icon={TrendingUp}
                        description="Efficiency Gains"
                    />
                    <KpiCard
                        label="Data Quality"
                        value={98}
                        suffix="%"
                        icon={ShieldCheck}
                        description="Accuracy Rate"
                    />
                </motion.div>

                {/* Technical Ecosystem Section */}
                <div className="mb-32">
                    <div className="flex items-center space-x-4 mb-10">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent" />
                        <h2 className="text-2xl font-bold uppercase tracking-[0.3em] text-accent-blue/80">Technical Ecosystem</h2>
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {heroSkills.map((skill, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 + idx * 0.1 }}
                            >
                                <GlassCard className="p-6 h-full" hoverEffect>
                                    <div className="flex flex-col space-y-4">
                                        <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center border border-accent-blue/20">
                                            <skill.icon className="w-6 h-6 text-accent-blue" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-accent-blue font-bold uppercase tracking-widest mb-1">{skill.category}</p>
                                            <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                                            <p className="text-sm text-slate-400">{skill.details}</p>
                                        </div>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Project Showcase Integration */}
                <div className="relative">
                    <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent-blue/20 to-transparent hidden xl:block" />
                    <Projects />
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-40 p-12 rounded-[2rem] bg-gradient-to-br from-accent-blue/10 via-background to-accent-purple/10 border border-white/10 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 blur-[100px] -z-10" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-purple/10 blur-[100px] -z-10" />

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Ready to unlock <span className="text-accent-blue">Data Intelligence?</span></h2>
                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto italic">
                        Let's discuss how customized BI solutions can transform your business operations.
                    </p>
                    <motion.a
                        href="/#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex px-10 py-5 bg-white text-black font-black uppercase tracking-tighter rounded-xl hover:bg-accent-blue hover:text-white transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                    >
                        Schedule a Consultation
                    </motion.a>
                </motion.div>
            </div>
        </main>
    );
}
