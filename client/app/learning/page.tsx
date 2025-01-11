import ContactForm from '@/components/Learning/ContactForm';
import LearningHero from '@/components/Learning/LearningHero';
import PopularSubjects from '@/components/Learning/PopularSubjects';
import RecentArticles from '@/components/Learning/RecentArticles';
import React from 'react';



const learning = () => {
    return (
        <section className="">
            {/* Hero section */}
            <LearningHero />
            {/* Popular Subjects section*/}
            <PopularSubjects />
            {/* Recent Articles Section */}
            <RecentArticles />
            {/* Contact Form section*/}
            <ContactForm />
        </section>
    );
};

export default learning;
