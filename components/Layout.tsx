import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import Navbar from './Navbar';

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
        <Head>
            <title>Real Estate</title>
        </Head>
        <Box maxWidth="1280" m='auto'>
            <header>
                <Navbar />
            </header>
            <main>{children}</main>
            <footer>footer</footer>
        </Box>
    </>
  )
}

export default Layout