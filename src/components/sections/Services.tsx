"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export const Services = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="services" className="pt-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0"
            >
                <div className="flex flex-col space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        Freelance <span className="glow-text tracking-tight italic">BI & Analytics Services</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl leading-relaxed">
                        Professional data solutions tailored for Retail, Manufacturing, and FMCG industries.
                    </p>
                </div>
                <Link
                    href="/services"
                    className="group flex items-center space-x-2 text-accent-blue font-bold hover:text-accent-blue/80 transition-colors"
                >
                    <span>More Services</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {services.slice(0, 3).map((service, idx) => (
                    <motion.div key={idx} variants={itemVariants}>
                        <GlassCard className="flex flex-col h-full group cursor-default" hoverEffect>
                            <div className="w-12 h-12 bg-accent-blue/15 border border-accent-blue/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-blue/25 transition-all duration-500 shadow-[0_0_15px_rgba(0,242,255,0.1)]">
                                <service.icon className="w-6 h-6 text-accent-blue" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                                {service.description}
                            </p>

                            <ul className="space-y-3 pt-6 border-t border-card-border">
                                {service.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-center space-x-2 text-xs text-slate-300">
                                        <CheckCircle2 className="w-3 h-3 text-accent-blue" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mt-12 p-8 glass rounded-2xl flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 blur-[100px] rounded-full -z-10" />
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Need a Custom Analytics Solution?</h3>
                    <p className="text-slate-400">Project-based, retainer, or maintenance plans available.</p>
                </div>
                <button className="px-8 py-4 bg-accent-blue text-white rounded-xl font-bold hover:bg-accent-blue/90 transition-all shadow-xl shadow-accent-blue/20 whitespace-nowrap">
                    Schedule a Consultation
                </button>
            </motion.div>
        </section>
    );
};
