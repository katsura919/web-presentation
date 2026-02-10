"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function PricingTiers() {
    const tiers = [
        {
            name: "The Authority Launchpad",
            price: "$999",
            period: "/mo",
            hours: "10 hrs",
            description: "Perfect for the agent who needs the Brand Audit and the 30-day 'Social Spice' strategy.",
            features: [
                "Brand Audit & Strategy",
                "30-day Social Media 'Spice Up'",
                "GHL Ecosystem Included (Free)",
                "10 Hours Monthly Support",
                "Brand Architect Access",
            ],
            cta: "Start Branding",
            highlight: false,
            color: "primary",
        },
        {
            name: "The Growth Partner",
            price: "$1,364",
            period: "/mo",
            hours: "20 hrs",
            description: "Everything in Starter + 'NurtureWise' and Monthly Reports. Ready to scale conversations.",
            features: [
                "Includes Authority Launchpad",
                "FlowChat Setup & Outreach",
                "GHL 'NurtureWise' Setup",
                "Monthly Performance Reports",
                "20 Hours Monthly Support",
            ],
            cta: "Scale Now",
            highlight: true,
            color: "secondary",
        },
        {
            name: "The Empire Builder",
            price: "$2,154",
            period: "/mo",
            hours: "40 hrs",
            description: "Your dedicated Executive Assistant. Total delegation of FlowChat and GHL management.",
            features: [
                "Dedicated Executive Assistant",
                "Full Delegation of Outreach",
                "Complete GHL Management",
                "Weekly Strategy Calls",
                "40 Hours/Week (Full Time)",
            ],
            cta: "Build Empire",
            highlight: false,
            color: "accent",
        },
    ];

    return (
        <section className="py-24" id="pricing">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Choose Your Growth Stage</h2>
                    <p className="text-muted-foreground text-lg">
                        Assets vs. Labor: Stop hiring help, start building systems.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex flex-col h-full rounded-xl border-2 transition-all duration-300 ${tier.highlight
                                    ? "border-secondary shadow-2xl shadow-secondary/10 scale-105 z-10 bg-card"
                                    : "border-border hover:border-primary/50 bg-card/50"
                                }`}
                        >
                            {tier.highlight && (
                                <div className="absolute -top-5 left-0 right-0 mx-auto w-max px-4 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-bold shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className={`p-8 ${tier.highlight ? "bg-secondary/5" : ""}`}>
                                <h3 className={`text-xl font-bold mb-2 ${tier.color === "primary" ? "text-primary" :
                                        tier.color === "secondary" ? "text-secondary" : "text-accent"
                                    }`}>
                                    {tier.name}
                                </h3>
                                <div className="flex items-baseline gap-1 mb-1">
                                    <span className="text-4xl font-bold">{tier.price}</span>
                                    <span className="text-muted-foreground">{tier.period}</span>
                                </div>
                                <div className="text-sm font-medium text-muted-foreground mb-4">
                                    {tier.hours}
                                </div>
                                <p className="text-muted-foreground text-sm">{tier.description}</p>
                            </div>

                            <div className="p-8 pt-0 flex-1 flex flex-col">
                                <div className="space-y-4 mb-8 flex-1">
                                    {tier.features.map((feature) => (
                                        <div key={feature} className="flex items-start gap-3">
                                            <div className={`mt-1 p-0.5 rounded-full ${tier.color === "primary" ? "bg-primary/20 text-primary" :
                                                    tier.color === "secondary" ? "bg-secondary/20 text-secondary" : "bg-accent/20 text-accent"
                                                }`}>
                                                <Check className="w-3 h-3" />
                                            </div>
                                            <span className="text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    className={`w-full h-12 text-base font-semibold transition-transform active:scale-95 ${tier.color === "primary" ? "bg-primary hover:bg-primary/90" :
                                            tier.color === "secondary" ? "bg-secondary hover:bg-secondary/90" :
                                                "bg-accent hover:bg-accent/90 text-accent-foreground"
                                        }`}
                                >
                                    {tier.cta}
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 p-6 rounded-xl bg-destructive/5 border border-destructive/20 max-w-3xl mx-auto text-center"
                >
                    <h4 className="font-bold text-destructive mb-2">💡 A Quick Reality Check</h4>
                    <p className="text-sm md:text-base text-muted-foreground">
                        Your Executive Assistant tier at <span className="font-bold text-foreground">$2,154/mo</span> for 40 hours a week is an absolute steal.
                        A single Life Insurance policy or a Commercial P&C contract could pay for this entire year of service.
                    </p>
                </motion.div>

                <div className="mt-8 text-center">
                    <p className="text-sm italic text-muted-foreground">
                        “Every day you spend manually following up or posting without a strategy is a day you aren’t closing high-ticket policies.”
                    </p>
                </div>
            </div>
        </section>
    );
}
