import Image from 'next/image';
import * as React from 'react';

export interface IAppProps {
}

export const WhatWeOffer = (props: IAppProps) => {
    return (
        <div className='text-white bg-gradient-to-t from-[#0A0A0A] via-[#050603] to-[#09120E] py-8'>
            <div className='max-w-7xl mx-auto '>
                <div className='flex justify-center items-center pt-10'>
                    <h1 className='text-5xl'>Here’s What We Offer 🚀</h1>
                </div>
                <div className='flex flex-wrap items-center justify-center gap-10 mt-10'>
                    <div className='flex flex-col items-center justify-center shadow-2xl border border-white/50 rounded-lg text-center h-[350px] w-[300px] bg-[#09120E] px-4'>
                        <Image src={"/assets/notes.png"} alt='' width={200} height={200}/>
                        <h1 className='text-2xl my-2'>Study Notes</h1>
                        <p className='text-base'>Notes That Make You Unstoppable!</p>
                    </div>
                    <div className='flex flex-col items-center justify-center shadow-2xl border border-white/50 rounded-lg text-center h-[350px] w-[300px] bg-[#09120E] px-4'>
                        <Image src={"/assets/internship.png"} alt='' width={200} height={200}/>
                        <h1 className='text-2xl my-2'>Internship Program</h1>
                        <p className='text-base'>Flexible online or in-person programs for your schedule.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center shadow-2xl border border-white/50 rounded-lg text-center h-[350px] w-[300px] bg-[#09120E] px-4'>
                        <Image src={"/assets/exprience.png"} alt='' width={170} height={200}/>
                        <h1 className='text-2xl my-2'>Hands-On Experience</h1>
                        <p>Work on real-time projects for experience.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center shadow-2xl border border-white/50 rounded-lg text-center h-[350px] w-[300px] bg-[#09120E] px-4'>
                        <Image src={"/assets/certification.png"} alt='' width={200} height={200}/>
                        <h1 className='text-2xl my-2'>Industry-Recognized Certifications</h1>
                        <p className='text-base'>Gain globally respected, career-boosting certifications.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center shadow-2xl border border-white/50 rounded-lg text-center h-[350px] w-[300px] bg-[#09120E] px-4'>
                        <Image src={"/assets/pyqs.png"} alt='' width={200} height={200}/>
                        <h1 className='text-2xl my-2 px-2'>Previous Year Questions</h1>
                        <p className='text-base'>Previous Year Papers: The Shortcut to Success!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
