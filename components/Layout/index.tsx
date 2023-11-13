import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
// import Footer from './Footer';
// import Navbar from './Navbar';
// import Navbar from './Navbar/index2';

interface LayoutProps {
    children: ReactNode | ReactNode[]
}

const Layout = ({children}: LayoutProps) =>  {
    return(
        <>
            {/* Navbar goes here */}
            {/* <Navbar /> */}
            {/* children will accept all the child components to be displayed */}
            <Box>
                {children}
            </Box>
            {/* <Footer /> */}
        </>
    )
}
export default Layout;