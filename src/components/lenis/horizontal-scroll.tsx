'use client';
import Image from 'next/image';
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
            description: "You're exhausted from buying \"exclusive\" leads only to find out five other agents are dialing them at the same time. It's a race to the bottom on price, and it's insulting to your years of expertise.",
            bgImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=1080&fit=crop',
            icon: '🔥'
        },
        {
            title: 'Lead Generation Treadmill',
            subtitle: "You're stuck in an endless cycle",
            points: [
                "You're exhausted from buying \"exclusive\" leads only to find out five other agents are dialing them at the same time. It's a race to the bottom on price, and it's insulting to your years of expertise.",
                "You know you're better than the local competition, but your digital presence is generic. You're struggling to translate your competence into a high-end brand that attracts high-net-worth clients instead of chasing them.",
                "You know that 50% of sales go to the agent who responds first. Yet, you're losing massive deals because you're stuck in a meeting when a lead hits, and you lack the automation to \"speed-to-lead\" instantly.",
                "You know you should be \"out there\" on LinkedIn or Instagram, but the \"blank page\" kills your consistency. You need a system that tells you exactly what to say so you can maintain your authority without it being a second full-time job."
            ],
            bgImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop',
            icon: '🔄'
        },
        {
            title: 'Career vs. Life',
            subtitle: "You've built a career, but have you built a life?",
            points: [
                "Insurance feels like a 24/7 game of fires and claims. You feel guilty putting your phone down at dinner because \"that one call\" could be the premium that makes your month.",
                "You are a high-earning producer, but you're stuck doing $15/hr admin work - data entry, rescheduling, and manual DMs. This has created a \"growth ceiling\" where you literally cannot sell more because you're too busy \"managing\".",
                "After a day of explaining complex underwriting and state regulations, you have zero mental energy left for your family or yourself. You need a \"set it and forget it\" prospecting engine so you can show up as your best self at home.",
                "You wear your busyness like a badge of honor, but secretly, you're burning out. You want the status of a top-tier agent, but you're tired of sacrificing your personal life to get it."
            ],
            bgImage: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop',
            icon: '⚖️'
        }
    ];

    return (
        <section ref={sectionRef} className="h-screen overflow-hidden">
            <div ref={containerRef} className="flex h-full">
                {painPoints.map((pain, index) => (
                    <div
                        key={index}
                        className="pain-panel w-screen h-screen flex-shrink-0 flex items-center justify-center overflow-hidden relative text-white"
                    >
                        {/* Background Image */}
                        <Image
                            src={pain.bgImage}
                            alt={pain.title}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/60 z-10" />
                        <div className="container max-w-4xl mx-auto px-6 md:px-8 py-20 relative z-20">
                            {index === 0 ? (
                                // Intro Panel
                                <div className="text-center space-y-8">
                                    <div className="text-8xl mb-8">{pain.icon}</div>
                                    <h2 className="text-6xl md:text-7xl font-bold mb-6 font-anton">{pain.title}</h2>
                                    <p className="text-2xl md:text-3xl font-light opacity-90 font-jost">{pain.subtitle}</p>
                                    <p className="text-xl md:text-2xl leading-relaxed mt-8 font-jost opacity-80">{pain.description}</p>
                                </div>
                            ) : (
                                // Pain Point Panels
                                <div className="space-y-8">
                                    <div className="text-center mb-12">
                                        <h3 className="text-4xl md:text-5xl font-bold mb-3 font-anton">{pain.title}</h3>
                                        <p className="text-xl md:text-2xl opacity-90 font-jost">{pain.subtitle}</p>
                                    </div>
                                    <div className="space-y-6">
                                        {pain.points?.map((point, idx) => (
                                            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all">
                                                <p className="text-base md:text-lg leading-relaxed font-jost">{point}</p>
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

