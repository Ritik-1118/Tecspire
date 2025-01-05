import React from "react";

interface ScrollingTextProps {
    texts: string[];
}

const ScrollingText: React.FC<ScrollingTextProps> = ({ texts }) => {
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
