import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import bitcoin from "@/assets/topnews.png"


const LatestNews = () => {
    return (
        <Box className='my-20'>
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={bitcoin} width={800} alt="top news"/>
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
};

export default LatestNews;