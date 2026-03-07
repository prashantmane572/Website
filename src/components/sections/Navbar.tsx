"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
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
import { useState, useEffect, useRef } from "react";

const DecryptedText = ({ text, isHovered }: { text: string; isHovered: boolean }) => {
    const chars = "ABCDEFGHIJ-KLMNOPQRSTUVWXYZ-0123456789-!@#$%&*+={};:?";
    const [display, setDisplay] = useState(text);

    useEffect(() => {
        if (!isHovered) {
            setDisplay(text);
            return;
        }

        let iteration = 0;
        const interval = setInterval(() => {
            setDisplay(
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) return text[index];
                        // Add a flicker chance
                        if (Math.random() > 0.95) return " ";
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) clearInterval(interval);
            iteration += 1 / 4;
        }, 25);

        return () => clearInterval(interval);
    }, [isHovered, text]);

    return <span className="font-mono tracking-tight">{display}</span>;
};

const navItems = [
    { name: "PORTFOLIO", icon: LayoutDashboard, href: "/#home" },
    { name: "PROJECTS", icon: BarChart3, href: "/projects" },
    { name: "BLOGS", icon: Database, href: "/blogs" },
    { name: "SERVICES", icon: Briefcase, href: "/services" },
    { name: "ABOUT", icon: User, href: "/#about" },
    { name: "CONTACT", icon: Mail, href: "/#contact" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();
    const navRef = useRef<HTMLDivElement>(null);

    // Mouse Tracking for 3D Tilt & Tracer
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth Spring Physics
    const springConfig = { stiffness: 150, damping: 20 };
    const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-600, 600], [-15, 15]), springConfig);
    const tracerX = useSpring(mouseX, { stiffness: 400, damping: 30 });

    // Scrolled state morphing
    const width = useTransform(scrollY, [0, 100], ["100%", "92%"]);
    const top = useTransform(scrollY, [0, 100], ["0px", "24px"]);
    const borderRadius = useTransform(scrollY, [0, 100], ["0px", "32px"]);
    const maxWidth = useTransform(scrollY, [0, 100], ["100%", "1300px"]);

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

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!navRef.current) return;
        const rect = navRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <div
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.header
                ref={navRef}
                style={{
                    width,
                    top,
                    borderRadius,
                    maxWidth,
                    backgroundColor,
                    backdropFilter: "blur(20px)",
                    border: `1px solid`,
                    borderColor: borderColor as any,
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d"
                }}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 25 }}
                className="py-1.5 px-6 md:px-12 pointer-events-auto relative overflow-hidden group/navbar shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
                {/* Neural Tracer Glow */}
                <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-accent-blue blur-sm"
                    style={{ x: tracerX }}
                />

                {/* Cyber Scanline */}
                <div className="absolute inset-0 pointer-events-none opacity-10">
                    <div className="w-full h-full bg-[linear-gradient(rgba(0,242,255,0.1)_1px,transparent_1px)] bg-[size:100%_4px] animate-scan-slow" />
                </div>

                <div className="max-w-7xl mx-auto flex justify-between items-center py-2 relative z-10">
                    <motion.a
                        href="/#home"
                        whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                        className="flex items-center space-x-3 cursor-pointer group/logo pointer-events-auto"
                    >
                        <div className="relative">
                            <div className="w-9 h-9 bg-accent-blue/10 border border-accent-blue/40 rounded flex items-center justify-center overflow-hidden">
                                <Cpu className="text-accent-blue w-5 h-5 group-hover/logo:animate-pulse" />
                                <div className="absolute inset-0 bg-accent-blue/20 group-hover/logo:translate-y-full transition-transform duration-500" />
                            </div>
                            <div className="absolute -inset-1 bg-accent-blue/20 blur-lg rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-xl font-black tracking-tighter text-white uppercase italic">
                            Prashant_Mane
                        </span>
                    </motion.a>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center space-x-2">
                        {navItems.map((item, idx) => {
                            const [isHovered, setIsHovered] = useState(false);
                            const itemX = useMotionValue(0);
                            const itemY = useMotionValue(0);
                            const springX = useSpring(itemX, { stiffness: 300, damping: 20 });
                            const springY = useSpring(itemY, { stiffness: 300, damping: 20 });

                            const handleItemMove = (e: React.MouseEvent) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = e.clientX - rect.left - rect.width / 2;
                                const y = e.clientY - rect.top - rect.height / 2;
                                itemX.set(x * 0.4);
                                itemY.set(y * 0.4);
                            };

                            const handleItemLeave = () => {
                                setIsHovered(false);
                                itemX.set(0);
                                itemY.set(0);
                            };

                            return (
                                <motion.a
                                    key={item.href}
                                    href={item.href}
                                    style={{ x: springX, y: springY }}
                                    onMouseMove={handleItemMove}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={handleItemLeave}
                                    className="px-4 py-2 rounded-lg relative group transition-all"
                                >
                                    <div className="flex items-center space-x-2 relative z-10">
                                        <item.icon className={cn(
                                            "w-4 h-4 transition-all duration-300",
                                            isHovered ? "text-accent-blue scale-110" : "text-slate-500"
                                        )} />
                                        <span className={cn(
                                            "text-[11px] font-bold tracking-widest transition-colors duration-300",
                                            isHovered ? "text-white" : "text-slate-400"
                                        )}>
                                            <DecryptedText text={item.name} isHovered={isHovered} />
                                        </span>
                                    </div>

                                    {/* Hover Background Capsule */}
                                    <motion.div
                                        className="absolute inset-0 bg-white/5 border border-white/10 rounded-lg -z-10"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                    />

                                    {/* Magnetic Glow */}
                                    {isHovered && (
                                        <motion.div
                                            className="absolute -inset-2 bg-accent-blue/5 blur-xl rounded-full -z-20"
                                            layoutId="magnetic-glow"
                                        />
                                    )}
                                </motion.a>
                            );
                        })}
                    </nav>

                    {/* Mobile Toggle */}
                    <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
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
                    className="md:hidden mt-4 overflow-hidden"
                >
                    <div className="pb-6 space-y-4 pt-4 border-t border-accent-blue/10">
                        {navItems.map((item, idx) => (
                            <motion.a
                                key={item.href}
                                href={item.href}
                                variants={{
                                    open: { opacity: 1, x: 0, transition: { delay: idx * 0.05 } },
                                    closed: { opacity: 0, x: -10 }
                                }}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors text-slate-400 hover:text-white"
                            >
                                <div className="w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center">
                                    <item.icon className="w-4 h-4 text-accent-blue" />
                                </div>
                                <span className="font-medium">{item.name}</span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </motion.header>
        </div>
    );
};
