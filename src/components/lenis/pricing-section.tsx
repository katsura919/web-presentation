import { Check } from 'lucide-react';
import { BackgroundGradient } from '@/components/ui/background-gradient';

export default function PricingSection() {
    const tiers = [
        {
            name: 'Authority Starter',
            hours: '10 Hours',
            support: 'weekly Support',
            description: 'Perfect for agents ready to establish their brand and digital presence.',
            originalPrice: '$999',
            price: '$799',
            period: '/mo',
            features: [
                'Brand Audit & Social Revamp',
                'Loaded CRM Account',
                '30-Day Content Strategy'
            ]
        },
        {
            name: 'The Growth Partner',
            hours: '20 Hours',
            support: 'Weekly Support',
            description: 'Ideal for scaling your pipeline with automated outreach and follow-ups.',
            originalPrice: '$1864',
            price: '$1,364',
            period: '/mo',
            features: [
                'Stage 1 + Social Prospecting',
                'Lead Follow up Automation',
                'Monthly Performance Reports'
            ],
            highlight: true
        },
        {
            name: 'The Empire Builder',
            hours: 'Full-time',
            support: 'Dedicated EA',
            description: 'For top producers ready to operate exclusively as the CEO.',
            originalPrice: '$2554',
            price: '$2,154',
            period: '/mo',
            features: [
                'Stage 1 & 2 + Full Takeover',
                'Calendar & Inbox Management',
                'Only show up to appointments'
            ]
        }
    ];

    return (
        <section className="bg-transparent min-h-screen text-white py-32 relative overflow-hidden flex items-center">
            <div className="container px-4 mx-auto relative z-10 w-full">
                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-anton tracking-wide uppercase font-bold mb-6 leading-tight">
                        Choose Your Level of Support
                    </h2>
                    <p className="text-zinc-400 text-xl md:text-2xl font-light italic">
                        Every tier includes our CRM ecosystem for free.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid mt-20 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {tiers.map((tier, index) => (
                        <BackgroundGradient key={index} containerClassName="h-full rounded-2xl">
                            <div className="bg-black/90 backdrop-blur-xl rounded-[20px] p-8 h-full flex flex-col">
                                {/* Title */}
                                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white font-anton uppercase tracking-wide text-center">{tier.name}</h3>

                                {/* Description */}
                                <p className="text-zinc-400 text-sm md:text-base mb-8 leading-relaxed text-center">
                                    {tier.description}
                                </p>

                                {/* Features */}
                                <div className="space-y-4 mb-8 flex-grow">
                                    {tier.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className="mt-0.5 flex-shrink-0">
                                                <Check className="w-5 h-5 text-cyan-500" />
                                            </div>
                                            <span className="text-zinc-300 text-sm md:text-base leading-relaxed">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Price Section */}
                                <div className="mt-auto pt-6 border-t border-white/10">
                                    <div className="flex items-baseline gap-2 mb-6">
                                        <span className="text-zinc-500 line-through text-lg">{tier.originalPrice}</span>
                                        <span className="text-5xl font-bold text-white">{tier.price}</span>
                                        <span className="text-zinc-400 text-xl">{tier.period}</span>
                                    </div>

                                    {/* CTA Button */}
                                    <button className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-4 px-6 rounded-xl transition-all border border-white/20 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </BackgroundGradient>
                    ))}
                </div>
            </div>
        </section>
    );
}
