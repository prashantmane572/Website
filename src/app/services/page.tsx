"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { services } from "@/lib/data";
import { Navbar } from "@/components/sections/Navbar";
import Link from "next/link";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background pb-20">
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 pt-32">
                <Link href="/#services" className="inline-flex items-center space-x-2 text-slate-400 hover:text-white transition-colors mb-8 group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Home</span>
                </Link>

                <div className="flex flex-col space-y-4 mb-12">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
                        Consultancy <span className="glow-text tracking-tight italic">Service Catalog</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
                        Professional Business Intelligence and Data Architecture engagement models.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <GlassCard key={idx} className="flex flex-col h-full group cursor-default" hoverEffect>
                            <div className="w-12 h-12 bg-accent-blue/10 border border-accent-blue/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-blue/20 transition-colors">
                                <service.icon className="w-6 h-6 text-accent-blue" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                                {service.description}
                            </p>

                            <ul className="space-y-3 pt-6 border-t border-white/5">
                                {service.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-center space-x-2 text-xs text-slate-300">
                                        <CheckCircle2 className="w-3 h-3 text-accent-blue" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link href="/#contact" className="mt-8 py-3 bg-accent-blue text-white rounded-lg text-center text-sm font-bold hover:bg-accent-blue/90 transition-all">
                                Inquire for Engagement
                            </Link>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </main>
    );
}
