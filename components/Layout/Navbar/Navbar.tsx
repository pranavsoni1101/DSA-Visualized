'use client'

import React from 'react';
import { Box, Button, Flex, 
         Image, Stack, useColorMode, 
         useColorModeValue, Text 
       } from '@chakra-ui/react';
import {BsSun, BsMoonStars} from "react-icons/bs";
import ResponsiveContainer from '../ResponsiveContainer';
import Link from 'next/link';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return(
        <>
            <Box
                py = "12px"
                bg = {useColorModeValue("gray.100", "gray.900")}
            >
                <ResponsiveContainer>
                    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                        {/* DSA Visualised LOGO */}
                        <Image 
                            h   = "14"
                            src = "/logo(1).png"
                            alt = 'DSA Visualized Logo'
                        />
                        <Flex alignItems={'center'}>
                            <Stack pr="16px" direction={'row'} spacing={7}>
                                <Link
                                    href= "/"
                                >
                                    <Text>
                                        Home
                                    </Text>
                                </Link>
                                <Link
                                    href= "/"
                                >
                                    OOPS
                                </Link>
                                <Link
                                    href= "/"
                                >
                                    DSA
                                </Link>
                            </Stack>
                                <Button 
                                    onClick = {toggleColorMode}
                                    variant = "ghost"
                                >
                                    {colorMode === 'light' ? 
                                        <BsMoonStars /> 
                                        : 
                                        <BsSun style = {{color: "yellow"}}/>
                                    }
                                </Button>
                        </Flex>
                    </Flex>
                </ResponsiveContainer>
            </Box>
        </>
    )
}

export default Navbar;