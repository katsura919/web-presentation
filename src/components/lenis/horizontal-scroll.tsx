'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SparklesCore } from '@/components/ui/sparkles';

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
        <section ref={sectionRef} className="h-screen overflow-hidden relative">
            <div ref={containerRef} className="flex h-full">
                {painPoints.map((pain, index) => (
                    <div
                        key={index}
                        className="pain-panel w-screen h-screen flex-shrink-0 flex items-center justify-center overflow-hidden relative"
                    >
                        {/* Conditional Solid Backgrounds */}
                        {index === 0 && (
                            // Panel 1: Solid Black
                            <div className="absolute inset-0 bg-transparent z-0" />
                        )}
                        {index === 1 && (
                            // Panel 2: Solid White
                            <div className="absolute inset-0 bg-white z-0" />
                        )}
                        {index === 2 && (
                            // Panel 3: Solid Black
                            <div className="absolute inset-0 bg-transparent z-0" />
                        )}

                        {/* Sparkles - White for black bg, Black for white bg */}
                        <div className="absolute inset-0 z-0">
                            <SparklesCore
                                id={`pain-sparkles-${index}`}
                                background="transparent"
                                minSize={0.4}
                                maxSize={1.0}
                                particleDensity={15}
                                className="w-full h-full"
                                particleColor={index === 1 ? "#000000" : "#FFFFFF"}
                            />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 container max-w-6xl mx-auto px-6 md:px-8 py-20">
                            {index === 0 ? (
                                // Intro Panel - Black Background
                                <div className="text-center">
                                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-anton uppercase leading-none mb-6">
                                        <span className="text-white">{pain.title}</span>
                                    </h2>
                                    <p className="text-4xl md:text-6xl font-anton uppercase text-white leading-tight mb-8">
                                        {pain.subtitle}
                                    </p>
                                    <p className="text-xl md:text-2xl text-white leading-relaxed max-w-4xl mx-auto font-sans">
                                        {pain.summary}
                                    </p>
                                </div>
                            ) : index === 1 ? (
                                // Panel 2 - White Background
                                <div className="space-y-12">
                                    <div className="text-center mb-12">
                                        <h3 className="text-5xl md:text-7xl lg:text-8xl font-anton uppercase leading-none mb-6">
                                            <span className="text-black">{pain.title}</span>
                                        </h3>
                                        <p className="text-3xl md:text-5xl font-anton uppercase text-black leading-tight mb-6">
                                            {pain.subtitle}
                                        </p>
                                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-sans italic">
                                            {pain.summary}
                                        </p>
                                    </div>

                                    {/* Pain Points List */}
                                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                                        {pain.points?.map((point, idx) => (
                                            <div key={idx} className="flex items-start gap-4 p-6 bg-black/5 rounded-2xl border border-black/10 hover:bg-black/10 transition-all">
                                                <span className="text-cyan-500 text-2xl font-bold mt-1">•</span>
                                                <p className="text-base md:text-lg text-black leading-relaxed font-sans">{point}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                // Panel 3 - Black Background
                                <div className="space-y-12">
                                    <div className="text-center mb-12">
                                        <h3 className="text-5xl md:text-7xl lg:text-8xl font-anton uppercase leading-none mb-6">
                                            <span className="text-white">{pain.title}</span>
                                        </h3>
                                        <p className="text-3xl md:text-5xl font-anton uppercase text-white leading-tight mb-6">
                                            {pain.subtitle}
                                        </p>
                                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-sans italic">
                                            {pain.summary}
                                        </p>
                                    </div>

                                    {/* Pain Points List */}
                                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                                        {pain.points?.map((point, idx) => (
                                            <div key={idx} className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                                                <span className="text-cyan-500 text-2xl font-bold mt-1">•</span>
                                                <p className="text-base md:text-lg text-white leading-relaxed font-sans">{point}</p>
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
