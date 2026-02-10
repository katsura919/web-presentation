"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
    return (
        <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />

            <div className="container px-4 md:px-6 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold font-serif mb-12"
                >
                    Which stage are you currently stuck in?
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button variant="secondary" className="w-full h-20 text-xl font-bold bg-white text-primary hover:bg-white/90">
                            I need Authority
                        </Button>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button variant="secondary" className="w-full h-20 text-xl font-bold bg-secondary text-secondary-foreground hover:bg-secondary/90">
                            I need Leads
                        </Button>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button variant="secondary" className="w-full h-20 text-xl font-bold bg-accent text-accent-foreground hover:bg-accent/90">
                            I need Freedom
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
