"use client";

import { Check, Instagram, Linkedin, Palette, Sparkles } from "lucide-react";

export default function BrandingRevampSection() {
    const features = [
        {
            icon: <Sparkles className="w-6 h-6" />,
            title: "The 'Icon' Profile",
            description: "Custom-designed banners, high-impact bios, and a strategic 'Featured' section for LinkedIn/Instagram."
        },
        {
            icon: <Palette className="w-6 h-6" />,
            title: "The Content Foundation",
            description: "5 custom-branded templates to ensure your future posts look like a 7-figure agency."
        }
    ];

    const platforms = [
        { name: "LinkedIn", icon: <Linkedin className="w-8 h-8" /> },
        { name: "Instagram", icon: <Instagram className="w-8 h-8" /> }
    ];

    return (
        <section className="bg-transparent relative overflow-hidden py-32">
            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-8">
                            <span className="text-cyan-500 text-sm font-semibold uppercase tracking-wide">Digital Facelift Add-on</span>
                        </div>

                        {/* Title */}
                        <h2 className="text-5xl md:text-7xl font-anton uppercase tracking-wide font-bold text-white mb-6 leading-tight">
                            Branding & Social<br />Media Revamp
                        </h2>

                        {/* Price */}
                        <div className="flex items-baseline gap-3 justify-center mb-8">
                            <span className="text-6xl md:text-7xl font-bold text-white">$347</span>
                            <span className="text-2xl text-zinc-400">one-time</span>
                        </div>

                        {/* Description */}
                        <p className="max-w-3xl mx-auto text-xl md:text-2xl text-zinc-300 leading-relaxed">
                            A total visual overhaul of your social profiles to establish instant authority.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* Features */}
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-500">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white font-anton uppercase">{feature.title}</h3>
                                </div>
                                <p className="text-zinc-400 text-base leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Platforms Showcase */}
                    <div className="bg-transparent rounded-3xl p-12 mb-12">
                        <h3 className="text-3xl font-anton uppercase text-white mb-8 text-center">Optimized For</h3>
                        <div className="flex justify-center gap-12">
                            {platforms.map((platform, index) => (
                                <div key={index} className="flex flex-col items-center gap-3">
                                    <div className="p-6 bg-cyan-500/10 rounded-2xl text-cyan-500 hover:bg-cyan-500/20 transition-all">
                                        {platform.icon}
                                    </div>
                                    <span className="text-white font-semibold text-lg">{platform.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
