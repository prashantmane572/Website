"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { DataStreamBackground } from "@/components/ui/DataStreamBackground";
import { GlassCard } from "@/components/ui/GlassCard";
import { KpiCard } from "@/components/ui/KpiCard";
import {
    BarChart3,
    Clock,
    Zap,
    Target,
    BookOpen,
    Compass,
    CheckCircle2,
    Database,
    LineChart,
    Search,
    ShieldCheck,
    Cpu
} from "lucide-react";

const services = [
    { title: "Power BI Dashboard Development", icon: BarChart3 },
    { title: "SQL Data Analysis & Reporting", icon: Database },
    { title: "Business Intelligence Consulting", icon: Zap },
    { title: "Data Cleaning & Transformation", icon: Search },
    { title: "KPI & Performance Analytics", icon: LineChart },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background selection:bg-accent-blue/30 text-white">
            <Navbar />

            {/* Background Layer */}
            <div className="fixed inset-0 grid-overlay -z-10" />
            <DataStreamBackground />

            <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 md:px-12">
                {/* About Hero Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-bold uppercase tracking-widest mb-6">
                        <Cpu className="w-4 h-4" />
                        <span>Professional Profile</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-8 italic uppercase tracking-tighter max-w-4xl">
                        Unlocking Value <br />
                        <span className="glow-text">Hidden in Data</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed font-light italic">
                        "Transforming complex business data into clear, actionable insights through interactive dashboards and data analytics solutions."
                    </p>
                </motion.div>

                {/* Core Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    <KpiCard
                        label="BI Experience"
                        value={3}
                        suffix="+"
                        icon={BarChart3}
                        description="Years in BI & Power BI"
                    />
                    <KpiCard
                        label="Professional Exp"
                        value={8}
                        suffix="+"
                        icon={Clock}
                        description="Years across Industries"
                    />
                    <KpiCard
                        label="ERP Integration"
                        value={95}
                        suffix="%"
                        icon={ShieldCheck}
                        description="Specialized in SAP HANA"
                    />
                    <KpiCard
                        label="Efficiency"
                        value={15}
                        suffix="%"
                        icon={Zap}
                        description="Avg. Operational Gain"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
                    {/* Left Narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 space-y-8 text-lg text-slate-400 leading-relaxed"
                    >
                        <p>
                            With <span className="text-white font-bold">3+ years of experience</span> in Power BI and data analytics and <span className="text-white font-bold">8+ years of professional experience</span>, I help businesses unlock the value hidden in their data by building powerful BI dashboards and analytical reports.
                        </p>
                        <p>
                            I specialize in working with <span className="text-accent-blue font-semibold italic">Power BI, SQL, SAP HANA, Excel, and Python</span> to create scalable reporting systems that enable organizations to monitor performance, identify trends, and make data-driven decisions.
                        </p>

                        <div className="pt-12">
                            <h2 className="text-2xl font-bold text-white uppercase italic tracking-widest mb-10 flex items-center space-x-4">
                                <span className="w-8 h-[2px] bg-accent-blue" />
                                <span>Services I Offer</span>
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {services.map((service, idx) => (
                                    <div key={idx} className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent-blue/30 transition-all group">
                                        <service.icon className="w-5 h-5 text-accent-blue group-hover:scale-110 transition-transform" />
                                        <span className="text-sm font-medium text-slate-300">{service.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Philosophy Cards */}
                    <div className="lg:col-span-5 space-y-6">
                        <GlassCard className="p-8 border-accent-blue/20" hoverEffect>
                            <Target className="w-10 h-10 text-accent-blue mb-4" />
                            <h3 className="text-xl font-bold text-white mb-4 uppercase italic tracking-tighter">My Approach</h3>
                            <ul className="space-y-3">
                                {[
                                    "Simple to understand",
                                    "Reliable and accurate",
                                    "Designed for business users",
                                    "Focused on solving real problems"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-3 text-slate-400 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-accent-blue flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-6 text-sm text-slate-500 italic">
                                "Rather than just building dashboards, my goal is to create analytics systems that empower organizations to make confident decisions."
                            </p>
                        </GlassCard>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="p-8 rounded-2xl bg-gradient-to-br from-accent-purple/10 to-transparent border border-white/5"
                        >
                            <Zap className="w-8 h-8 text-accent-purple mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2 uppercase italic">What Drives Me</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                I enjoy working with data because it allows me to uncover patterns and insights that help businesses operate more efficiently.
                                My motivation comes from finding answers to critical questions like SKU performance, operational delays, and inventory planning.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* The Journey Section */}
                <div className="mb-32">
                    <div className="flex items-center space-x-4 mb-16">
                        <h2 className="text-3xl font-black uppercase tracking-tighter italic">My Journey into <span className="text-accent-blue">Data Analytics</span></h2>
                        <div className="h-px flex-1 bg-gradient-to-r from-accent-blue/50 to-transparent" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 hidden md:block -z-10" />

                        {[
                            {
                                stage: "Retail Industry Roots",
                                icon: BookOpen,
                                content: "My journey started in retail and merchandising, where I managed sales, inventory, and operational data daily across multiple channels."
                            },
                            {
                                stage: "The Data Realization",
                                icon: Compass,
                                content: "I realized that businesses generate massive data but struggle to convert it into insights. This spark led me to learn advanced BI tools."
                            },
                            {
                                stage: "Specialization",
                                icon: LineChart,
                                content: "After a Post-Graduate Program in Data Analytics, mastering SQL and visualization, I now focus on building data-driven systems."
                            }
                        ].map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                viewport={{ once: true }}
                                className="relative bg-background p-8 rounded-2xl border border-white/10 hover:border-accent-blue/40 transition-all group"
                            >
                                <div className="absolute -top-6 left-8 w-12 h-12 bg-accent-blue rounded-xl flex items-center justify-center text-black font-bold group-hover:scale-110 transition-transform shadow-lg shadow-accent-blue/20">
                                    <step.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-4 mt-6 text-white uppercase italic">{step.stage}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{step.content}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Final Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-12 rounded-[2rem] bg-accent-blue/10 border border-accent-blue/30 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 blur-[100px] -z-10" />

                    <h2 className="text-3xl md:text-5xl font-bold mb-8 italic uppercase tracking-tighter">Let's Build Data-Driven <span className="text-accent-blue">Solutions</span></h2>
                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-light">
                        If you're looking for someone who can help transform your business data into meaningful insights through Power BI, SQL, and BI systems, I would be happy to collaborate.
                    </p>
                    <motion.a
                        href="/#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex px-12 py-5 bg-white text-black font-black uppercase tracking-widest rounded-xl hover:bg-accent-blue hover:text-white transition-all shadow-[0_0_40px_rgba(0,242,255,0.2)]"
                    >
                        Start a Collaboration
                    </motion.a>
                </motion.div>
            </div>
        </main>
    );
}
