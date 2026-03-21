"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import {
    BarChart3,
    Database,
    LayoutDashboard,
    User,
    Briefcase,
    Mail,
    Menu,
    X,
    Cpu
} from "lucide-react";
import { useState } from "react";

const navItems = [
    { name: "PORTFOLIO", icon: LayoutDashboard, href: "/portfolio" },
    { name: "PROJECTS", icon: BarChart3, href: "/projects" },
    { name: "BLOGS", icon: Database, href: "/blogs" },
    { name: "SERVICES", icon: Briefcase, href: "/services" },
    { name: "ABOUT", icon: User, href: "/about" },
    { name: "CONTACT", icon: Mail, href: "/#contact" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();

    // Scrolled state morphing - Morph to Floating Pill
    const width = useTransform(scrollY, [0, 100], ["100%", "92%"]);
    const top = useTransform(scrollY, [0, 100], ["0px", "20px"]);
    const borderRadius = useTransform(scrollY, [0, 100], ["0px", "32px"]);
    const maxWidth = useTransform(scrollY, [0, 100], ["100%", "1200px"]);

    const backgroundColor = useTransform(
        scrollY,
        [0, 100],
        ["rgba(0, 0, 0, 0)", "rgba(5, 5, 5, 0.9)"]
    );
    const borderColor = useTransform(
        scrollY,
        [0, 100],
        ["rgba(0, 242, 255, 0)", "rgba(0, 242, 255, 0.3)"]
    );

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <motion.header
                style={{
                    width,
                    top,
                    borderRadius,
                    maxWidth,
                    backgroundColor,
                    backdropFilter: "blur(20px)",
                    border: `1px solid`,
                    borderColor: borderColor as any,
                }}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="py-3 px-6 md:px-12 pointer-events-auto relative overflow-hidden group/navbar shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
                {/* Cyber Scanline (kept for subtle theme consistency) */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
                    <div className="w-full h-full bg-[linear-gradient(rgba(0,242,255,0.1)_1px,transparent_1px)] bg-[size:100%_4px] animate-scan-slow" />
                </div>

                <div className="max-w-7xl mx-auto flex justify-between items-center relative z-10">
                    <motion.a
                        href="/#home"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-3 cursor-pointer group/logo pointer-events-auto"
                    >
                        <div className="relative">
                            <div className="w-9 h-9 bg-accent-blue/10 border border-accent-blue/40 rounded flex items-center justify-center overflow-hidden">
                                <Cpu className="text-accent-blue w-5 h-5 group-hover/logo:animate-pulse" />
                            </div>
                            <div className="absolute -inset-1 bg-accent-blue/20 blur-lg rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-xl font-black tracking-tighter text-white uppercase italic">
                            {/* Prashant_Mane */} Demo
                        </span>
                    </motion.a>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center space-x-6">
                        {navItems.map((item, idx) => {
                            return (
                                <motion.a
                                    key={item.href}
                                    href={item.href}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: 0.1 + idx * 0.05,
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 25
                                    }}
                                    className="group relative py-2 flex items-center space-x-2 transition-all"
                                >
                                    <item.icon className="w-4 h-4 text-slate-500 group-hover:text-accent-blue transition-colors duration-300" />
                                    <span className="text-[12px] font-bold tracking-widest text-slate-400 group-hover:text-white transition-colors duration-300">
                                        {item.name}
                                    </span>

                                    {/* Clean Hover Underline */}
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-blue origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out shadow-[0_0_8px_rgba(0,242,255,0.8)]" />
                                </motion.a>
                            );
                        })}
                    </nav>

                    {/* Mobile Toggle */}
                    <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    variants={{
                        open: { opacity: 1, height: "auto", display: "block" },
                        closed: { opacity: 0, height: 0, transitionEnd: { display: "none" } }
                    }}
                    className="lg:hidden mt-4 overflow-hidden"
                >
                    <div className="pb-6 space-y-2 pt-4 border-t border-accent-blue/10">
                        {navItems.map((item, idx) => (
                            <motion.a
                                key={item.href}
                                href={item.href}
                                variants={{
                                    open: { opacity: 1, x: 0, transition: { delay: idx * 0.05 } },
                                    closed: { opacity: 0, x: -10 }
                                }}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                            >
                                <div className="w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <item.icon className="w-4 h-4 text-accent-blue" />
                                </div>
                                <span className="font-medium text-slate-400 group-hover:text-white transition-colors">{item.name}</span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </motion.header>
        </div>
    );
};
