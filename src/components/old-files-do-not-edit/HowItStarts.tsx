"use client";

import { motion } from "framer-motion";
import { ArrowDown, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HowItStarts() {
    const steps = [
        { title: "Brand Audit & Strategy", day: "Day 1-7" },
        { title: "GHL Setup & Optimization", day: "Day 7-14" },
        { title: "Outreach or Content Activation", day: "Day 14-30" },
    ];

    return (
        <section className="py-24">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">Your First 30 Days</h2>
                    <p className="text-lg text-muted-foreground">Low Friction Entry. High Impact Result.</p>
                </div>

                <div className="max-w-2xl mx-auto space-y-8">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="w-full bg-card border border-border p-6 rounded-xl shadow-sm text-center relative z-10"
                            >
                                <span className="absolute top-0 left-0 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-br-lg">
                                    {step.day}
                                </span>
                                <h3 className="text-xl font-bold font-serif mt-2">{step.title}</h3>
                            </motion.div>

                            {index < steps.length - 1 && (
                                <ArrowDown className="w-6 h-6 text-muted-foreground/30 my-2" />
                            )}
                        </div>
                    ))}

                    <div className="flex justify-center pt-8">
                        <Button size="lg" className="w-full md:w-auto h-14 px-8 text-lg bg-primary hover:bg-primary/90">
                            <Rocket className="w-5 h-5 mr-2" />
                            Start with the Authority Launchpad
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
