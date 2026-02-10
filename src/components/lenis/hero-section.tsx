"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Star } from "lucide-react";

export default function HeroSection() {
    return (
        <section className='bg-[#1F1642] text-white  h-screen  w-full grid place-content-center sticky top-0'>
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] opacity-60" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] opacity-40" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">


                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-anton tracking-wide uppercase text-[#F3E5D4] leading-[0.9]"
                >
                    The Brand <br />
                    <span className="text-[#FF6B6B]">Kick Off</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-light font-jost"
                >
                    We don't just give you a VA, we give you a Brand Architect. For $999, we audit your brand, spice up your socials, and hand you a GHL account fully loaded, all included in your 10 hours of monthly support.
                </motion.p>

            </div>
        </section>
    );

}