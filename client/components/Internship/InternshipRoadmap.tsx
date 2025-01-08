import React from 'react';

const InternshipRoadmap = () => {
    return (
        <section className="bg-gradient-to-t from-[#0A0A0A] via-[#050603] to-[#09120E] text-white py-16">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <h2 className="text-center text-3xl font-bold mb-12">Roadmap of Internship Journey</h2>
                <div className="relative">
                    {/* Road Line */ }
                    <div className="absolute w-1 h-full bg-gray-600 left-6 top-1 transform -translate-x-1/2 z-0" />

                    {/* Steps */ }
                    <div className="relative z-10 space-y-16">
                        {/* Step 1 */ }
                        <div className="flex items-center space-x-6">
                            <div className="w-12 h-12 bg-cyan-700 rounded-full flex items-center justify-center text-lg font-bold">01</div>
                            <div>
                                <h3 className="text-xl font-semibold">Registration</h3>
                                <p>Register at Unified Mentor VIP Program to transform your journey.</p>
                            </div>
                        </div>

                        {/* Step 2 */ }
                        <div className="flex items-center space-x-6">
                            <div className="w-12 h-12 bg-cyan-700 rounded-full flex items-center justify-center text-lg font-bold">02</div>
                            <div>
                                <h3 className="text-xl font-semibold">Offer Letter & Projects</h3>
                                <p>Receive Offer letter next day after registration and select projects on batch start date.</p>
                            </div>
                        </div>

                        {/* Step 3 */ }
                        <div className="flex items-center space-x-6">
                            <div className="w-12 h-12 bg-cyan-700 rounded-full flex items-center justify-center text-lg font-bold">03</div>
                            <div>
                                <h3 className="text-xl font-semibold">Hands on Projects & Learning</h3>
                                <p>Work on projects on your own practice skill set, get help from modules and mentor support.</p>
                            </div>
                        </div>

                        {/* Step 4 */ }
                        <div className="flex items-center space-x-6">
                            <div className="w-12 h-12 bg-cyan-700 rounded-full flex items-center justify-center text-lg font-bold">04</div>
                            <div>
                                <h3 className="text-xl font-semibold">Projects Evaluation & Certification</h3>
                                <p>Projects you have worked on will be evaluated by industry team and verified certificate will be provided in a week.</p>
                            </div>
                        </div>

                        {/* Step 5 */ }
                        <div className="flex items-center space-x-6">
                            <div className="w-12 h-12 bg-cyan-700 rounded-full flex items-center justify-center text-lg font-bold">05</div>
                            <div>
                                <h3 className="text-xl font-semibold">Get Placement Opportunities</h3>
                                <p>Top performer will get dedicated job portal access with LOR, and CV's will be forwarded to tie-up companies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InternshipRoadmap;
