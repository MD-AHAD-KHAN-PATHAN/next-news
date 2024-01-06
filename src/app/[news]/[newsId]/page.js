'use client';
import { Avatar, Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

const NewsDetailPage = ({ params }) => {

    const [newsData, setNewsData] = useState(null);

    useEffect(() => {
        fetch(`https://the-news-portal-server.vercel.app/news/${params.newsId}`,
            {
                cache: 'no-store',
            })
            .then(res => res.json())
            .then(data => {
                setNewsData(data.data);
            })
    }, [params.newsId])

    console.log(newsData);

    return (
        <Box className='my-10'>
            <Grid container rowSpacing={3} columnSpacing={3} className="mt-2">
                <Grid item xs={6}>
                    <Image src={newsData?.thumbnail_url} width={600} height={300} alt="National News" />
                    <Grid container rowSpacing={2} columnSpacing={3} className="mt-2">
                        <Grid item xs={6}>
                            <Image src={newsData?.image_url} width={300} height={200} alt="National News" />
                        </Grid>
                        <Grid item xs={6}>
                            <Image src={newsData?.image_url} width={300} height={200} alt="National News" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Typography gutterBottom variant="h5" component="div">
                        {newsData?.title}
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: 2,
                        gap: 2,
                    }}>
                        <Avatar src={newsData?.author.img} alt="author image"></Avatar>
                        <Typography variant="body2" color="text.secondary">
                            By {newsData?.author.name} - {newsData?.author.published_date}
                        </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" style={{
                        textAlign: 'justify',
                        whiteSpace: 'pre-line',
                        color: 'gray',
                    }}>
                        {newsData?.details}
                    </Typography>

                    <Typography variant="h6" sx={{
                        marginTop: 2,
                        marginBottom: 1,
                    }}>
                        ``Many desktop publishing packages and web page editors now use as their default model text!
                    </Typography>
                    <Typography>
                        --AHAD KHAN
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default NewsDetailPage;