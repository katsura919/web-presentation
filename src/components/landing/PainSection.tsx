"use client";

import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

export function PainSection() {
    const pains = [
        "Posting on social media but no inbound leads",
        "Following up manually and forgetting prospects",
        "Paying for tools but not using them properly",
        "Doing admin work instead of closing policies",
    ];

    return (
        <section className="py-24 bg-muted/30">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold font-serif mb-6 text-foreground"
                    >
                        Why This Isn’t Working Yet
                    </motion.h2>
                    <div className="w-24 h-1 bg-destructive/20 mx-auto rounded-full" />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    {pains.map((pain, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-sm border border-destructive/10 hover:border-destructive/30 transition-colors"
                        >
                            <XCircle className="w-6 h-6 text-destructive shrink-0 mt-1" />
                            <p className="text-lg text-muted-foreground font-medium">{pain}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <p className="text-2xl md:text-3xl font-serif italic text-muted-foreground">
                        “The problem isn’t effort. <br className="md:hidden" /> It’s the lack of a <span className="text-primary font-bold not-italic">system</span>.”
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
