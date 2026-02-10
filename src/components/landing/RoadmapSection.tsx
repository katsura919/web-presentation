"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { CheckCircle2, TrendingUp, Crown } from "lucide-react";
import { Card } from "@/components/ui/card";

export function RoadmapSection() {
    const data = [
        {
            title: "Stage 1: The Authority",
            content: (
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-primary/10 rounded-full text-primary">
                            <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <span className="text-xl font-medium text-primary">The Authority Starter</span>
                    </div>

                    <div className="bg-card p-6 rounded-xl border border-primary/20 shadow-sm">
                        <h4 className="font-serif text-lg font-bold mb-4">Focus: Personal Branding</h4>
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-start gap-2 text-muted-foreground text-sm md:text-base">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                Brand Brand audit (profiles, messaging, positioning)
                            </li>
                            <li className="flex items-start gap-2 text-muted-foreground text-sm md:text-base">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                30-day social content strategy
                            </li>
                            <li className="flex items-start gap-2 text-muted-foreground text-sm md:text-base">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                GHL set up and ready
                            </li>
                        </ul>
                        <div className="pt-4 border-t border-border">
                            <span className="text-xs uppercase font-bold text-muted-foreground block mb-1">Result</span>
                            <p className="font-medium text-lg text-foreground">TRUST: People see you as a credible expert.</p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Stage 2: The Engine",
            content: (
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <span className="text-xl font-medium text-secondary">The Growth Partner</span>
                    </div>

                    <div className="bg-card p-6 rounded-xl border border-secondary/20 shadow-sm">
                        <h4 className="font-serif text-lg font-bold mb-4">Focus: Conversations & Follow-ups</h4>
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-start gap-2 text-muted-foreground text-sm md:text-base">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                                FlowChat outreach starts conversations
                            </li>
                            <li className="flex items-start gap-2 text-muted-foreground text-sm md:text-base">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                                GHL NurtureWise handles follow-ups
                            </li>
                            <li className="flex items-start gap-2 text-muted-foreground text-sm md:text-base">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                                Monthly performance reports
                            </li>
                        </ul>
                        <div className="pt-4 border-t border-border">
                            <span className="text-xs uppercase font-bold text-muted-foreground block mb-1">Result</span>
                            <p className="font-medium text-lg text-foreground">CONSISTENT LEADS: Pipeline stays full without manual chasing.</p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Stage 3: The Empire",
            content: (
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-accent/10 rounded-full text-accent-foreground">
                            <Crown className="w-6 h-6" />
                        </div>
                        <span className="text-xl font-medium text-accent-foreground">The Executive Assistant</span>
                    </div>

                    <div className="bg-card p-6 rounded-xl border border-accent/20 shadow-sm relative overflow-hidden">
                        {/* Gold shine effect */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -mr-10 -mt-10" />

                        <h4 className="font-serif text-lg font-bold mb-4 relative z-10">Focus: Full Delegation</h4>
                        <ul className="space-y-3 mb-6 relative z-10">
                            <li className="flex items-start gap-2 text-muted-foreground text-sm md:text-base">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                Dedicated Executive Assistant (40 hrs/week)
                            </li>
                            <li className="flex items-start gap-2 text-muted-foreground text-sm md:text-base">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                VA manages brand, outreach, and CRM
                            </li>
                            <li className="flex items-start gap-2 text-muted-foreground text-sm md:text-base">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                You only show up to appointments
                            </li>
                        </ul>
                        <div className="pt-4 border-t border-border relative z-10">
                            <span className="text-xs uppercase font-bold text-muted-foreground block mb-1">Result</span>
                            <p className="font-medium text-lg text-foreground">TOTAL FREEDOM: You operate as the CEO, not the secretary.</p>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <section className="w-full bg-background" id="roadmap">
            {/* Header Section for context */}
            <div className="py-12 md:py-20 text-center container px-4">
                <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
                    The Insurance Icon Roadmap
                </h2>
                <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
                    The 3-Stage Evolution of Your Agency. Where are you today, and where do you want to be?
                </p>
            </div>

            <Timeline data={data} />
        </section>
    );
}
