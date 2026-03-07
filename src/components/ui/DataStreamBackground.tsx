"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const DataStreamBackground = () => {
    const [lines, setLines] = useState<number[]>([]);

    useEffect(() => {
        // Create 15-20 random data lines
        setLines(Array.from({ length: 18 }, (_, i) => i));
    }, []);

    return (
        <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none opacity-30">
            {lines.map((i) => (
                <motion.div
                    key={i}
                    className="absolute h-[2px] bg-gradient-to-r from-transparent via-accent-blue to-transparent"
                    style={{
                        width: "100%",
                        top: `${(i * 100) / lines.length}%`,
                        left: "-100%",
                    }}
                    animate={{
                        left: ["-100%", "100%"],
                    }}
                    transition={{
                        duration: 5 + Math.random() * 8, // Faster
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.3,
                    }}
                />
            ))}

            {/* Pulsing Data Nodes - More vibrant for black theme */}
            {Array.from({ length: 12 }).map((_, i) => ( // More nodes
                <motion.div
                    key={`node-${i}`}
                    className="absolute w-[2px] h-[2px] bg-accent-blue rounded-full shadow-[0_0_8px_rgba(0,242,255,0.8)]"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        scale: [1, 2, 1],
                        opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5,
                    }}
                />
            ))}
        </div>
    );
};
