import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaAnglesRight } from 'react-icons/fa6'

const NotFound = () => {
  return (
    <div className=' flex-col flex items-center justify-center m-auto h-screen bg-gradient-to-t from-[#0A0A0A] via-[#050603] to-[#09120E] py-8'>
        <Image src="/assets/223687-P2LAZ2-485.png" width={400} height={400} alt='not found'/>
        <Link href={"/"} className='px-5 bg-white/15 flex flex-row justify-center text-white text-2xl font-bold rounded-full py-2'>
            <span className='flex m-auto'>Go to Home</span>
            <span className=' pl-1 pt-1 animate-rightShift flex m-auto'><FaAnglesRight size={25} /></span>
        </Link>
    </div>
  )
}

export default NotFound