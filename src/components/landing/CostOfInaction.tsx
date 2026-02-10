"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, XCircle, TrendingDown } from "lucide-react";

export function CostOfInaction() {
    const costs = [
        { icon: XCircle, text: "Missed high-ticket policies" },
        { icon: TrendingDown, text: "Burnout from constant follow-ups" },
        { icon: AlertTriangle, text: "Tools you pay for but don’t use" },
        { icon: Clock, text: "Time that could be spent closing deals" },
    ];

    return (
        <section className="py-24 bg-destructive/5 border-y border-destructive/10">
            <div className="container px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold font-serif mb-8 text-destructive"
                    >
                        What Staying Stuck Really Costs You
                    </motion.h2>

                    <div className="grid sm:grid-cols-2 gap-8 mb-12">
                        {costs.map((cost, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-destructive/10"
                            >
                                <div className="p-3 bg-destructive/10 rounded-full text-destructive">
                                    <cost.icon className="w-6 h-6" />
                                </div>
                                <p className="text-lg font-medium text-destructive/80 text-left">{cost.text}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-destructive text-white p-8 rounded-2xl shadow-xl"
                    >
                        <p className="text-xl md:text-2xl font-serif font-medium">
                            "One closed policy can pay for an entire year of support."
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
