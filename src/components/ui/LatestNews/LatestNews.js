import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import bitcoin from "@/assets/topnews.png"


const LatestNews = () => {
    return (
        <Box className='my-20'>
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={bitcoin} width={800} alt="top news" />
                    </CardMedia>
                    <CardContent>
                        <p className="my-4 w-[120px] bg-red-600 text-white font-bold text-center py-1 rounded-sm">Technology</p>
                        <Typography gutterBottom variant="h4" component="div">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="my-2">
                            By Ahad Khan - Mar 18 2023
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
};

export default LatestNews;