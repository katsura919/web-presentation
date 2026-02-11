"use client";

import TextAnimation from '@/components/uilayouts/scroll-text';

export default function IntroSection() {
    return (
        <>
            {/* First Paragraph Section */}
            <section className='bg-transparent text-white min-h-screen w-full flex items-center justify-center py-20 relative'>
                <div className="container relative z-10 px-4 md:px-6 flex items-center justify-center max-w-8xl mx-auto">
                    <TextAnimation
                        as='p'
                        text="You didn't get licensed to be a secretary. You're here to build a legacy. But in an industry that treats agents like commodities, your biggest risk isn't a lost policy, it's being invisible."
                        variants={{
                            hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
                            visible: {
                                filter: 'blur(0px)',
                                opacity: 1,
                                y: 0,
                                transition: { ease: 'linear', duration: 0.3 },
                            },
                        }}
                        classname='text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300 max-w-3xl leading-relaxed font-light font-jost text-center'
                    />
                </div>
            </section>

            {/* Second Paragraph Section */}
            <section className='bg-transparent text-white min-h-screen w-full flex items-center justify-center py-20 relative'>
                <div className="container relative z-10 px-4 md:px-6 flex items-center justify-center max-w-5xl mx-auto">
                    <TextAnimation
                        as='p'
                        text="We don't just give you someone; we give you a Brand Architect and an Automated Sales Engine. We fix your authority, fill your pipeline, and buy back your time so you can stay in your Zone of Genius: Closing deals and building your empire."
                        variants={{
                            hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
                            visible: {
                                filter: 'blur(0px)',
                                opacity: 1,
                                y: 0,
                                transition: { ease: 'linear', duration: 0.3 },
                            },
                        }}
                        classname='text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300 max-w-3xl leading-relaxed font-light font-jost text-center'
                    />
                </div>
            </section>
        </>
    );
}
