'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PainPointsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current || !containerRef.current) return;

        const section = sectionRef.current;
        const container = containerRef.current;
        const panels = gsap.utils.toArray<HTMLElement>('.pain-panel');

        // Calculate total width
        const totalWidth = panels.length * window.innerWidth;

        // Set container width
        gsap.set(container, { width: totalWidth });

        // Create horizontal scroll animation
        const scrollTween = gsap.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                pin: true,
                scrub: 1,
                snap: 1 / (panels.length - 1),
                end: () => `+=${totalWidth}`,
            }
        });

        return () => {
            scrollTween.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const painPoints = [
        {
            title: 'Pain Points',
            subtitle: "The challenges keeping you from scaling",
            summary: "You're stuck in a race to the bottom, competing with countless agents for the same overpriced leads while your expertise goes unrecognized.",
            icon: '🔥'
        },
        {
            title: 'Lead Generation Treadmill',
            subtitle: "You're stuck in an endless cycle",
            summary: "Buying 'exclusive' leads that aren't exclusive, losing deals to faster responders, and struggling to stand out in a sea of generic agents.",
            points: [
                "Competing with 5+ agents for the same 'exclusive' leads",
                "Generic digital presence that doesn't reflect your expertise",
                "Missing deals due to slow response times",
                "Inconsistent social media presence hurting your authority"
            ],
            icon: '🔄'
        },
        {
            title: 'Career vs. Life',
            subtitle: "You've built a career, but have you built a life?",
            summary: "Working 24/7, drowning in admin tasks, and sacrificing your personal life while your growth hits a ceiling.",
            points: [
                "Can't disconnect - every call could be the big one",
                "Stuck doing $15/hr admin work as a high earner",
                "No energy left for family after complex client work",
                "Burning out while wearing busyness as a badge of honor"
            ],
            icon: '⚖️'
        }
    ];

    return (
        <section ref={sectionRef} className="h-screen overflow-hidden bg-transparent">
            <div ref={containerRef} className="flex h-full">
                {painPoints.map((pain, index) => (
                    <div
                        key={index}
                        className="pain-panel w-screen h-screen flex-shrink-0 flex items-center justify-center overflow-hidden relative text-white"
                    >
                        {/* Glassmorphism Container */}
                        <div className="bg-transparent container max-w-5xl mx-auto px-6 md:px-8 py-20 relative z-20">
                            {index === 0 ? (
                                // Intro Panel
                                <div className="bg-white/[0.02] backdrop-blur-2xl rounded-3xl p-12 md:p-16 border border-white/5 shadow-2xl text-center space-y-8">
                                    <h2 className="text-6xl md:text-7xl font-bold mb-6 font-anton uppercase tracking-wide">{pain.title}</h2>
                                    <p className="text-2xl md:text-3xl font-light opacity-90 font-jost">{pain.subtitle}</p>
                                    <p className="text-xl md:text-2xl leading-relaxed mt-8 font-jost opacity-80 max-w-3xl mx-auto">{pain.summary}</p>
                                </div>
                            ) : (
                                // Pain Point Panels
                                <div className="bg-white/[0.02] backdrop-blur-2xl rounded-3xl p-10 md:p-14 border border-white/5 shadow-2xl space-y-8">
                                    <div className="text-center mb-8">
                                        <h3 className="text-4xl md:text-5xl font-bold mb-3 font-anton uppercase tracking-wide">{pain.title}</h3>
                                        <p className="text-xl md:text-2xl opacity-90 font-jost mb-4">{pain.subtitle}</p>
                                        <p className="text-lg md:text-xl opacity-75 font-jost italic max-w-2xl mx-auto">{pain.summary}</p>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {pain.points?.map((point, idx) => (
                                            <div key={idx} className="bg-white/[0.05] backdrop-blur-md rounded-xl p-5 border border-white/10 hover:bg-white/[0.08] hover:border-cyan-500/20 transition-all group">
                                                <div className="flex items-start gap-3">
                                                    <span className="text-cyan-500 text-xl mt-1 group-hover:scale-110 transition-transform">•</span>
                                                    <p className="text-sm md:text-base leading-relaxed font-jost">{point}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
