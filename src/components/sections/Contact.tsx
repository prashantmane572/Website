"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "Custom Power BI Dashboard",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/inquiries", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", service: "Custom Power BI Dashboard", message: "" });
                // Reset success message after 5 seconds
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Info */}
                <div className="space-y-8">
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                            Let’s Turn Your Data <br />
                            <span className="glow-text tracking-tight italic">into Decisions</span>
                        </h2>
                        <p className="text-slate-400 max-w-sm leading-relaxed">
                            Based in Pune, India. Available for global remote consultations and projects.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center space-x-4 group">
                            <div className="w-12 h-12 glass rounded-lg flex items-center justify-center group-hover:bg-accent-blue/10 transition-colors">
                                <Mail className="w-6 h-6 text-accent-blue" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Email</p>
                                <a href="mailto:prashantmane572@gmail.com" className="text-white hover:text-accent-blue transition-colors">
                                    prashantmane572@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 group">
                            <div className="w-12 h-12 glass rounded-lg flex items-center justify-center group-hover:bg-accent-blue/10 transition-colors">
                                <Phone className="w-6 h-6 text-accent-blue" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Phone</p>
                                <a href="tel:+919860881128" className="text-white hover:text-accent-blue transition-colors">
                                    +91 98608 81128
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 group">
                            <div className="w-12 h-12 glass rounded-lg flex items-center justify-center group-hover:bg-accent-blue/10 transition-colors">
                                <MapPin className="w-6 h-6 text-accent-blue" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Location</p>
                                <p className="text-white">Pune, Maharashtra, India</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Form */}
                <GlassCard className="p-8" hoverEffect={false}>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="John Doe"
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-blue transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="john@example.com"
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-blue transition-colors"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Service Required</label>
                            <select
                                className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-blue transition-colors appearance-none"
                                value={formData.service}
                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            >
                                <option>Custom Power BI Dashboard</option>
                                <option>ERP Analytics (SAP B1/HANA)</option>
                                <option>SQL Optimization</option>
                                <option>MIS Automation</option>
                                <option>Other / Not Sure</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Message</label>
                            <textarea
                                rows={4}
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="Briefly describe your business problem..."
                                className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-blue transition-colors resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full px-8 py-4 bg-accent-blue text-white rounded-xl font-bold hover:bg-accent-blue/90 transition-all flex items-center justify-center space-x-2 shadow-xl shadow-accent-blue/20 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Send className="w-4 h-4" />
                            <span>{status === "loading" ? "Sending..." : "Send Inquiry"}</span>
                        </button>

                        {status === "success" && (
                            <p className="text-green-500 text-center text-sm font-bold">✓ Inquiry sent successfully! I'll get back to you soon.</p>
                        )}
                        {status === "error" && (
                            <p className="text-red-500 text-center text-sm font-bold">Failed to send inquiry. Please try again later.</p>
                        )}
                    </form>
                </GlassCard>
            </div>

            {/* Footer Branding */}
            <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-600 text-xs">
                <p>© 2026 Prashant Mane. BI Portfolio & Consultancy.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-slate-400">Privacy Policy</a>
                    <a href="#" className="hover:text-slate-400">Terms of Service</a>
                </div>
            </div>
        </section>
    );
};
