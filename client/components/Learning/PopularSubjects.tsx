"use client"
import React from 'react';

const PopularSubjects: React.FC = () => {
    const subjects = [
        {
            name: 'Web Development',
            description: 'Learn HTML, CSS, JavaScript, React, and more.',
            icon: '🌐'
        },
        {
            name: 'Artificial Intelligence',
            description: 'Dive into Machine Learning, NLP, and AI frameworks.',
            icon: '🤖'
        },
        {
            name: 'Cybersecurity',
            description: 'Explore ethical hacking, network security, and more.',
            icon: '🛡️'
        },
        {
            name: 'Data Science',
            description: 'Master Python, Data Analysis, and Visualization.',
            icon: '📊'
        },
        {
            name: 'Blockchain',
            description: 'Understand distributed ledgers and smart contracts.',
            icon: '⛓️'
        },
        {
            name: 'Cloud Computing',
            description: 'Learn AWS, Azure, GCP, and cloud-based solutions.',
            icon: '☁️'
        },
    ];

    const handleLearnMore = (subjectName: string) => {
        alert(`Learn more about ${subjectName}!`);
        // You can replace this with navigation logic, e.g., router.push(`/subjects/${subjectName}`);
    };

    return (
        <section className='bg-gradient-to-t from-[#09120E] via-[#050603] to-[#042011]'>
            <div className="py-16 px-6 max-w-[83rem] mx-auto">
                <h2 className="text-3xl font-extrabold text-center my-6 text-white">
                    Explore Popular Technical Subjects
                </h2>
                <p className="text-gray-300 text-center mb-10">
                    Dive into the world of technical excellence and skill-building.
                </p>
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {subjects.map((subject, index) => (
                        <div
                            key={index}
                            className="learn_bg text-left hover:bg-gray-500/35 border border-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-t from-[#0A0A0A] via-[#050603] to-[#043a22] rounded-full text-xl">
                                    {subject.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">{subject.name}</h3>
                            </div>
                            <p className="text-gray-300 mb-4">{subject.description}</p>
                            <button
                                className="mt-auto px-4 py-2 bg-[#043a22] text-white rounded-lg hover:bg-gray-500 transition duration-300"
                                onClick={() => handleLearnMore(subject.name)}
                            >
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularSubjects;
