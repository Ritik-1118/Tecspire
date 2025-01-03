import * as React from 'react';

export interface IAppProps {
}

export const WhatWeOffer = (props: IAppProps) => {
    return (
        <div className='h-screen text-white bg-gradient-to-t from-[#0A0A0A] via-[#050603] to-[#09120E]'>
            <div className='max-w-7xl mx-auto '>
                <div className='flex justify-center items-center pt-10'>
                    <h1 className='text-5xl'>Here’s What We Offer 🚀</h1>
                </div>
                <div className='flex flex-shrink mt-10'>
                    <div className='flex items-center justify-center shadow-2xl border border-white/50 rounded-lg text-center h-[260px] w-[260px] bg-cyan-900 text-3xl px-4'>
                        <h1>Notes That Make You Unstoppable!</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
