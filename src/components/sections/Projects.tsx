"use client";

import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export const Projects = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section id="projects" className="pt-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0"
            >
                <div className="flex flex-col space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        Featured <span className="glow-text tracking-tight italic">Analytics Projects</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl leading-relaxed">
                        Case studies showcasing data modeling, DAX optimization, and interactive dashboard solutions that drive business decisions.
                    </p>
                </div>
                <Link
                    href="/projects"
                    className="group flex items-center space-x-2 text-accent-blue font-bold hover:text-accent-blue/80 transition-colors"
                >
                    <span>More Projects</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                {projects.slice(0, 2).map((project, idx) => (
                    <motion.div key={idx} variants={itemVariants}>
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};
