"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowLeft, Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import { blogs } from "@/lib/data";
import { Navbar } from "@/components/sections/Navbar";

const BlogCard = ({ id, title, description, date, author }: any) => (
    <GlassCard className="flex flex-col h-full group" hoverEffect>
        <div className="flex items-center space-x-4 mb-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
            <div className="flex items-center space-x-1">
                <Calendar className="w-3 h-3" />
                <span>{date}</span>
            </div>
            <div className="flex items-center space-x-1">
                <User className="w-3 h-3" />
                <span>{author}</span>
            </div>
        </div>

        <Link href={`/blogs/${id}`} className="block">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors">
                {title}
            </h3>
        </Link>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
            {description}
        </p>

        <Link href={`/blogs/${id}`} className="flex items-center space-x-2 text-sm font-bold text-accent-blue hover:text-accent-blue/80 transition-colors group/btn">
            <span>Read More</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
    </GlassCard>
);

export default function BlogsPage() {
    return (
        <main className="min-h-screen bg-background pb-20">
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 pt-32">
                <Link href="/#blogs" className="inline-flex items-center space-x-2 text-slate-400 hover:text-white transition-colors mb-8 group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Home</span>
                </Link>

                <div className="flex flex-col space-y-4 mb-12">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
                        Technical <span className="glow-text tracking-tight italic">Insights & Blogs</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
                        Sharing technical expertise and industry best practices in Business Intelligence and Data Analytics.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, idx) => (
                        <BlogCard key={idx} {...blog} />
                    ))}
                </div>
            </div>
        </main>
    );
}
