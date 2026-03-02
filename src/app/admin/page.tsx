"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Lock, LayoutDashboard, Database, FileText, Settings, LogOut, BarChart3 } from "lucide-react";
import { useState } from "react";

export default function AdminDashboard() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState("");

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center p-6">
                <div className="absolute inset-0 grid-overlay opacity-30" />
                <GlassCard className="w-full max-w-md p-8" hoverEffect={false}>
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-16 h-16 bg-accent-blue/10 border border-accent-blue/20 rounded-full flex items-center justify-center mb-4">
                            <Lock className="w-8 h-8 text-accent-blue" />
                        </div>
                        <h1 className="text-2xl font-bold text-white">Admin Console</h1>
                        <p className="text-slate-500 text-sm">Secure access required</p>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); if (password === "admin123") setIsLoggedIn(true); }}>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Master Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-blue transition-colors"
                                placeholder="••••••••"
                            />
                        </div>
                        <button className="w-full py-4 bg-accent-blue text-white rounded-xl font-bold hover:bg-accent-blue/90 transition-all shadow-xl shadow-accent-blue/20">
                            Authenticate
                        </button>
                    </form>
                </GlassCard>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background flex">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/5 bg-slate-950/50 p-6 flex flex-col hidden md:flex">
                <div className="flex items-center space-x-2 mb-12">
                    <div className="w-8 h-8 bg-accent-blue rounded flex items-center justify-center text-white font-bold">P</div>
                    <span className="font-bold text-white">Admin Hub</span>
                </div>

                <nav className="flex-1 space-y-2">
                    {[
                        { name: "Overview", icon: LayoutDashboard, active: true },
                        { name: "Projects", icon: BarChart3 },
                        { name: "Blogs", icon: FileText },
                        { name: "Queries/Inquiries", icon: Database },
                        { name: "Settings", icon: Settings },
                    ].map((item) => (
                        <button
                            key={item.name}
                            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${item.active ? "bg-accent-blue/10 text-accent-blue" : "text-slate-500 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            <item.icon className="w-4 h-4" />
                            <span>{item.name}</span>
                        </button>
                    ))}
                </nav>

                <button
                    onClick={() => setIsLoggedIn(false)}
                    className="flex items-center space-x-3 px-4 py-3 text-slate-500 hover:text-red-400 transition-colors mt-auto"
                >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                </button>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-12 overflow-y-auto">
                <header className="flex justify-between items-center mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-white">Dashboard Overview</h2>
                        <p className="text-slate-500">Welcome back, Prashant.</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="text-right">
                            <p className="text-sm font-bold text-white">Prashant Mane</p>
                            <p className="text-[10px] text-green-500 font-bold uppercase tracking-widest">Online</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10" />
                    </div>
                </header>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {[
                        { label: "Profile Views", value: "1,284", change: "+12%" },
                        { label: "New Inquiries", value: "14", change: "+4" },
                        { label: "Project Clicks", value: "432", change: "+24%" }
                    ].map((stat, idx) => (
                        <GlassCard key={idx} className="p-6" hoverEffect={false}>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-2">{stat.label}</p>
                            <div className="flex items-baseline space-x-3">
                                <span className="text-3xl font-bold text-white uppercase">{stat.value}</span>
                                <span className="text-xs font-bold text-green-500">{stat.change}</span>
                            </div>
                        </GlassCard>
                    ))}
                </div>

                {/* Content Management Mockup */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <GlassCard className="p-0 overflow-hidden" hoverEffect={false}>
                        <div className="p-6 border-b border-white/5 flex justify-between items-center">
                            <h3 className="font-bold text-white">Recent Inquiries</h3>
                            <button className="text-xs text-accent-blue font-bold uppercase">View All</button>
                        </div>
                        <div className="divide-y divide-white/5">
                            {[
                                { name: "John Smith", project: "Retail Dashboard", date: "2 hrs ago" },
                                { name: "Sarah Williams", project: "SQL Audit", date: "5 hrs ago" },
                                { name: "David Chen", project: "MIS Automation", date: "1 day ago" }
                            ].map((item, idx) => (
                                <div key={idx} className="p-6 flex justify-between items-center hover:bg-white/5 transition-colors cursor-pointer">
                                    <div>
                                        <p className="text-sm font-bold text-white">{item.name}</p>
                                        <p className="text-xs text-slate-500">{item.project}</p>
                                    </div>
                                    <span className="text-[10px] text-slate-600 font-mono">{item.date}</span>
                                </div>
                            ))}
                        </div>
                    </GlassCard>

                    <GlassCard className="p-0 overflow-hidden" hoverEffect={false}>
                        <div className="p-6 border-b border-white/5 flex justify-between items-center">
                            <h3 className="font-bold text-white">Active Projects</h3>
                            <button className="text-xs text-accent-blue font-bold uppercase">+ Add New</button>
                        </div>
                        <div className="divide-y divide-white/5">
                            {[
                                "Inventory Analytics",
                                "FMCG Sales Tracker",
                                "Financial Projection Model"
                            ].map((item, idx) => (
                                <div key={idx} className="p-6 flex justify-between items-center hover:bg-white/5 transition-colors cursor-pointer">
                                    <p className="text-sm font-bold text-white">{item}</p>
                                    <div className="flex space-x-2">
                                        <button className="text-[10px] text-slate-400 hover:text-white font-bold uppercase px-2 py-1 glass rounded">Edit</button>
                                        <button className="text-[10px] text-red-400/70 hover:text-red-400 font-bold uppercase px-2 py-1 glass rounded">Trash</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </div>
            </main>
        </div>
    );
}
