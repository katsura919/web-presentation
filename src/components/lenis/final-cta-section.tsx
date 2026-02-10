"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function FinalCTASection() {
    return (
        <section className="py-32 bg-[#1F1642] text-[#F3E5D4] relative overflow-hidden flex items-center justify-center">
            {/* <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay max-h-full" /> */}
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[54px_54px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none'></div>

            <div className="container px-4 md:px-6 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold font-anton uppercase tracking-wide mb-16 leading-[1]"
                >
                    Which stage are <br />
                    <span className="text-[#FF6B6B]">you stuck in?</span>
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="h-full"
                    >
                        <Button className="w-full h-24 text-2xl font-bold font-anton uppercase tracking-wider bg-[#F3E5D4] text-[#1F1642] hover:bg-[#F3E5D4]/90 shadow-xl rounded-xl border border-transparent hover:border-[#FF6B6B] transition-all">
                            I need Authority
                        </Button>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="h-full"
                    >
                        <Button className="w-full h-24 text-2xl font-bold font-anton uppercase tracking-wider bg-[#FF6B6B] text-[#1F1642] hover:bg-[#FF6B6B]/90 shadow-xl rounded-xl border border-transparent hover:border-[#F3E5D4] transition-all">
                            I need Leads
                        </Button>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="h-full"
                    >
                        <Button className="w-full h-24 text-2xl font-bold font-anton uppercase tracking-wider bg-[#1F1642] text-[#F3E5D4] hover:bg-[#1F1642]/80 shadow-xl rounded-xl border-2 border-[#F3E5D4] hover:border-[#FF6B6B] transition-all">
                            I need Freedom
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
