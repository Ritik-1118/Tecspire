"use client"
import React, { useState } from "react";

interface FAQ {
    question: string;
    answer: string;
}

const FAQSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs: FAQ[] = [
        {
            question: "What is TecSpire?",
            answer:
                "TecSpire is a platform that offers study materials, internships, hands-on experience, and certifications to help you achieve your career goals.",
        },
        {
            question: "How can I enroll in courses?",
            answer:
                "You can enroll in courses by visiting our website, selecting your desired course, and completing the registration process.",
        },
        {
            question: "What are the benefits of the Internship Program?",
            answer:
                "Our Internship Program provides real-world experience, mentorship, and industry-recognized certifications to enhance your skills.",
        },
        {
            question: "What is the duration of the Internship Program?",
            answer:
            "The Internship Program duration varies between 1 to 3 months, depending on the selected program.",
        },
        {
            question: "How can I access study materials?",
            answer:
                "You can access study materials by logging into your TecSpire account and navigating to the 'Study Materials' section.",    
        },
        {
            question: "Are the study materials updated regularly?",
            answer:
                "Yes, our study materials are regularly updated to match the latest trends and requirements in the industry.",
        },
        {
            question: "How can I contact support?",
            answer:
                "You can contact support via email at hello@tecspire.com or through our contact form on the website.",
        },
    ];

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-gradient-to-t from-[#0A0A0A] via-[#050603] to-[#09120E] text-white py-12 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    { faqs.map((faq, index) => (
                        <div
                            key={ index }
                            className="border border-gray-700 rounded-lg overflow-hidden"
                        >
                            <button
                                onClick={ () => toggleFAQ(index) }
                                className="w-full flex justify-between items-center px-4 py-3 bg-[#0a3837] hover:bg-[#186867] focus:outline-none"
                            >
                                <span className="text-lg font-semibold">{ faq.question }</span>
                                <svg
                                    className={ `w-5 h-5 transform ${activeIndex === index ? "rotate-180" : ""
                                        } transition-transform` }
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={ 2 }
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            { activeIndex === index && (
                                <div className="px-4 py-3 bg-[#0a3837] text-gray-300">
                                    { faq.answer }
                                </div>
                            ) }
                        </div>
                    )) }
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
