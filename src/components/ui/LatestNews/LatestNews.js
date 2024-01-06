import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import bitcoin from "@/assets/topnews.png"
import Rectangle1 from "@/assets/Rectangle1.png"
import Rectangle2 from "@/assets/Rectangle2.png"
import Rectangle3 from "@/assets/Rectangle3.png"
import Rectangle4 from "@/assets/Rectangle4.png"
import { useEffect, useState } from "react";


const LatestNews = () => {

    const [latestData, setLatestData] = useState([]);

    useEffect(() => {
        fetch('https://the-news-portal-server.vercel.app/all-news',
            {
                next: {
                    revalidate: 30,
                },
            })
            .then(res => res.json())
            .then(data => {
                setLatestData(data?.data);
            })
    }, [])

    console.log(latestData[0]);

    return (
        <Box className='my-10'>
            <h1 className='mb-5 border-b-2 text-2xl font-bold pb-4'><span className='border-b-4 border-red-500 pb-4'>International News</span></h1>
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={latestData[0]?.thumbnail_url} width={800} height={300} alt="top news" />
                    </CardMedia>
                    <CardContent>
                        <p className="my-4 w-[120px] bg-red-600 text-white font-semibold text-center py-1 rounded-sm">{latestData[0]?.category}</p>
                        <Typography gutterBottom variant="h4" component="div">
                            {latestData[0]?.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="my-2">
                            By {latestData[0]?.author.name} - {latestData[0]?.author.published_date}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" style={{
                            textAlign: 'justify'
                        }}>
                            {latestData[0]?.details.length > 200 ? latestData[0]?.details.slice(0, 200) + "...." : latestData[0]?.details}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Grid container rowSpacing={3} columnSpacing={3} className="mt-2">
                {
                    latestData.slice(3, 8).map(news => <Grid key={news._id} item xs={6}>
                        <Card>
                            <CardActionArea>
                                <CardMedia sx={{
                                    "& img": {
                                        width: "100%",
                                        height: "250px",
                                    }
                                }}>
                                    <Image src={news.thumbnail_url} width={400} height={200} alt="National News" />
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {news.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" className="my-2">
                                        By {news?.author.name} - {news?.author.published_date}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" style={{
                                        textAlign: 'justify',
                                    }}>
                                        {news.details.length > 180 ? news.details.slice(0, 180) + "...." : news.details}
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

export default LatestNews;