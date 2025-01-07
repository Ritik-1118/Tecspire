import Link from 'next/link';
import React from 'react'
import { FaChevronRight } from "react-icons/fa";
const HeroSection = () => {
    return (
        <div className='heroBg pt-[6rem] text-center gap-5 font-extrabold items-center m-auto text-white h-[97vh]  '>
            <div className='hero-glass container content effect-circle flex flex-col items-center justify-center max-w-6xl mx-auto h-full rounded-xl px-4'>
                <div className='text-3xl md:text-7xl font-bold'>Share or discover <br />the best  content</div>
                <div className='text-lg my-8 font-serif'>Gain in-demand, job-ready skills that employers value in the real world. With 80% of our graduates securing jobs in their desired fields within three months, join the 50,000+ students who have advanced their careers with TecSpire. Start your journey toward success today!</div>
                <Link href={ '/learning' }>
                    <span className='text-lg gap-3 flex flex-row items-center font-medium text-blue-500'>
                        Visit Materials <FaChevronRight />
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default HeroSection