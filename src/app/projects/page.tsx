"use client";

import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";
import { Navbar } from "@/components/sections/Navbar";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-background pb-20">
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 pt-32">
                <Link href="/#projects" className="inline-flex items-center space-x-2 text-slate-400 hover:text-white transition-colors mb-8 group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Home</span>
                </Link>

                <div className="flex flex-col space-y-4 mb-12">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
                        Full <span className="glow-text tracking-tight italic">Project Portfolio</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
                        A comprehensive list of my professional data analytics and BI implementations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} {...project} />
                    ))}
                </div>
            </div>
        </main>
    );
}
