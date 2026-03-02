"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Award, Download, Linkedin, GraduationCap, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const timeline = [
    {
        period: "Current",
        role: "Functional Consultant (Data & BI)",
        company: "Freelance / Consultancy",
        desc: "Helping SMEs optimize their ERP data through advanced Power BI solutions."
    },
    {
        period: "Past",
        role: "Business Analyst",
        company: "Retail / Food Industry",
        desc: "Bridged the gap between operations and management through data-driven reporting."
    },
    {
        period: "Earlier",
        role: "Retail Merchandiser",
        company: "Garment Industry",
        desc: "Managed inventory and sales cycles, laying the foundation for domain expertise in retail analytics."
    }
];

export const About = () => {
    return (
        <section id="about" className="pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left: Content */}
                <div className="lg:col-span-7 space-y-8">
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                            From ERP Operations to <br />
                            <span className="glow-text tracking-tight italic">Business Intelligence</span>
                        </h2>
                    </div>

                    <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
                        <p>
                            With over 8 years of professional experience, my journey has evolved from the
                            ground-up operations in Retail and Garment Merchandising to high-level Business Intelligence consultancy.
                        </p>
                        <p>
                            This unique domain expertise gives me a "data-first" problem-solving mindset.
                            I don't just build dashboards; I build solutions that address real business
                            pain points like inventory accuracy, OTD delays, and reporting inefficiencies.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="px-6 py-3 bg-white text-black rounded-lg font-bold hover:bg-slate-200 transition-all flex items-center space-x-2">
                            <Download className="w-4 h-4" />
                            <span>Download Resume</span>
                        </button>
                        <a href="#" className="flex items-center space-x-2 px-6 py-3 glass rounded-lg text-slate-300 hover:text-white transition-all">
                            <Linkedin className="w-5 h-5 text-[#0077b5]" />
                            <span>LinkedIn</span>
                        </a>
                    </div>

                    {/* Certifications Snapshot */}
                    <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 glass rounded-xl border-l-4 border-accent-blue flex items-center space-x-4">
                            <Award className="w-10 h-10 text-accent-blue" />
                            <div>
                                <h4 className="text-white font-bold">PL-300</h4>
                                <p className="text-xs text-slate-500">In Progress (Microsoft Certified)</p>
                            </div>
                        </div>
                        <div className="p-4 glass rounded-xl border-l-4 border-accent-purple flex items-center space-x-4">
                            <GraduationCap className="w-10 h-10 text-accent-purple" />
                            <div>
                                <h4 className="text-white font-bold">ERP Specialist</h4>
                                <p className="text-xs text-slate-500">SAP Business One & HANA</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Timeline */}
                <div className="lg:col-span-5 relative">
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-purple to-transparent opacity-20" />

                    <div className="space-y-12">
                        {timeline.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                className="relative pl-14"
                            >
                                <div className="absolute left-5 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-blue ring-4 ring-accent-blue/20" />
                                <span className="inline-block px-2 py-0.5 rounded bg-accent-blue/10 text-accent-blue text-[10px] font-bold uppercase tracking-widest mb-1">
                                    {item.period}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
                                <p className="text-accent-purple font-semibold text-sm mb-3 flex items-center space-x-1">
                                    <Briefcase className="w-3 h-3" />
                                    <span>{item.company}</span>
                                </p>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
