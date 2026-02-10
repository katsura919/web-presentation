"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Users } from "lucide-react";

export function SocialProof() {
    const proofs = [
        { icon: ShieldCheck, text: "Systems used by service-based professionals" },
        { icon: Award, text: "Designed around GoHighLevel best practices" },
        { icon: Users, text: "Built for high-earning insurance agents" },
    ];

    return (
        <section className="py-16 bg-muted/50">
            <div className="container px-4 md:px-6">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {proofs.map((proof, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col items-center gap-4"
                        >
                            <proof.icon className="w-10 h-10 text-muted-foreground/50" />
                            <p className="text-lg font-medium text-muted-foreground">{proof.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
