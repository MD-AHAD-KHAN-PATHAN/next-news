'use client'
// import { getAllCategories } from "@/utils/getAllCategories";
import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

const CategoryList = () => {

    // const {data} = getAllCategories();
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
   
    useEffect(() => {
      fetch('https://the-news-portal-server.vercel.app/categories')
        .then((res) => res.json())
        .then((data) => {
          setData(data.data)
          setLoading(false)
        })
    }, [])
   
    return (
        <Box className='bg-gray-100 p-4 mt-32 rounded'>
            <Typography variant="h6">Categories</Typography>
            <p className="border mt-2"></p>
            <Stack rowGap={1} sx={{mt: 2.5}}>
                {
                    data?.map(category => 
                    <Button key={category.id} variant="outlined"><Link href={`news?category=${category.title.toLowerCase()}`}>{category.title}</Link></Button>)
                }
            </Stack>
        </Box>
    );
};

export default CategoryList;