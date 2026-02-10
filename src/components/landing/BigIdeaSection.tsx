"use client";

import { motion } from "framer-motion";
import { Briefcase, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

export function BigIdeaSection() {
    return (
        <section className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
            <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px]" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium border border-white/20">
                            The Big Shift
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold font-serif leading-tight">
                            Stop Hiring Help. <br />
                            <span className="text-accent">Start Building Assets.</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-primary-foreground/80 font-light leading-relaxed">
                            Most agents hire VAs for tasks. We help you build brand & lead assets that compound over time.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid gap-6"
                    >
                        <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-sm text-primary-foreground hover:bg-white/10 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-white/10">
                                    <Briefcase className="w-6 h-6 text-primary-foreground" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Traditional VA</h3>
                                    <p className="text-primary-foreground/70">Sells hours. Does tasks one by one. When they stop, the work stops.</p>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-8 bg-white/10 border-accent/50 shadow-2xl shadow-accent/10 text-primary-foreground relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -mr-16 -mt-16" />
                            <div className="flex items-start gap-4 relative z-10">
                                <div className="p-3 rounded-lg bg-accent text-primary">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Asset Builder</h3>
                                    <p className="text-primary-foreground/80">Installs systems. Builds authority. Works for you 24/7 even while you sleep.</p>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 pt-16 border-t border-white/10 text-center"
                >
                    <p className="text-3xl md:text-4xl font-serif font-medium">
                        "We don’t sell hours. We install <span className="text-accent italic">systems</span> that work for you 24/7."
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
