"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Crown } from "lucide-react";

export function RoadmapSection() {
    const steps = [
        {
            id: 1,
            title: "STAGE 1: THE AUTHORITY",
            role: "The Authority Starter",
            icon: CheckCircle2,
            color: "bg-primary text-primary-foreground",
            border: "border-primary",
            focus: "Personal Branding",
            outcome: "TRUST",
            details: ["Brand audit (profiles, messaging)", "30-day social content strategy", "GHL set up and ready"],
            result: "People see you as a credible expert before they ever message you.",
        },
        {
            id: 2,
            title: "STAGE 2: THE ENGINE",
            role: "The Growth Partner",
            icon: TrendingUp,
            color: "bg-secondary text-secondary-foreground",
            border: "border-secondary",
            focus: "Conversations & Follow-ups",
            outcome: "CONSISTENT LEADS",
            details: ["FlowChat outreach starts conversations", "GHL NurtureWise handles follow-ups", "Monthly performance reports"],
            result: "Your pipeline stays full without manual chasing.",
        },
        {
            id: 3,
            title: "STAGE 3: THE EMPIRE",
            role: "The Executive Assistant",
            icon: Crown,
            color: "bg-accent text-accent-foreground",
            border: "border-accent",
            focus: "Full Delegation",
            outcome: "TOTAL FREEDOM",
            details: ["Dedicated Executive Assistant (40 hrs/week)", "VA manages brand, outreach, and CRM", "You only show up to appointments"],
            result: "You operate as the CEO, not the secretary.",
        },
    ];

    return (
        <section className="py-24 bg-background relative" id="roadmap">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold font-serif mb-4"
                    >
                        The Insurance Icon Roadmap
                    </motion.h2>
                    <p className="text-xl text-muted-foreground font-light">
                        The 3-Stage Evolution of Your Agency
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Timeline Line */}
                    <div className="hidden lg:block absolute top-[130px] left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent z-0 opacity-30 transform -translate-y-1/2" />

                    <div className="grid lg:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="flex flex-col h-full"
                            >
                                {/* Icon Marker */}
                                <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center shadow-lg mb-8 ${step.color} relative z-10`}>
                                    <step.icon className="w-8 h-8" />
                                </div>

                                {/* Card Content */}
                                <div className={`flex-1 flex flex-col items-center text-center p-8 bg-card rounded-2xl border ${step.border} shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group`}>
                                    <div className={`absolute top-0 left-0 w-full h-2 ${step.color}`} />

                                    <h3 className="text-xl font-bold font-serif mb-1">{step.title}</h3>
                                    <span className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">{step.role}</span>

                                    <div className="space-y-4 mb-8 w-full">
                                        <div className="bg-muted/50 p-4 rounded-lg">
                                            <span className="text-xs uppercase text-muted-foreground font-bold block mb-1">Focus</span>
                                            <span className="font-serif text-lg font-medium">{step.focus}</span>
                                        </div>

                                        <ul className="text-left space-y-3 px-4">
                                            {step.details.map((detail, i) => (
                                                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${step.color.split(' ')[0]}`} />
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-auto pt-6 border-t border-border w-full">
                                        <span className="text-xs uppercase font-bold text-muted-foreground block mb-2">The Result</span>
                                        <p className={`font-serif text-xl font-bold ${index === 0 ? 'text-primary' : index === 1 ? 'text-secondary' : 'text-accent-foreground'}`}>
                                            {step.outcome}
                                        </p>
                                        <p className="text-sm text-muted-foreground mt-2 italic">
                                            "{step.result}"
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
