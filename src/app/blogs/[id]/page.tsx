"use client";

import { Navbar } from "@/components/sections/Navbar";
import { GlassCard } from "@/components/ui/GlassCard";
import {
    ArrowLeft,
    Calendar,
    User,
    Share2,
    Clock,
    BookOpen,
    Tag,
    ChevronRight
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { blogs } from "@/lib/data";

export default function BlogDetail() {
    const { id } = useParams();
    const blog = blogs.find(b => b.id === id) || blogs[0];

    return (
        <main className="min-h-screen bg-background pb-20">
            <Navbar />

            <div className="max-w-4xl mx-auto px-6 pt-32">
                <Link href="/blogs" className="inline-flex items-center space-x-2 text-slate-400 hover:text-white transition-colors mb-8 group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Insights</span>
                </Link>

                <div className="flex flex-col space-y-6 mb-12">
                    <div className="flex items-center space-x-4 text-sm font-semibold text-slate-500 overflow-x-auto pb-2 scrollbar-hide">
                        <div className="flex items-center space-x-1 whitespace-nowrap">
                            <Calendar className="w-4 h-4 text-accent-blue" />
                            <span>{blog.date}</span>
                        </div>
                        <div className="flex items-center space-x-1 whitespace-nowrap">
                            <Clock className="w-4 h-4 text-accent-purple" />
                            <span>{blog.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-accent-blue whitespace-nowrap">
                            <Tag className="w-4 h-4" />
                            <span>{blog.category}</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight lg:leading-[1.1]">
                        {blog.title}
                    </h1>

                    <div className="flex items-center justify-between pt-8 border-t border-white/5">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue font-bold">
                                {blog.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                                <p className="text-white font-bold">{blog.author}</p>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">BI Specialist</p>
                            </div>
                        </div>
                        <button className="p-3 glass rounded-full text-slate-400 hover:text-accent-blue transition-all">
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <article className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-10">
                    <div className="p-8 glass rounded-3xl border-l-[6px] border-accent-blue bg-accent-blue/5">
                        <p className="text-xl md:text-2xl text-white font-serif italic leading-relaxed">
                            "In Business Intelligence, metrics without context are just numbers.
                            The goal of this breakdown is to transform how you visualize complex data shifts."
                        </p>
                    </div>

                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold text-white flex items-center space-x-3">
                            <div className="w-2 h-8 bg-accent-blue rounded-full" />
                            <span>Technical Overview</span>
                        </h2>
                        <p className="text-lg leading-relaxed">
                            Throughout this guide, we'll explore specific optimization techniques used in high-concurrency environments.
                            Whether you're managing real-time inventory or complex financial reports, these strategies ensure your dashboards remain snappy and accurate.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <GlassCard className="border-accent-purple/20 bg-accent-purple/5">
                                <h4 className="font-bold text-white mb-2 underline decoration-accent-purple underline-offset-4">Phase 1: Architecture</h4>
                                <p className="text-sm text-slate-400 leading-relaxed">Defining the granular relationship between data models and UI state for maximum efficiency.</p>
                            </GlassCard>
                            <GlassCard className="border-accent-yellow/20 bg-accent-yellow/5">
                                <h4 className="font-bold text-white mb-2 underline decoration-accent-yellow underline-offset-4">Phase 2: Execution</h4>
                                <p className="text-sm text-slate-400 leading-relaxed">Implementing dynamic filtering and row-level security protocols at the database layer.</p>
                            </GlassCard>
                        </div>
                    </section>

                    <section className="space-y-6 pt-6">
                        <h2 className="text-2xl font-bold text-white">Advanced Optimization Strategies</h2>
                        <div className="space-y-4">
                            {[
                                "Partitioning large datasets for incremental refresh",
                                "Optimizing DAX measures using variables for performance",
                                "Leveraging SQL window functions for pre-aggregation",
                                "Dynamic formatting based on threshold alerts"
                            ].map((step, idx) => (
                                <div key={idx} className="flex items-center space-x-4 p-4 glass rounded-xl border-white/5 group hover:border-accent-blue/30 transition-all">
                                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-accent-blue font-mono group-hover:scale-110 transition-transform">
                                        {idx + 1}
                                    </div>
                                    <span className="text-slate-200">{step}</span>
                                    <ChevronRight className="w-4 h-4 ml-auto text-slate-600 group-hover:text-white transition-colors" />
                                </div>
                            ))}
                        </div>
                    </section>

                    <p className="text-lg leading-relaxed pt-6">
                        In conclusion, mastering these advanced techniques allows you to provide
                        stakeholders with more than just a reporting tool—you provide a strategic
                        advantage. For further implementation details or a specialized review of
                        your current BI stack, feel free to reach out via the contact section.
                    </p>

                    <div className="pt-20 mt-20 border-t border-white/5">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 glass rounded-3xl bg-gradient-to-br from-accent-blue/10 to-transparent relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/20 blur-[60px] rounded-full" />
                            <div className="max-w-md">
                                <h3 className="text-2xl font-bold text-white mb-2">Want to Optimize Your BI Infrastructure?</h3>
                                <p className="text-slate-400">Let's discuss how customized data architectures can transform your business decision-making process.</p>
                            </div>
                            <Link href="/#contact" className="px-8 py-4 bg-accent-blue text-white rounded-xl font-bold hover:bg-accent-blue/90 transition-all shadow-xl shadow-accent-blue/20 whitespace-nowrap">
                                Book a Deep-Dive
                            </Link>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    );
}
