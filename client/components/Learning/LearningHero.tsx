"use client"
import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const LearningHero: React.FC = () => {

    return (
        <section className='bg-gradient-to-t from-[#042011] via-[#050603] to-[#09120E] text-white pt-16'>
            <div className="container max-w-[85rem] mx-auto text-center px-6">
                <h2 className="text-3xl font-extrabold my-6">Learn Like Never Before: Let’s Begin!</h2>
                <p className="text-gray-300 mb-10">
                    Empowering your growth through fun and innovative learning.
                </p>
                <div className="  flex flex-col">

                    <div className='flex flex-col m-3  gap-3  md:flex-row'>
                        <div className="learn_bg text-left hover:bg-gray-500/35  border  border-green-500  w-full md:w-3/4  shadow-md rounded-2xl p-6 hover:shadow-lg  transition duration-300">
                            <h1 className="text-4xl mt-8 mb-4">BCA</h1>
                            <h3 className="text-xl font-semibold mb-2">Bachelor's of Computer Application
                            </h3>
                            <p className="text-gray-300">
                                Access technical codes, user-friendly code snippets, simplified learning resources, and enhanced conceptual clarity.
                            </p>
                            <button className="bg-transparent flex items-center justify-center text-white border border-green-500 hover:border-none hover:bg-green-900 hover:text-white px-2 py-2 mt-4 rounded-lg">
                                <FaAngleRight size={ 30 } />
                            </button>
                        </div>
                        <div className='flex flex-col gap-3 m-auto  items-center'>
                            <div className="learn_bg group flex text-left items-center border hover:border-r-0 border-green-500 hover:bg-gray-500/35 w-full shadow-md rounded-2xl hover:shadow-lg transition duration-300">
                                <div className='flex flex-col p-4'>
                                    <span className="text-2xl mb-4">DSA</span>
                                    <h3 className="text-lg font-semibold mb-2">Data Structures and Algorithms
                                    </h3>
                                    <p className="text-gray-300">
                                        Access technical codes, user-friendly code snippets, simplified learning resources, and enhanced conceptual clarity.
                                    </p>
                                </div>
                                <div className='hidden group-hover:flex items-center justify-center h-[10.3rem] w-10 rounded-r-xl group-hover:bg-green-800'>
                                    <button className="flex items-center justify-center text-white px-2 py-2">
                                        <FaAngleRight size={ 30 } />
                                    </button>
                                </div>
                            </div>
                            <div className="learn_bg group flex text-left items-center border hover:border-r-0 border-green-500 hover:bg-gray-500/35 w-full shadow-md rounded-2xl hover:shadow-lg transition duration-300">
                                <div className='flex flex-col p-4'>
                                    <span className="text-2xl mb-4">B.Sc IT</span>
                                    <h3 className="text-lg font-semibold mb-2">Bachelor of Science in Information Technology
                                    </h3>
                                    <p className="text-gray-300">
                                        Access technical codes, user-friendly code snippets, simplified learning resources, and enhanced conceptual clarity.
                                    </p>
                                </div>
                                <div className='hidden group-hover:flex items-center justify-center h-[10.3rem] w-10 rounded-r-xl group-hover:bg-green-800'>
                                    <button className="flex items-center justify-center text-white px-2 py-2">
                                        <FaAngleRight size={ 30 } />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col    mx-3  gap-3  md:flex-row'>
                        <div className='flex flex-col gap-4 m-auto  items-center'>
                            <div className="learn_bg group flex text-left items-center border hover:border-r-0 border-green-500 hover:bg-gray-500/35 w-full shadow-md rounded-2xl hover:shadow-lg transition duration-300">
                                <div className='flex flex-col p-4'>
                                    <span className="text-2xl mb-4">BBA</span>
                                    <h3 className="text-lg font-semibold mb-2">Bachelor of Business Administration
                                    </h3>
                                    <p className="text-gray-300">
                                        Access technical codes, user-friendly code snippets, simplified learning resources, and enhanced conceptual clarity.
                                    </p>
                                </div>
                                <div className='hidden group-hover:flex items-center justify-center h-[10.3rem] w-10 rounded-r-xl group-hover:bg-green-800'>
                                    <button className="flex items-center justify-center text-white px-2 py-2">
                                        <FaAngleRight size={ 30 } />
                                    </button>
                                </div>
                            </div>
                            <div className="learn_bg group flex text-left items-center border hover:border-r-0 border-green-500 hover:bg-gray-500/35 w-full shadow-md rounded-2xl hover:shadow-lg transition duration-300">
                                <div className='flex flex-col p-4'>
                                    <span className="text-2xl mb-4">B.Com</span>
                                    <h3 className="text-lg font-semibold mb-2">Bachelor of Commerce
                                    </h3>
                                    <p className="text-gray-300">
                                        Access technical codes, user-friendly code snippets, simplified learning resources, and enhanced conceptual clarity.
                                    </p>
                                </div>
                                <div className='hidden group-hover:flex items-center justify-center h-[10.3rem] w-10 rounded-r-xl group-hover:bg-green-800'>
                                    <button className="flex items-center justify-center text-white px-2 py-2">
                                        <FaAngleRight size={ 30 } />
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className="learn_bg text-left border  border-green-500 hover:bg-gray-500/35 w-full md:w-3/4  shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300">
                            <h1 className="text-4xl mb-4">B.Tech</h1>
                            <h3 className="text-xl font-semibold mb-2">Bachelor of Technology
                            </h3>
                            <p className="text-gray-300">
                                Access technical codes, user-friendly code snippets, simplified learning resources, and enhanced conceptual clarity.
                            </p>
                            <button className="bg-transparent flex items-center justify-center text-white border border-green-500 hover:border-none hover:bg-green-900 hover:text-white px-2 py-2 mt-4 rounded-lg">
                                <FaAngleRight size={ 30 } />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LearningHero;
