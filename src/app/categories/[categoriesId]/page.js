'use client';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import img1 from "@/assets/Rectangle1.png";

const DynamicNewsPage = () => {
    return (
        <Box className='my-10'>
            <h1 className='mb-4 border-b-2 text-2xl font-bold pb-4'><span className='border-b-4 border-red-500 pb-4'>National News</span></h1>

            <Grid container rowSpacing={3} columnSpacing={3} className="mt-2">
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia>
                                <Image src={img1} width={400} alt="National News" />
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
                                <Image src={img1} width={400} alt="National News" />
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
                                <Image src={img1} width={400} alt="National News" />
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
                                <Image src={img1} width={400} alt="National News" />
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
                                <Image src={img1} width={400} alt="National News" />
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
                                <Image src={img1} width={400} alt="National News" />
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

export default DynamicNewsPage;