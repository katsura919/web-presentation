import { Check } from 'lucide-react';
import { CometCard } from '@/components/ui/comet-card';

export default function PricingSection() {
    const tiers = [
        {
            name: 'Authority Starter',
            hours: '10 Hours',
            support: 'weekly Support',
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
        <section className="bg-[#0a0a0a] text-white py-24 relative overflow-hidden">
            {/* Background Pattern */}
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[54px_54px] pointer-events-none'></div>

            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-anton tracking-wide uppercase font-bold mb-4">
                        Choose Your Level of Support
                    </h2>
                    <p className="text-white/60 text-lg italic">Every tier includes our CRM ecosystem for free.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {tiers.map((tier, index) => (
                        <CometCard key={index} className="h-full">
                            <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl p-8 border border-zinc-800 h-full flex flex-col">
                                {/* Header */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                                    <p className="text-white/60">
                                        <span className="font-semibold text-white">{tier.hours}</span> {tier.support}
                                    </p>
                                </div>

                                {/* Features */}
                                <div className="space-y-3 mb-8 flex-grow">
                                    {tier.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className="mt-1 flex-shrink-0">
                                                <div className="w-5 h-5 rounded bg-emerald-500/20 flex items-center justify-center">
                                                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                                                </div>
                                            </div>
                                            <span className="text-white/80 text-sm leading-relaxed">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Price */}
                                <div className="pt-6 border-t border-zinc-800">
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="text-white/40 line-through text-lg">{tier.originalPrice}</span>
                                        <span className="text-3xl font-bold">{tier.price}</span>
                                        <span className="text-white/60">{tier.period}</span>
                                    </div>
                                </div>
                            </div>
                        </CometCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
