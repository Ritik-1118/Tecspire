"use client";

import React from "react";

const RecentArticles = () => {
    const articles = [
        {
            id: 1,
            title: "Understanding React Hooks",
            description: "A comprehensive guide to mastering React Hooks and improving your functional components.",
            date: "Jan 10, 2025",
            author: "John Doe",
            image: "/images/react-hooks.jpg",
        },
        {
            id: 2,
            title: "Exploring Next.js 13",
            description: "Learn about the latest features of Next.js and how to build faster, more scalable applications.",
            date: "Jan 8, 2025",
            author: "Jane Smith",
            image: "/images/nextjs-13.jpg",
        },
        {
            id: 3,
            title: "Tailwind CSS Tips & Tricks",
            description: "Enhance your styling workflow with these useful Tailwind CSS tips and best practices.",
            date: "Jan 5, 2025",
            author: "Alex Johnson",
            image: "/images/tailwind-tips.jpg",
        },
        {
            id: 4,
            title: "Mastering TypeScript",
            description: "A complete guide to TypeScript for modern web development.",
            date: "Jan 3, 2025",
            author: "Chris Evans",
            image: "/images/typescript.jpg",
        },
        {
            id: 5,
            title: "JavaScript Performance Tips",
            description: "Boost your JavaScript performance with these essential tips.",
            date: "Dec 30, 2024",
            author: "Emily Clark",
            image: "/images/js-performance.jpg",
        },
        {
            id: 6,
            title: "Building Scalable APIs with Node.js",
            description: "Learn how to create scalable and efficient APIs using Node.js.",
            date: "Dec 28, 2024",
            author: "Michael Brown",
            image: "/images/nodejs-api.jpg",
        },
    ];

    return (
        <section className="px-4 py-12 bg-gradient-to-t from-[#042011] via-[#050603] to-[#09120E]">
            <h2 className="text-3xl font-bold text-center text-white mb-8">Recent Articles</h2>
            <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
                <div className="flex space-x-6 w-max">
                    {articles.map((article) => (
                        <div
                            key={article.id}
                            className="min-w-[16rem] max-w-[18rem] bg-[#0a3b21c9] rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-36 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-white hover:text-blue-600 hover:underline underline-offset-2 cursor-pointer transition-colors duration-200">
                                    {article.title}
                                </h3>
                                <p className="text-white/80 mt-2">
                                    {article.description}
                                </p>
                                <div className="flex items-center justify-between mt-4 text-sm text-white/90">
                                    <span>By {article.author}</span>
                                    <span>{article.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentArticles;
