"use client";

import { Check, Database, Mail, MessageSquare, Settings } from "lucide-react";

export default function SystemAccessSection() {
    const features = [
        {
            icon: <Database className="w-6 h-6" />,
            title: "Full CRM Access",
            description: "Get our custom-built GoHighLevel snapshot designed specifically for insurance."
        },
        {
            icon: <MessageSquare className="w-6 h-6" />,
            title: "The 'NurtureWise' Engine",
            description: "Pre-loaded email and SMS automation templates."
        }
    ];

    const systemFeatures = [
        "Lead organization dashboard",
        "Automated follow-up sequences",
        "Email & SMS templates",
        "Pipeline management",
        "Contact segmentation",
        "Activity tracking"
    ];

    return (
        <section className="bg-transparent relative overflow-hidden py-32">
            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-8">
                            <span className="text-purple-400 text-sm font-semibold uppercase tracking-wide">Digital Facelift Add-on</span>
                        </div>

                        {/* Title */}
                        <h2 className="text-5xl md:text-7xl font-anton uppercase tracking-wide font-bold text-white mb-6 leading-tight">
                            The "System-Only"<br />Access
                        </h2>

                        {/* Price */}
                        <div className="flex items-baseline gap-3 justify-center mb-8">
                            <span className="text-6xl md:text-7xl font-bold text-white">$97</span>
                            <span className="text-2xl text-zinc-400">/month</span>
                        </div>

                        {/* Description */}
                        <p className="max-w-3xl mx-auto text-xl md:text-2xl text-zinc-300 leading-relaxed">
                            For the agent who wants the tools but isn't ready for a VA yet.
                        </p>
                    </div>

                    {/* Main Features Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white font-anton uppercase">{feature.title}</h3>
                                </div>
                                <p className="text-zinc-400 text-base leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* System Features List */}
                    <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 mb-12">
                        <div className="flex items-center gap-3 mb-8">
                            <Settings className="w-8 h-8 text-purple-400" />
                            <h3 className="text-3xl font-anton uppercase text-white">What's Included</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {systemFeatures.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                                    <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                                    <span className="text-zinc-300 text-base">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
