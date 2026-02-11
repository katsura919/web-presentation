"use client";

import { SparklesCore } from "@/components/ui/sparkles";
import { ArrowUp, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: <Twitter className="w-5 h-5" />, label: "Twitter", href: "#" },
        { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "#" },
        { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "#" },
        { icon: <Mail className="w-5 h-5" />, label: "Email", href: "#" }
    ];

    return (
        <footer className="relative overflow-hidden pt-10">
            {/* Gradient Fade from Black to White */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white z-0" />

            {/* White Background with Black Sparkles */}
            <div className="absolute inset-0 bg-white-700 z-0">
                <SparklesCore
                    id="footer-sparkles"
                    background="transparent"
                    minSize={0.4}
                    maxSize={1.0}
                    particleDensity={15}
                    className="w-full h-full"
                    particleColor="#000000"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 container px-4 mx-auto py-20">
                {/* Main Heading */}
                <div className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-anton uppercase leading-none mb-6">
                        <span className="text-white">Business Success Path is</span>
                        <br />
                        <span className="text-cyan-500">AT YOUR FINGERTIPS</span>
                    </h2>
                    <p className="text-4xl md:text-6xl font-anton uppercase text-black leading-tight">
                        Open to Bookings<br />
                        and Consultations.
                    </p>
                </div>

                {/* CTA Button */}
                <div className="mb-20">
                    <a
                        href="#"
                        className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-lg transition-all text-lg uppercase tracking-wide group"
                    >
                        Let's Build Together
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pt-12 border-t border-black/10">
                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="text-black hover:text-pink-400 transition-colors uppercase text-sm font-bold tracking-wide"
                                aria-label={link.label}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Back to Top Button */}
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-black hover:text-cyan-500 transition-colors uppercase text-sm font-bold tracking-wide group"
                    >
                        <span>Back to Top</span>
                        <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                    </button>

                    {/* Copyright */}
                    <div className="text-sm font-medium text-black/60 uppercase tracking-wide">
                        © {new Date().getFullYear()} TalentMucho
                    </div>
                </div>
            </div>
        </footer>
    );
}
