import React from 'react';

const internshipDomains = [
    {
        icon: "💻",
        title: "Web Development",
        description: "Build responsive websites and web applications using modern frameworks.",
    },
    {
        icon: "📱",
        title: "Mobile App Development",
        description: "Develop user-friendly mobile apps for Android and iOS platforms.",
    },
    {
        icon: "🤖",
        title: "Artificial Intelligence",
        description: "Dive into machine learning, data science, and AI model development.",
    },
    {
        icon: "☁️",
        title: "Cloud Computing",
        description: "Learn to deploy and manage cloud infrastructure on AWS, Azure, or GCP.",
    },
    {
        icon: "🔒",
        title: "Cybersecurity",
        description: "Enhance skills in ethical hacking, data protection, and threat analysis.",
    },
    {
        icon: "📊",
        title: "Data Analytics",
        description: "Analyze data trends and build insights with industry-leading tools.",
    },
    {
        icon: "🌐",
        title: "Blockchain Development",
        description: "Work on decentralized applications and blockchain protocols.",
    },
    {
        icon: "🎨",
        title: "UI/UX Design",
        description: "Design visually appealing and user-friendly interfaces.",
    },
];

const ExploreDomains = () => {
    return (
        <section className="bg-gradient-to-t from-[#09120E] via-[#050603] to-[#0A0A0A] text-white py-16">
            <div className="container max-w-[85rem] mx-auto text-center px-6">
                <h2 className="text-3xl font-bold mb-6">Explore Our Internship Domains</h2>
                <p className="text-gray-300 mb-10">
                    Choose from a wide range of domains to kickstart your career in your desired field.
                </p>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    { internshipDomains.map((domain, index) => (
                        <div
                            key={ index }
                            className="bg-[#043a22] shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
                        >
                            <div className="text-4xl mb-4">{ domain.icon }</div>
                            <h3 className="text-xl font-semibold mb-2">{ domain.title }</h3>
                            <p className="text-gray-300">{ domain.description }</p>
                        </div>
                    )) }
                </div>
            </div>
        </section>
    );
};

export default ExploreDomains;
