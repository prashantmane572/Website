"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowRight, Calendar, User } from "lucide-react";
import Link from "next/link";
import { blogs } from "@/lib/data";

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

export const Blogs = () => {
    return (
        <section id="blogs" className="pt-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
                <div className="flex flex-col space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        Data <span className="glow-text tracking-tight italic">Insights & Blogs</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl leading-relaxed">
                        Sharing technical expertise and industry best practices in Business Intelligence and Data Analytics.
                    </p>
                </div>
                <Link
                    href="/blogs"
                    className="group flex items-center space-x-2 text-accent-blue font-bold hover:text-accent-blue/80 transition-colors"
                >
                    <span>More Blogs</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogs.slice(0, 3).map((blog, idx) => (
                    <BlogCard key={idx} {...blog} />
                ))}
            </div>
        </section>
    );
};
