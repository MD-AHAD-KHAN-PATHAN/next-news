'use client';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import img1 from "@/assets/Rectangle1.png";
import { useEffect, useState } from "react";

const DynamicNewsPage = ({ params, searchParams }) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://the-news-portal-server.vercel.app/news?category=${searchParams.category}`, {
            cache: 'no-store',
        })
            .then((res) => res.json())
            .then(data => {
                setData(data.data)
            })
    }, [searchParams.category])

    console.log(data);

    return (
        <Box className='my-10'>
            <h1 className='mb-4 border-b-2 text-2xl font-bold pb-4'><span className='border-b-4 border-red-500 pb-4'>National News</span></h1>

            <Grid container rowSpacing={3} columnSpacing={3} className="mt-2">
                {
                    data?.map(category => <Grid key={category._id} item xs={6}>
                        <Card>
                            <CardActionArea>
                                <CardMedia sx={{
                                    "& img": {
                                        width: "100%",
                                        height: "250px",
                                    }
                                }}>
                                    <Image src={category?.thumbnail_url} width={200} height={200} alt="National News" />
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {category.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" className="my-2">
                                        By {category.author.name} - {category.author.published_date}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {category.details.length>200 ? category.details.slice(0, 200)+"....": category.details}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>)
                }
            </Grid>
        </Box>
    );
};

export default DynamicNewsPage;