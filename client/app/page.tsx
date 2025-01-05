import HeroSection from "@/components/Home/heroSection/HeroSection";
import ScrollingText from "@/components/Home/ScrollingText";
import DiagonalCards from "@/components/Home/DiagonalCards";
import { WhatWeOffer } from "@/components/Home/WhatWeOffer";
import Footer from "@/components/Layout/Footer";
import Image from "next/image";

export default function Home () {
    
    return (
        <>
            <HeroSection />
            <WhatWeOffer />
            <ScrollingText />
            <DiagonalCards />
            <Footer />
        </>
    );
}
