"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Star } from "lucide-react";

export default function HeroSection() {
    return (
        <section className='bg-transparent text-white min-h-screen w-full grid place-content-center'>
            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-anton tracking-wide uppercase text-white leading-[0.9]"
                >
                    Talent Mucho: <br />
                    <span className="text-cyan-500">Setting the Standard</span>
                </motion.h1>
            </div>
        </section>
    );

}