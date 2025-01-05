import HeroSection from "@/components/Home/heroSection/HeroSection";
import ScrollingText from "@/components/Home/ScrollingText";
import { WhatWeOffer } from "@/components/Home/WhatWeOffer";
import Footer from "@/components/Layout/Footer";
import Image from "next/image";

export default function Home () {
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
        <>
            <HeroSection />
            <WhatWeOffer />
            <ScrollingText texts={texts} />
            <Footer />
        </>
    );
}
