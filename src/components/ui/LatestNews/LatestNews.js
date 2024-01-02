import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import bitcoin from "@/assets/topnews.png"
import National from "@/assets/National.png"


const LatestNews = () => {
    return (
        <Box className='my-20'>
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={bitcoin} width={800} alt="top news" />
                    </CardMedia>
                    <CardContent>
                        <p className="my-4 w-[120px] bg-red-600 text-white font-semibold text-center py-1 rounded-sm">Technology</p>
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

            <Grid container rowSpacing={3} columnSpacing={3} className="mt-2">
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia>
                                <Image src={National} width={400} alt="National News" />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                EU’s New Sanctions Aim to Cut Russia Off From World Bank
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
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia>
                                <Image src={National} width={400} alt="National News" />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                EU’s New Sanctions Aim to Cut Russia Off From World Bank
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
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia>
                                <Image src={National} width={400} alt="National News" />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                EU’s New Sanctions Aim to Cut Russia Off From World Bank
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
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia>
                                <Image src={National} width={400} alt="National News" />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                EU’s New Sanctions Aim to Cut Russia Off From World Bank
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
                </Grid>
                
            </Grid>
        </Box>
    );
};

export default LatestNews;