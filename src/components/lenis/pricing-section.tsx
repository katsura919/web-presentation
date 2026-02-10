import { Check, Star, Zap, Crown } from 'lucide-react';

export default function PricingSection() {
    const tiers = [
        {
            name: 'The Authority',
            price: '$999',
            period: '/mo',
            icon: <Star className="w-6 h-6 text-primary" />,
            vibe: 'First, we fix your digital storefront.',
            work: 'We do a personal brand audit and a 30-day social media "spice up."',
            pitch: 'Before we turn on the lead faucets, we make sure you look like a high-level expert. You get 10 hours of VA support and GoHighLevel included for free.',
            highlight: false
        },
        {
            name: 'The Engine',
            price: '$1,364',
            period: '/mo',
            icon: <Zap className="w-6 h-6 text-yellow-400" />,
            vibe: 'Now, we fill your pipeline.',
            work: '20 hours of VA time focusing on FlowChat outreach and GHL "NurtureWise" automation.',
            pitch: 'We are actively hunting for your ideal clients and making sure no one falls through the cracks with monthly reporting.',
            highlight: true
        },
        {
            name: 'The Empire',
            price: '$2,154',
            period: '/mo',
            icon: <Crown className="w-6 h-6 text-purple-400" />,
            vibe: 'You are the CEO, not the secretary.',
            work: '40 hours of a dedicated Executive Assistant.',
            pitch: 'This is full-time support. Your EA handles the brand, the outreach, and the CRM. Your only job is to show up and close the deals.',
            highlight: false
        }
    ];

    return (
        <section className="bg-[#C5ECDE] text-[#1F1642] py-24 relative overflow-hidden">
            {/* Background Decoration */}
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[54px_54px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none'></div>

            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-anton tracking-wide uppercase font-bold mb-4 text-[#1F1642]">Investment Levels</h2>
                    <p className="text-[#1F1642]/70 text-lg">Choose the stage that matches your current growth phase.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {tiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl p-8 border ${tier.highlight
                                ? 'bg-[#1F1642] border-[#FF6B6B] shadow-2xl shadow-[#1F1642]/20 scale-105 z-10'
                                : 'bg-[#1F1642] border-[#1F1642] hover:border-[#FF6B6B]/50'
                                } transition-all duration-300 flex flex-col h-full backdrop-blur-sm group`}
                        >
                            {tier.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6B6B] text-[#1F1642] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`p-2 rounded-lg ${tier.highlight ? 'bg-[#FF6B6B]/20' : 'bg-[#F3E5D4]/10'}`}>
                                        {/* Force icon color to Coral */}
                                        <div className="text-[#FF6B6B]">
                                            {tier.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#F3E5D4]">{tier.name}</h3>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-[#F3E5D4]">{tier.price}</span>
                                    <span className="text-[#F3E5D4]/60">{tier.period}</span>
                                </div>
                            </div>

                            <div className="space-y-6 flex-grow">
                                <div>
                                    <h4 className="text-sm font-bold text-[#FF6B6B] uppercase tracking-wider mb-2">The Vibe</h4>
                                    <p className="text-lg italic font-medium text-[#F3E5D4]/90">"{tier.vibe}"</p>
                                </div>

                                <div>
                                    <h4 className="text-sm font-bold text-[#FF6B6B] uppercase tracking-wider mb-2">The Work</h4>
                                    <p className="text-[#F3E5D4]/80 text-sm leading-relaxed">{tier.work}</p>
                                </div>

                                <div>
                                    <h4 className="text-sm font-bold text-[#FF6B6B] uppercase tracking-wider mb-2">The Pitch</h4>
                                    <div className="bg-[#F3E5D4]/5 p-4 rounded-lg border border-[#F3E5D4]/10">
                                        <p className="text-[#F3E5D4]/80 text-sm italic">"{tier.pitch}"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
