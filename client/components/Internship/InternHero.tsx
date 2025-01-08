import Link from 'next/link';
import * as React from 'react';
import { FaDownLong } from 'react-icons/fa6';

export interface IAppProps {
}

export const InternHero = (props: IAppProps) => {
    return (
        <div className="min-h-screen bg-gradient-to-t from-[#0A0A0A] via-[#050603] to-[#043a22] text-white flex flex-col items-center justify-center">
            <div className=' pt-[6rem] text-center gap-5 font-extrabold items-center m-auto text-white h-[100vh] mt-20'
                style={ {
                    backgroundImage: 'url(/assets/internTeam.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                } }>
                <div className='bg-white/0 backdrop-blur-md container content effect-circle flex flex-col items-center justify-center max-w-6xl mx-auto h-full rounded-xl px-4 -mt-20'>
                    <div className='text-3xl md:text-7xl font-bold'>Practical experience <br />for professional growth</div>
                    <div className='text-lg my-8 font-serif'>Our internships provide practical experience, empowering you to turn knowledge into skills, overcome challenges, and achieve professional growth for a confident and successful future.</div>
                    <Link href={ '/learning' }>
                        <span className='down-up mt-8 text-2xl gap-3 flex flex-row items-center font-medium text-black'>
                            <FaDownLong />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
