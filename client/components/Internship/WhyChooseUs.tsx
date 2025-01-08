import React from 'react';

export const WhyChooseUs = () => {
    const features = [
        {
            icon: "💻",
            title: "Real-time Projects",
        },
        {
            icon: "📜",
            title: "AICTE Approved Internship Certificate",
        },
        {
            icon: "📩",
            title: "Offer Letter",
        },
        {
            icon: "🎯",
            title: "Future Job Opportunities",
        },
    ];

    return (
        <section className="bg-gradient-to-t from-[#0A0A0A] via-[#050603] to-[#043a22] py-12">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-white text-3xl font-bold mb-16">
                    Why Choose our Internship Program?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    { features.map((feature, index) => (
                        <div
                            key={ index }
                            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
                        >
                            <div className="text-4xl mb-4">{ feature.icon }</div>
                            <h3 className="text-gray-800 font-medium text-center">
                                { feature.title }
                            </h3>
                        </div>
                    )) }
                </div>
            </div>
        </section>
    );
};