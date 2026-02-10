"use client";

import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { XCircle, UserX, Wallet, FileX } from "lucide-react";
import { cn } from "@/lib/utils";

export function PainSection() {
    const content = [
        {
            title: "Posting Without Inbound",
            description:
                "You spend hours creating content and posting on social media, but your DM remains empty. There is no system to turn likes into leads, making your effort feel wasted.",
            content: (
                <div className="h-full w-full flex items-center justify-center text-white bg-gradient-to-br from-[#06b6d4] to-[#10b981]">
                    <XCircle className="w-20 h-20 text-white" />
                </div>
            ),
        },
        {
            title: "The Follow-up Trap",
            description:
                "You're manually following up with leads in spreadsheets or sticky notes. Prospects fall through the cracks because you're too busy servicing existing clients to chase new ones.",
            content: (
                <div className="h-full w-full flex items-center justify-center text-white bg-gradient-to-br from-[#ec4899] to-[#6366f1]">
                    <UserX className="w-20 h-20 text-white" />
                </div>
            ),
        },
        {
            title: "Tool Fatigue",
            description:
                "You're paying for GoHighLevel, Calendly, and generic lead lists, but they aren't talking to each other. You have expenses, not assets.",
            content: (
                <div className="h-full w-full flex items-center justify-center text-white bg-gradient-to-br from-[#f97316] to-[#eab308]">
                    <Wallet className="w-20 h-20 text-white" />
                </div>
            ),
        },
        {
            title: "Stuck in Admin Mode",
            description:
                "Instead of closing high-ticket policies, you're stuck doing $10/hr admin work. You are the CEO, but you're working as the secretary.",
            content: (
                <div className="h-full w-full flex items-center justify-center text-white bg-gradient-to-br from-[#8b5cf6] to-[#d946ef]">
                    <FileX className="w-20 h-20 text-white" />
                </div>
            ),
        },
    ];

    return (
        <section className="bg-background relative border-t border-border">
            {/* Sticky Header - sits above the scroll area */}
            <div className="pt-20 pb-10 text-center bg-background z-20">
                <h2 className="text-3xl md:text-5xl font-bold font-serif text-foreground">
                    Why This Isn’t Working Yet
                </h2>
                <div className="w-24 h-1 bg-destructive/20 mx-auto rounded-full mt-4" />
            </div>

            <div className="w-full">
                <StickyScroll content={content} className="h-screen w-full" />
            </div>

            <div className="py-20 text-center bg-background relative z-10 border-t border-border">
                <p className="text-2xl md:text-3xl font-serif italic text-muted-foreground">
                    “The problem isn’t your effort. <br className="hidden md:block" /> It’s the lack of a <span className="text-primary font-bold not-italic">system</span>.”
                </p>
            </div>
        </section>
    );
}
