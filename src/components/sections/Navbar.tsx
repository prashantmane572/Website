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
    X
} from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
    { name: "Portfolio", icon: LayoutDashboard, href: "/#home" },
    { name: "Projects", icon: BarChart3, href: "/#projects" },
    { name: "Blogs", icon: Database, href: "/#blogs" },
    { name: "Services", icon: Briefcase, href: "/#services" },
    { name: "About Me", icon: User, href: "/#about" },
    { name: "Contact", icon: Mail, href: "/#contact" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();
    const backgroundColor = useTransform(
        scrollY,
        [0, 50],
        ["rgba(2, 6, 23, 0)", "rgba(2, 6, 23, 0.8)"]
    );
    const borderOpacity = useTransform(scrollY, [0, 50], [0, 0.5]);

    return (
        <motion.header
            style={{
                backgroundColor,
                backdropFilter: "blur(8px)",
                borderBottom: `1px solid rgba(51, 65, 85, ${borderOpacity.get()})`
            }}
            className="fixed top-0 left-0 right-0 z-50 py-3 px-6 md:px-12 transition-all"
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center space-x-2"
                >
                    <div className="w-8 h-8 bg-accent-blue rounded flex items-center justify-center">
                        <BarChart3 className="text-white w-5 h-5" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">
                        P<span className="text-accent-blue">M</span>
                    </span>
                </motion.div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map((item, idx) => (
                        <motion.a
                            key={item.href}
                            href={item.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group flex items-center space-x-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors"
                        >
                            <item.icon className="w-4 h-4 text-slate-500 group-hover:text-accent-blue transition-colors" />
                            <span>{item.name}</span>
                        </motion.a>
                    ))}
                    {/* <motion.a
                        href="/#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-accent-blue text-white rounded-lg text-sm font-semibold hover:bg-accent-blue/90 shadow-lg shadow-accent-blue/20 transition-all"
                    >
                        Hire Me
                    </motion.a> */}
                </nav>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="md:hidden mt-4 pb-4 space-y-4"
                >
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center space-x-2 text-slate-400 hover:text-white"
                        >
                            <item.icon className="w-5 h-5" />
                            <span>{item.name}</span>
                        </a>
                    ))}
                </motion.div>
            )}
        </motion.header>
    );
};
