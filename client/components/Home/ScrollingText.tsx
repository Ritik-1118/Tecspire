import React from "react";

interface ScrollingTextProps {
}

const ScrollingText: React.FC<ScrollingTextProps> = () => {
    const texts = [
        "Learn by Doing",
        "Upskill for Tomorrow",
        "Prepare with Confidence",
        "Hands-On Learning",
        "Real-World Projects",
        "Certify Your Growth",
        "Excel with Experience",
        "Notes to Success",
        "Intern. Learn. Lead.",
    ];
    return (
        <div className="relative flex items-center justify-center overflow-hidden w-full h-28 bg-gray-100/70">
            <div className="flex whitespace-nowrap animate-scrollTexts">
                { texts.map((text, index) => (
                    <div
                        key={ index }
                        className="text-3xl font-bold mx-8 text-gray-800"
                    >
                        { text }
                    </div>
                )) }
                {/* Duplicate for infinite effect */ }
                { texts.map((text, index) => (
                    <div
                        key={ `duplicate-${index}` }
                        className="text-3xl font-bold mx-8 text-gray-800"
                    >
                        { text }
                    </div>
                )) }
            </div>
        </div>
    );
};

export default ScrollingText;
