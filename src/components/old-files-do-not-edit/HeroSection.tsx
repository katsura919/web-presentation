"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-primary/5">
            {/* Background Elements */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] opacity-60" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] opacity-40" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center space-x-2 bg-primary/5 text-primary px-6 py-2 rounded-full text-sm font-medium border border-primary/10 backdrop-blur-sm tracking-wide"
                >
                    <Star className="w-4 h-4 fill-primary" />
                    <span>The Authority Launchpad</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground font-serif leading-[1.1]"
                >
                    From Invisible Agent to <br />
                    <span className="text-primary italic">Industry Authority</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed font-light"
                >
                    We help insurance agents build trust, generate consistent conversations, and fully delegate follow-ups using branding, automation, and an Executive Assistant.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-6 w-full justify-center pt-4"
                >
                    <Button size="lg" className="text-lg h-14 px-10 bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 rounded-full transition-all hover:scale-105">
                        See the 3-Stage Growth Path
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <Button size="lg" variant="outline" className="text-lg h-14 px-10 border-2 rounded-full hover:bg-secondary/5 hover:text-secondary hover:border-secondary transition-all">
                        Find Your Stage
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
