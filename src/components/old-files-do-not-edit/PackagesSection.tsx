"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PackagesSection() {
    const tiers = [
        {
            name: "Authority Launchpad",
            price: "$999",
            period: "/month",
            hours: "10 hours support",
            for: "Best for agents building credibility",
            color: "primary",
            features: [
                "Brand Audit & Strategy",
                "30-day Social Media Strategy",
                "GHL ecosystem included",
                "Profile Optimization",
            ],
            cta: "Get Authority",
        },
        {
            name: "Growth Partner",
            price: "$1,364",
            period: "/month",
            hours: "20 hours support",
            for: "Best for agents ready to scale conversations",
            color: "secondary",
            highlight: true,
            features: [
                "Everything in Launchpad",
                "FlowChat Outreach Setup",
                "GHL Nurture Automation",
                "Monthly Performance Reports",
            ],
            cta: "Start Scaling",
        },
        {
            name: "Empire Builder",
            price: "$2,154",
            period: "/month",
            hours: "40 hours (Dedicated EA)",
            for: "Best for agents who want freedom",
            color: "accent",
            features: [
                "Full Delegation of Outreach",
                "Dedicated Executive Assistant",
                "Complete CRM Management",
                "Weekly Strategy Calls",
            ],
            cta: "Build Empire",
        },
    ];

    return (
        <section className="py-24 bg-muted/20" id="packages">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">Match Each Stage to a Tier</h2>
                    <p className="text-lg text-muted-foreground">
                        Connect roadmap → pricing. Choose your level of support.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative bg-card rounded-2xl border shadow-xl overflow-hidden flex flex-col 
                ${tier.highlight ? 'border-secondary ring-1 ring-secondary scale-105 z-10' : 'border-border hover:border-primary/50'}
              `}
                        >
                            {tier.highlight && (
                                <div className="bg-secondary text-secondary-foreground text-center text-sm font-bold py-2 uppercase tracking-widest">
                                    Most Popular
                                </div>
                            )}

                            <div className="p-8 pb-0">
                                <h3 className={`text-2xl font-bold font-serif mb-2 
                  ${tier.color === 'primary' ? 'text-primary' : tier.color === 'secondary' ? 'text-secondary' : 'text-accent-foreground'}
                `}>
                                    {tier.name}
                                </h3>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-4xl font-bold">{tier.price}</span>
                                    <span className="text-muted-foreground">{tier.period}</span>
                                </div>
                                <div className="inline-block bg-muted px-3 py-1 rounded-full text-sm font-medium mb-6">
                                    {tier.hours}
                                </div>
                                <p className="text-sm text-muted-foreground italic mb-6 border-l-2 border-muted pl-4">
                                    👉 {tier.for}
                                </p>
                            </div>

                            <div className="p-8 pt-0 flex-1 flex flex-col">
                                <div className="space-y-4 mb-8 flex-1">
                                    {tier.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <Check className={`w-5 h-5 mt-0.5 
                        ${tier.color === 'primary' ? 'text-primary' : tier.color === 'secondary' ? 'text-secondary' : 'text-accent-foreground'}
                      `} />
                                            <span className="text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    className={`w-full h-12 text-lg 
                    ${tier.color === 'primary' ? 'bg-primary hover:bg-primary/90' :
                                            tier.color === 'secondary' ? 'bg-secondary hover:bg-secondary/90' :
                                                'bg-accent hover:bg-accent/90 text-accent-foreground'}
                  `}
                                >
                                    {tier.cta} <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
