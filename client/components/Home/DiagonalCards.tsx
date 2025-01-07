import Link from "next/link";
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

interface DiagonalCardsProps {
}

const DiagonalCards: React.FC<DiagonalCardsProps> = () => {

    return (
        <div className="w-full text-white bg-gradient-to-t from-[#0A0A0A] via-[#050603] to-[#09120E] py-16">
            <div className="flex gap-8 w-full h-full mx-auto max-w-7xl">
                <div
                    className=" flex flex-col gap-5 justify-center px-8 border-2 border-cyan-800 rounded-l-lg h-[500px] w-1/2"
                    style={ { backgroundImage: "url('/assets/y.png')", backgroundSize: "cover", backgroundPosition: "center" } }
                >
                    <h1 className="text-5xl font-bold font-serif -mt-10">Study Resources</h1>
                    <p className="text-base font-thin">Study materials are your foundation, turning hard work into mastery and guiding you step by step toward success.</p>
                    <Link href={'/learning'} className="flex items-center justify-center h-12 w-14 border border-cyan-500 text-cyan-500 hover:text-white hover:bg-cyan-800 rounded-lg">
                        <FaAngleDoubleRight size={ 30 } />
                    </Link>
                </div>
                <div className="flex flex-col gap-8 h-[500px] w-1/2">
                    <div 
                        className=" flex flex-col gap-3 justify-center px-8 border-2 border-cyan-800 rounded-r-lg h-[300px] w-full"
                        style={ { backgroundImage: "url('/assets/x.png')", backgroundSize: "cover", backgroundPosition: "center" } }
                    >
                        <h1 className="text-4xl font-bold font-serif text-[#2bd4cb]">Internship Program</h1>
                        <p className="text-base font-extralight text-[#bcf4f1]">Internship programs offer real-world insights for career readiness.</p>
                        <Link href={'/internship'} className="flex items-center justify-center h-12 w-14 border border-cyan-500 text-cyan-500 hover:text-white hover:bg-cyan-800 rounded-lg">
                            <FaAngleDoubleRight size={ 30 } />
                        </Link>
                    </div>
                    <div 
                        className="flex flex-col gap-3 justify-center px-8 border-2 border-cyan-800 rounded-r-lg h-[200px] w-full"
                        style={ { backgroundImage: "url('/assets/path1.png')", backgroundSize: "cover", backgroundPosition: "center" } }
                    >
                        <h1 className="text-3xl font-bold font-serif text-[#113f50]">Career Toolkits</h1>
                        <p className="text-base font-thin text-[#113f50]">Study materials are your foundation, turning hard work into mastery and guiding you step by step toward success.</p>
                        <div className="flex items-center justify-center h-12 w-14 border border-cyan-500 text-cyan-500 bg-cyan-800 hover:text-white hover:bg-cyan-800 rounded-lg">
                            <FaAngleDoubleRight size={ 30 } />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiagonalCards;
