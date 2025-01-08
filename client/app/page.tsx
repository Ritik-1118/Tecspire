import HeroSection from "@/components/Home/HeroSection";
import ScrollingText from "@/components/Home/ScrollingText";
import DiagonalCards from "@/components/Home/DiagonalCards";
import { WhatWeOffer } from "@/components/Home/WhatWeOffer";
import FAQSection from "@/components/Home/FAQSection";

export default function Home () {
    
    return (
        <>
            <HeroSection />
            <WhatWeOffer />
            <ScrollingText />
            <DiagonalCards />
            <FAQSection />
        </>
    );
}
