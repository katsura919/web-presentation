import { Timeline } from "@/components/ui/timeline";
import { CheckCircle2, TrendingUp, Crown } from "lucide-react";


export default function StagesSection() {
    const data = [
        {
            title: "Stage 1: The Authority",
            content: (
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-cyan-500/10 rounded-full text-cyan-500">
                            <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <span className="text-xl font-medium text-white">Personal Branding & Digital Infrastructure</span>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-sm">
                        <h4 className="font-serif text-lg font-bold mb-4">The Process</h4>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                            We stop the "Commodity Trap" by auditing your digital presence. We move you from a generic corporate look to a high-level executive brand. We set up your professional ecosystem (CRM) so you have a solid foundation to receive leads.
                        </p>

                        <div className="pt-4 border-t border-white/10">
                            <span className="text-xs uppercase font-bold block mb-1">The Focus</span>
                            <p className="font-medium text-base text-gray-300 mb-4">Personal Branding & Digital Infrastructure</p>
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
                        <div className="p-3 bg-cyan-500/10 rounded-full text-cyan-500">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <span className="text-xl font-medium text-white">Conversations & Automated Follow-ups</span>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-sm">
                        <h4 className="font-serif text-lg font-bold mb-4 ">The Process</h4>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                            Once your brand is trusted, we turn on the outreach. Our proactive system identifies your ideal clients on social platforms and starts the conversation for you. Our automation handles the follow-ups so you never lose a lead to "speed-to-lead" issues.
                        </p>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 italic">
                            Our system can get 25+ quality leads per day.
                        </p>

                        <div className="pt-4 border-t border-white/10">
                            <span className="text-xs uppercase font-bold block mb-1">The Focus</span>
                            <p className="font-medium text-base text-gray-300 mb-4">Conversations & Automated Follow-ups</p>
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
                        <div className="p-3 bg-cyan-500/10 rounded-full text-cyan-500">
                            <Crown className="w-6 h-6" />
                        </div>
                        <span className="text-xl font-medium text-white">Full Delegation & Executive Management</span>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-sm relative overflow-hidden">
                        {/* Gold shine effect */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -mr-10 -mt-10" />

                        <h4 className="font-serif text-lg font-bold mb-4 relative z-10 ">The Process</h4>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 relative z-10">
                            We move you into full-scale delegation. A dedicated partner takes over the daily management of your brand, your outreach, and your CRM. You transition from "working in the business" to "leading the business".
                        </p>

                        <div className="pt-4 border-t border-white/10 relative z-10">
                            <span className="text-xs uppercase font-bold block mb-1">The Focus</span>
                            <p className="font-medium text-base text-gray-300 mb-4">Full Delegation & Executive Management</p>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <>
            <section className='text-white w-full bg-transparent grid place-content-center dark relative'>
                {/* <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[54px_54px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none'></div> */}
                {/* Header Section for context */}
                <div className="pt-20 text-center container px-4 bg-transparent">
                    <h1 className="text-4xl md:text-5xl font-anton tracking-wide uppercase leading-[0.9]">The 3-Stage Evolution of Your Agency</h1>
                    <p className="pt-10 text-lg text-white font-cursive">A low-friction entry with high-impact results.</p>
                </div>

                <Timeline data={data} />
            </section>
        </>
    );
}