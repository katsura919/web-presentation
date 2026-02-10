import { Timeline } from "@/components/ui/timeline";
import { CheckCircle2, TrendingUp, Crown } from "lucide-react";


export default function StagesSection() {
    const data = [
        {
            title: "Stage 1: The Authority",
            content: (
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-[#FF6B6B]/10 rounded-full text-[#FF6B6B]">
                            <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <span className="text-xl font-medium text-[#F3E5D4]">The Authority Starter</span>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-sm">
                        <h4 className="font-serif text-lg font-bold mb-4 text-[#FF6B6B]">Focus: Personal Branding</h4>
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-start gap-2 text-gray-300 text-sm md:text-base">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF6B6B] shrink-0" />
                                Brand Brand audit (profiles, messaging, positioning)
                            </li>
                            <li className="flex items-start gap-2 text-gray-300 text-sm md:text-base">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF6B6B] shrink-0" />
                                30-day social content strategy
                            </li>
                            <li className="flex items-start gap-2 text-gray-300 text-sm md:text-base">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF6B6B] shrink-0" />
                                GHL set up and ready
                            </li>
                        </ul>
                        <div className="pt-4 border-t border-white/10">
                            <span className="text-xs uppercase font-bold text-[#FF6B6B] block mb-1">Result</span>
                            <p className="font-medium text-lg text-[#F3E5D4]">TRUST: People see you as a credible expert.</p>
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
                        <div className="p-3 bg-[#FF6B6B]/10 rounded-full text-[#FF6B6B]">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <span className="text-xl font-medium text-[#F3E5D4]">The Growth Partner</span>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-sm">
                        <h4 className="font-serif text-lg font-bold mb-4 text-[#FF6B6B]">Focus: Conversations & Follow-ups</h4>
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-start gap-2 text-gray-300 text-sm md:text-base">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF6B6B] shrink-0" />
                                FlowChat outreach starts conversations
                            </li>
                            <li className="flex items-start gap-2 text-gray-300 text-sm md:text-base">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF6B6B] shrink-0" />
                                GHL NurtureWise handles follow-ups
                            </li>
                            <li className="flex items-start gap-2 text-gray-300 text-sm md:text-base">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF6B6B] shrink-0" />
                                Monthly performance reports
                            </li>
                        </ul>
                        <div className="pt-4 border-t border-white/10">
                            <span className="text-xs uppercase font-bold text-[#FF6B6B] block mb-1">Result</span>
                            <p className="font-medium text-lg text-[#F3E5D4]">CONSISTENT LEADS: Pipeline stays full without manual chasing.</p>
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
                        <div className="p-3 bg-[#FF6B6B]/10 rounded-full text-[#FF6B6B]">
                            <Crown className="w-6 h-6" />
                        </div>
                        <span className="text-xl font-medium text-[#F3E5D4]">The Executive Assistant</span>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-sm relative overflow-hidden">
                        {/* Gold shine effect */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B6B]/10 rounded-full blur-3xl -mr-10 -mt-10" />

                        <h4 className="font-serif text-lg font-bold mb-4 relative z-10 text-[#FF6B6B]">Focus: Full Delegation</h4>
                        <ul className="space-y-3 mb-6 relative z-10">
                            <li className="flex items-start gap-2 text-gray-300 text-sm md:text-base">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF6B6B] shrink-0" />
                                Dedicated Executive Assistant (40 hrs/week)
                            </li>
                            <li className="flex items-start gap-2 text-gray-300 text-sm md:text-base">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF6B6B] shrink-0" />
                                VA manages brand, outreach, and CRM
                            </li>
                            <li className="flex items-start gap-2 text-gray-300 text-sm md:text-base">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF6B6B] shrink-0" />
                                You only show up to appointments
                            </li>
                        </ul>
                        <div className="pt-4 border-t border-white/10 relative z-10">
                            <span className="text-xs uppercase font-bold text-[#FF6B6B] block mb-1">Result</span>
                            <p className="font-medium text-lg text-[#F3E5D4]">TOTAL FREEDOM: You operate as the CEO, not the secretary.</p>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <>
            <section className='text-white w-full bg-[#1F1642] grid place-content-center dark relative'>
                <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[54px_54px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none'></div>
                {/* Header Section for context */}
                <div className="pt-20 text-center container px-4 bg-[#1F1642]">
                    <h1 className="text-4xl md:text-5xl font-anton tracking-wide uppercase leading-[0.9]">The 3-Stage Evolution of Your Agency</h1>
                    <p className="pt-10 text-lg text-muted-foreground">Low Friction Entry. High Impact Result.</p>
                </div>

                <Timeline data={data} />
            </section>
        </>
    );
}