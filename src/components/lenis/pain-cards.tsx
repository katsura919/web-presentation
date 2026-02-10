'use client';
import { XCircle, UserX, Wallet, FileX } from 'lucide-react';
import Lottie from 'lottie-react';
import redMegaphone from '../../../public/lottie/red-megaphone.json';
import tiredWoman from '../../../public/lottie/fatigue.json';
import toolFatigue from '../../../public/lottie/followup-trap.json';
import adminMode from '../../../public/lottie/admin-mode.json';

const content = [
    {
        title: 'Posting Without Inbound',
        description:
            'You spend hours creating content and posting on social media, but your DM remains empty. There is no system to turn likes into leads, making your effort feel wasted.',
        content: (
            <div className='h-full w-full flex items-center justify-center text-white'>
                <Lottie animationData={redMegaphone} className='w-40 h-40' />
            </div>
        ),
    },
    {
        title: 'The Follow-up Trap',
        description:
            "You're manually following up with leads in spreadsheets or sticky notes. Prospects fall through the cracks because you're too busy servicing existing clients to chase new ones.",
        content: (
            <div className='h-full w-full flex items-center justify-center text-white'>
                <Lottie animationData={toolFatigue} className='w-40 h-40' />
            </div>
        ),
    },
    {
        title: 'Tool Fatigue',
        description:
            "You're paying for GoHighLevel, Calendly, and generic lead lists, but they aren't talking to each other. You have expenses, not assets.",
        content: (
            <div className='h-full w-full flex items-center justify-center text-white '>
                <Lottie animationData={tiredWoman} className='w-40 h-40' />
            </div>
        ),
    },
    {
        title: 'Stuck in Admin Mode',
        description:
            "Instead of closing high-ticket policies, you're stuck doing $10/hr admin work. You are the CEO, but you're working as the secretary.",
        content: (
            <div className='h-full w-full flex items-center justify-center text-white '>
                <Lottie animationData={adminMode} className='w-40 h-40' />
            </div>
        ),
    },
];

export default function PainCards() {
    return (
        <>
            <div className='wrapper'>
                <section className='text-white  h-screen  w-full bg-slate-950  grid place-content-center sticky top-0'>
                    <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[54px_54px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

                    <h1 className='2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]'>
                        Why This Isn’t Working Yet
                    </h1>
                </section>
            </div>

            <section className='text-white w-full bg-slate-950 relative'>
                <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[54px_54px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
                <div className='wrapper'></div>
                <div className='flex justify-center gap-40 px-16'>
                    <div className='grid gap-2'>
                        {content.map((val, index) => {
                            return (
                                <figure
                                    key={index}
                                    className='sticky top-0 h-screen grid place-content-center'
                                >
                                    <article
                                        className={`${index === 0
                                                ? 'bg-green-500 rotate-6'
                                                : index === 1
                                                    ? 'bg-red-400'
                                                    : index === 2
                                                        ? 'bg-orange-400  -rotate-6'
                                                        : 'bg-blue-400'
                                            } h-72 w-[35rem] rounded-lg p-6 grid grid-cols-2 gap-4 relative overflow-hidden`}
                                    >
                                        <div className='flex flex-col justify-center'>
                                            <h1 className='text-2xl font-semibold mb-2'>
                                                {val.title}
                                            </h1>
                                            <p className='text-sm'>{val.description}</p>
                                        </div>
                                        <div className='flex items-center justify-center'>
                                            {val.content}
                                        </div>
                                    </article>
                                </figure>
                            );
                        })}
                    </div>
                    <div className='sticky top-0 h-screen grid place-content-center'>
                        <h1 className='text-4xl px-8 font-medium text-center tracking-tight leading-[120%]'>
                            Why This Isn’t Working Yet
                        </h1>
                    </div>
                </div>
            </section>
        </>
    );
}