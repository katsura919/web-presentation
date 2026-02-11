"use client";

import { HeroParallax } from "@/components/ui/hero-parallax";
import { Check } from "lucide-react";

export default function CustomWebsiteSection() {
    // Portfolio websites - Replace these URLs with your Cloudinary links
    const portfolioWebsites = [
        {
            title: "Happy Voyager",
            link: "https://happyvoyager.com",
            thumbnail: "https://res.cloudinary.com/drpxke63n/image/upload/v1770813577/avs-5_vi0bjf.png", // Replace with Cloudinary URL
        },
        {
            title: "AVS Website",
            link: "#",
            thumbnail: "https://res.cloudinary.com/drpxke63n/image/upload/v1770813579/avs-4_it8dml.png", // Replace with Cloudinary URL
        },
        {
            title: "Portfolio Example 1",
            link: "#",
            thumbnail: "https://res.cloudinary.com/drpxke63n/image/upload/v1770813361/avs-1_vhyxxy.png", // Replace with Cloudinary URL
        },
        {
            title: "Portfolio Example 2",
            link: "#",
            thumbnail: "https://res.cloudinary.com/drpxke63n/image/upload/v1770813578/avs-3_mrayb7.png", // Replace with Cloudinary URL
        },
        {
            title: "Portfolio Example 3",
            link: "#",
            thumbnail: "https://res.cloudinary.com/drpxke63n/image/upload/v1770813360/avs-2_ykalz7.png", // Replace with Cloudinary URL
        },
        // Duplicate for parallax effect
        {
            title: "Happy Voyager",
            link: "https://happyvoyager.com",
            thumbnail: "https://res.cloudinary.com/drpxke63n/image/upload/v1770814399/happy-2_hu6as5.png",
        },
        {
            title: "AVS Website",
            link: "#",
            thumbnail: "https://res.cloudinary.com/drpxke63n/image/upload/v1770814401/happy-3_qgfvxv.png",
        },
        {
            title: "Portfolio Example 1",
            link: "#",
            thumbnail: "https://res.cloudinary.com/drpxke63n/image/upload/v1770814401/happy-1_tczbod.png",
        },
        {
            title: "Portfolio Example 2",
            link: "#",
            thumbnail: "https://res.cloudinary.com/drpxke63n/image/upload/v1770814399/happy-5_npwwtw.png",
        },
        {
            title: "Portfolio Example 3",
            link: "#",
            thumbnail: "https://res.cloudinary.com/drpxke63n/image/upload/v1770814398/happy-4_wm4vjf.png",
        },
        // Third row
        {
            title: "Happy Voyager",
            link: "https://happyvoyager.com",
            thumbnail: "https://res.cloudinary.com/drpxke63n/image/upload/v1770814741/mucho-2_mc1azr.png",
        },
        {
            title: "AVS Website",
            link: "#",
            thumbnail: "https://res.cloudinary.com/drpxke63n/image/upload/v1770814741/mucho-3_hr2szd.png",
        },
        {
            title: "Portfolio Example 1",
            link: "#",
            thumbnail: "https://res.cloudinary.com/drpxke63n/image/upload/v1770814741/mucho-1_apxicv.png",
        },
        {
            title: "Portfolio Example 2",
            link: "#",
            thumbnail: "https://res.cloudinary.com/drpxke63n/image/upload/v1770814742/mucho-4_fmcqtk.png",
        },
        {
            title: "Portfolio Example 3",
            link: "#",
            thumbnail: "https://res.cloudinary.com/drpxke63n/image/upload/v1770814741/mucho-5_sbf0pj.png",
        },
    ];

    const benefits = [
        {
            title: "Conversion-First Design",
            description: "Optimized for speed, mobile responsiveness, and lead capture."
        },
        {
            title: "World-Class Branding",
            description: "We build sites that look and feel like world-class brands."
        },
        {
            title: "Trust Before Contact",
            description: "A digital storefront that builds trust before you even pick up the phone."
        }
    ];

    return (
        <section className="bg-transparent relative overflow-hidden">
            {/* Custom Header Section */}
            <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-8">
                    <span className="text-cyan-500 text-sm font-semibold uppercase tracking-wide">Digital Facelift Add-on</span>
                </div>

                {/* Title */}
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-anton uppercase tracking-wide font-bold text-white mb-6 leading-tight">
                    High-Quality<br />Custom Website
                </h2>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-8">
                    <span className="text-6xl md:text-7xl font-bold text-white">$749</span>
                    <span className="text-2xl text-zinc-400">one-time</span>
                </div>

                {/* Description */}
                <p className="max-w-3xl text-xl md:text-2xl text-zinc-300 leading-relaxed mb-12">
                    Move away from the generic corporate landing page to a high-converting, "Icon" branded website.
                </p>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mb-12">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                            <div className="flex items-start gap-3 mb-3">
                                <Check className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                                <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed">{benefit.description}</p>
                        </div>
                    ))}
                </div>

                {/* Portfolio Label */}
                <div className="mb-8">
                    <h3 className="text-3xl md:text-4xl font-anton uppercase text-white mb-2">Our Portfolio</h3>
                    <p className="text-zinc-400 text-lg">Sites that look and feel like world-class brands</p>
                </div>
            </div>

            {/* Hero Parallax Portfolio Showcase */}
            <HeroParallax products={portfolioWebsites} />
        </section>
    );
}
