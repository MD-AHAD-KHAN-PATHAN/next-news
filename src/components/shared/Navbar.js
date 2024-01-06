"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import { IconButton, Stack } from '@mui/material';
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import Link from 'next/link';
import Header from './Header';


const navItems = [
    {
        route: 'Home',
        pathName: '/'
    },
    {
        route: 'Pages',
        pathName: '/pages'
    },
    {
        route: 'Category',
        pathName: '/categories/news?category=all-news'
    },
    {
        route: 'News',
        pathName: '/news'
    },
    {
        route: 'About',
        pathName: '/about'
    },
    {
        route: 'Contact',
        pathName: '/contact'
    },
];

function Navbar() {


    return (
        <>
        <Header></Header>
        <AppBar position="static">
            <Container maxWidth="xl" className='bg-black'>
                <Toolbar>
                    <Image src={logo} width={100} height={100} alt="logo" />
                    <Box className='w-full text-center'>
                        {navItems.map((item) => (
                            <Link key={item} href={item.pathName}>
                                <Button className='text-white'>{item.route}</Button>
                            </Link>
                        ))}
                    </Box>
                    <Box>
                        <Stack direction='row'>
                            <IconButton className='text-white'>
                                <LinkedIn />
                            </IconButton>
                            <IconButton className='text-white'>
                                <Instagram />
                            </IconButton>
                            <IconButton className='text-white'>
                                <Facebook />
                            </IconButton>
                            <IconButton className='text-white'>
                                <Twitter />
                            </IconButton>
                        </Stack>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        </>
    );
}
export default Navbar;