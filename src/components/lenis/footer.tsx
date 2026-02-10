"use client";

import { ArrowUp } from "lucide-react";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#150F2E] text-[#F3E5D4]/60 py-12 border-t border-[#F3E5D4]/10 relative z-50">
            <div className="container px-4 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-sm font-medium">
                    &copy; {new Date().getFullYear()} Agency Success Path. All rights reserved.
                </div>

                <div className="flex items-center gap-6">
                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#F3E5D4] hover:text-[#FF6B6B] transition-colors"
                    >
                        Back to Top
                        <div className="p-2 rounded-full border border-[#F3E5D4]/20 group-hover:border-[#FF6B6B] bg-[#1F1642] transition-colors">
                            <ArrowUp className="w-4 h-4" />
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    );
}
