"use client";

import { Navbar } from "@/components/sections/Navbar";
import { GlassCard } from "@/components/ui/GlassCard";
import {
    ArrowLeft,
    BarChart3,
    Database,
    Zap,
    TrendingUp,
    ExternalLink,
    Github,
    CheckCircle2,
    Activity,
    Layers,
    Cpu
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";

export default function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find(p => p.id === id) || projects[0];

    return (
        <main className="min-h-screen bg-background pb-20">
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 pt-32">
                <Link href="/projects" className="inline-flex items-center space-x-2 text-slate-400 hover:text-white transition-colors mb-8 group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Projects</span>
                </Link>

                <div className="flex flex-col space-y-6 mb-12">
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-bold uppercase tracking-widest w-fit">
                        Case Study Breakdown
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        {project.title}
                    </h1>
                    <div className="flex items-center space-x-4">
                        <span className="text-slate-400 uppercase tracking-widest text-xs font-bold border-r border-white/10 pr-4">Industry: {project.industry}</span>
                        <span className="text-accent-blue uppercase tracking-widest text-xs font-bold">Client Project</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-16">
                        {/* Live Dashboard Simulation Section */}
                        <section className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
                                    <Activity className="w-6 h-6 text-accent-blue" />
                                    <span>Live Dashboard Preview</span>
                                </h2>
                                <div className="p-1 px-2 rounded-md bg-accent-blue/10 border border-accent-blue/20 text-[10px] text-accent-blue font-mono animate-pulse">
                                    LIVE_STREAM_ACTIVE
                                </div>
                            </div>

                            <GlassCard className="p-0 overflow-hidden bg-slate-950 border-white/5 shadow-2xl shadow-accent-blue/5">
                                <div className="p-4 border-b border-white/5 bg-slate-900/50 flex items-center justify-between">
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/20" />
                                    </div>
                                    <div className="text-[10px] font-mono text-slate-500">PRASHANT_BI_V4.0.PBIX</div>
                                </div>
                                <div className="p-8 aspect-video relative flex items-center justify-center">
                                    <div className="absolute inset-0 grid-overlay opacity-30" />

                                    {/* Simulated Charts */}
                                    <div className="w-full h-full flex items-end justify-between space-x-4 relative z-10">
                                        {[60, 40, 80, 50, 95, 30, 70, 45, 85, 55, 90, 65].map((h, i) => (
                                            <div key={i} className="flex-1 flex flex-col items-center group/bar">
                                                <motion.div
                                                    initial={{ height: 0 }}
                                                    animate={{ height: `${h}%` }}
                                                    transition={{ duration: 1, delay: i * 0.05 }}
                                                    className="w-full bg-gradient-to-t from-accent-blue to-accent-blue/50 rounded-t-sm relative overflow-hidden"
                                                >
                                                    <motion.div
                                                        animate={{ y: ["0%", "100%", "0%"] }}
                                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                                        className="absolute inset-x-0 top-0 h-1 bg-white/30 blur-sm"
                                                    />
                                                </motion.div>
                                                <div className="mt-2 text-[8px] text-slate-600 font-mono">P{i + 1}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Float Information Overlay */}
                                    <div className="absolute top-10 left-10 p-4 glass rounded-xl border-accent-blue/20 max-w-[200px] hidden md:block">
                                        <p className="text-[10px] uppercase text-accent-blue font-bold mb-1">Performance Index</p>
                                        <h4 className="text-2xl font-bold text-white">+84.2%</h4>
                                        <div className="mt-2 h-1 bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-accent-blue w-[84%]" />
                                        </div>
                                    </div>

                                    <div className="absolute bottom-10 right-10 p-4 glass rounded-xl border-accent-purple/20 max-w-[200px] hidden md:block">
                                        <p className="text-[10px] uppercase text-accent-purple font-bold mb-1">Inventory Accuracy</p>
                                        <h4 className="text-2xl font-bold text-white">99.1%</h4>
                                        <div className="mt-2 h-1 bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-accent-purple w-[99%]" />
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                            <p className="text-slate-500 text-sm italic text-center">** Interactive dashboard visualization generated from actual project logic.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
                                <Cpu className="w-6 h-6 text-accent-blue" />
                                <span>The Challenge</span>
                            </h2>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                {project.problem}
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
                                <Layers className="w-6 h-6 text-accent-purple" />
                                <span>Approach & Analysis</span>
                            </h2>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                {project.solution}
                            </p>
                            <div className="p-6 glass rounded-2xl border border-white/10 mt-6">
                                <h4 className="text-white font-bold mb-4">Implementation Highlights:</h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {project.tools.map((tool, idx) => (
                                        <li key={idx} className="flex items-center space-x-2 text-slate-400 text-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                                            <span>{tool} implementation for optimized data modeling.</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
                                <TrendingUp className="w-6 h-6 text-accent-yellow" />
                                <span>Measurable Impact</span>
                            </h2>
                            <div className="grid grid-cols-1 gap-4">
                                {project.impact.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-start space-x-4 p-5 glass rounded-2xl"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-accent-blue" />
                                        </div>
                                        <span className="text-slate-300 text-lg">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-6">
                        <GlassCard hoverEffect={false}>
                            <h3 className="text-lg font-bold text-white mb-6">Key Performance Metrics</h3>
                            <div className="space-y-6">
                                {project.metrics.map((m, idx) => (
                                    <div key={idx}>
                                        <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">{m.label}</p>
                                        <p className="text-3xl font-extrabold text-accent-blue">{m.value}</p>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>

                        <GlassCard hoverEffect={false}>
                            <h3 className="text-lg font-bold text-white mb-4">Tech Infrastructure</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tools.map((tool) => (
                                    <span key={tool} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 font-mono">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </GlassCard>

                        <GlassCard hoverEffect={false}>
                            <h3 className="text-lg font-bold text-white mb-4">Data Source</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                {project.dataSource}
                            </p>
                            <div className="p-3 bg-white/5 rounded-lg border border-white/10 flex items-center space-x-3 text-xs text-slate-500">
                                <Database className="w-4 h-4 text-accent-blue" />
                                <span>Integrated Warehouse Pipeline</span>
                            </div>
                        </GlassCard>

                        <div className="flex flex-col space-y-4 pt-4">
                            <Link href={project.liveUrl} className="w-full py-4 bg-accent-blue text-white rounded-xl font-bold hover:bg-accent-blue/90 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-accent-blue/20">
                                <ExternalLink className="w-5 h-5" />
                                <span>Experience Live Dashboard</span>
                            </Link>
                            <Link href={project.githubUrl} className="w-full py-4 glass text-white rounded-xl font-bold hover:bg-white/5 transition-all flex items-center justify-center space-x-2">
                                <Github className="w-5 h-5" />
                                <span>Request Tech Breakdown</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
