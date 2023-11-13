import Section from '@/components/Section/Section';
import SectionContent from '@/components/Section/SectionContent';
import { Heading } from '@chakra-ui/react';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'DSA Visualized',
    description: 'Unlock the world of Data Structures and Algorithms through captivating animations at DSA Visualized, your gateway to visually engaging and innovative learning.',
    keywords: 'DSA, Data Structures, Algorithms, Visualized, Animation, Learn DSA, Coding, Programming, Interactive Learning'
}


const Home = () => {
    return (
        <>
            <Section>
                <SectionContent>
                    <Heading>
                        This home of dsa visusalised
                    </Heading>
                </SectionContent>
            </Section>
        </>
    )
}

export default Home;