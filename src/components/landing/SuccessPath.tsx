"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Crown } from "lucide-react";
import { Card } from "@/components/ui/card";

export function SuccessPath() {
    const steps = [
        {
            id: 1,
            title: "STAGE 1: THE AUTHORITY",
            subtitle: "'The Authority Starter'",
            icon: CheckCircle2,
            color: "text-primary",
            bg: "bg-primary/10",
            description: "Personal Brand Audit → Optimized Profiles + Social Strategy",
            result: "TRUST",
        },
        {
            id: 2,
            title: "STAGE 2: THE ENGINE",
            subtitle: "'The Growth Partner'",
            icon: TrendingUp,
            color: "text-secondary",
            bg: "bg-secondary/10",
            description: "FlowChat + GHL → Proactive Outreach + Auto-Nurture",
            result: "CONSISTENT LEADS",
        },
        {
            id: 3,
            title: "STAGE 3: THE EMPIRE",
            subtitle: "'The Executive Assistant'",
            icon: Crown,
            color: "text-accent",
            bg: "bg-accent/10",
            description: "Full Delegation → VA Manages Everything 40hrs/wk",
            result: "TOTAL FREEDOM",
        },
    ];

    return (
        <section className="py-24 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold">The “Insurance Icon” Success Path</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        The 3-Stage Evolution of Your Agency
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[28%] left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-20" />

                    <div className="grid md:grid-cols-3 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <Card className="p-6 h-full flex flex-col items-center text-center border-t-4 hover:shadow-lg transition-shadow duration-300 bg-card/50 backdrop-blur-sm"
                                    style={{ borderColor: `var(--${step.color.split('-')[1]})` }}
                                >
                                    <div className={`p-4 rounded-full ${step.bg} ${step.color} mb-6`}>
                                        <step.icon className="w-8 h-8" />
                                    </div>

                                    <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                                    <p className="text-sm font-medium text-muted-foreground mb-4">{step.subtitle}</p>

                                    <div className="my-4 w-full h-px bg-border" />

                                    <p className="text-sm mb-6">{step.description}</p>

                                    <div className="mt-auto pt-4 flex flex-col items-center">
                                        <span className="text-xs uppercase tracking-widest text-muted-foreground mb-2">The Result</span>
                                        <span className={`text-lg font-bold ${step.color}`}>{step.result}</span>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
