import ExploreDomains from '@/components/Internship/ExploreDomains';
import { InternHero } from '@/components/Internship/InternHero';
import InternshipRoadmap from '@/components/Internship/InternshipRoadmap';
import { WhyChooseUs } from '@/components/Internship/WhyChooseUs';
import Link from 'next/link';
import * as React from 'react';
import { FaDownLong } from 'react-icons/fa6';

export interface IAppProps {
}

export default function App (props: IAppProps) {
    return (
        <>
            <InternHero />
            <WhyChooseUs />
            <ExploreDomains />
            <InternshipRoadmap />
        </>
    )
}
