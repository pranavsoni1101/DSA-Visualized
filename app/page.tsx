import HomeSVG from '@/components/HomeSVG';
import Section from '@/components/Section/Section';
import SectionContent from '@/components/Section/SectionContent';
import { Button, Container, Flex, Text,Heading, Stack } from '@chakra-ui/react';
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
                <Container maxW={'5xl'}>
                    <Stack
                        textAlign={'center'}
                        align={'center'}
                        spacing={{ base: 8, md: 10 }}
                        py={{ base: 20, md: 28 }}>
                        <Heading
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}
                    >
                        <Text
                            as={'span'}
                            position={'relative'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: '30%',
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: 'yellow.400',
                                zIndex: -1,
                            }}
                        >
                            Mastering
                        </Text>
                        {' '}Data Structures and Algorithms{' '}
                        <Text as={'span'} color={'#FFD763'}>
                            simplified.
                        </Text>
                        </Heading>
                        <Text 
                            color={'gray.500'} 
                            maxW={'3xl'}
                        >
                            Embark on a journey where complex concepts come to life, 
                            guiding you through the intricate world of DSA with clarity 
                            and hands-on visualizations, ensuring a seamless and 
                            enjoyable learning adventure.
                        </Text>
                        <Stack spacing={6} direction={'row'}>
                        <Button
                            rounded={'full'}
                            px={6}
                            colorScheme={'orange'}
                            bg={'#FFD763'}
                            _hover={{ bg: 'yellow.500' }}>
                            Get started
                        </Button>
                        <Button rounded={'full'} px={6}>
                            Learn more
                        </Button>
                        </Stack>
                        <Flex w={'full'}>
                        <HomeSVG  />
                        </Flex>
                    </Stack>
                </Container>
        </>
    )
}

export default Home;