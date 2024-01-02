"use client"

import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {

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
            pathName: '/category'
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

    return (
        <Box className='bg-black px-2 py-20'>
            <Container>
                <Box className='w-full text-center'>
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
                </Box>
                <Box className='w-full text-center'>
                        {navItems.map((item) => (
                            <Link key={item} href={item.pathName}>
                                <Button className='text-white'>{item.route}</Button>
                            </Link>
                        ))}
                    </Box>
                    <Typography color='gray' variant='body2' textAlign='center'>@2024 The Next News. Design by Ahad Khan Pathan</Typography>
            </Container>
        </Box>
    );
};

export default Footer;