import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import National from "@/assets/National.png"
import sidebar2 from "@/assets/sidebar2.png"
const Sidebar = () => {
    return (
        <Box className="my-10">
            <h1 className='mb-5 border-b-2 text-2xl font-bold pb-4'><span className='border-b-4 border-red-500 pb-4'>Chottogram</span></h1>
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={National} width={400} alt="top news" />
                    </CardMedia>
                    <CardContent>
                        <p className="my-4 w-[120px] bg-red-600 text-white font-semibold text-center py-1 rounded-sm">Technology</p>
                        <Typography gutterBottom variant="h6" component="div">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="my-2">
                            By Ahad Khan - Mar 18 2023
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Box>
                <Grid container rowSpacing={1} columnSpacing={1} className="mt-2">
                    <Grid item xs={3}>
                        <h1 className='bg-gray-200 h-full rounded'></h1>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography gutterBottom variant="h7">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="my-2">
                            Mar 18 2023
                        </Typography>
                    </Grid>
                </Grid>
                <h1 className='border mt-4'></h1>
                <Grid container rowSpacing={1} columnSpacing={1} className="mt-2">
                    <Grid item xs={3}>
                        <h1 className='bg-gray-200 h-full rounded'></h1>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography gutterBottom variant="h7">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="my-2">
                            Mar 18 2023
                        </Typography>
                    </Grid>
                </Grid>
                <h1 className='border mt-4'></h1>
                <Grid container rowSpacing={1} columnSpacing={1} className="mt-2">
                    <Grid item xs={3}>
                        <h1 className='bg-gray-200 h-full rounded'></h1>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography gutterBottom variant="h7">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="my-2">
                            Mar 18 2023
                        </Typography>
                    </Grid>
                </Grid>
                <h1 className='border mt-4'></h1>
                <Grid container rowSpacing={1} columnSpacing={1} className="mt-2">
                    <Grid item xs={3}>
                        <h1 className='bg-gray-200 h-full rounded'></h1>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography gutterBottom variant="h7">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="my-2">
                            Mar 18 2023
                        </Typography>
                    </Grid>
                </Grid>
                <h1 className='border mt-4'></h1>
                <Grid container rowSpacing={1} columnSpacing={1} className="mt-2">
                    <Grid item xs={3}>
                        <h1 className='bg-gray-200 h-full rounded'></h1>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography gutterBottom variant="h7">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="my-2">
                            Mar 18 2023
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={1} className="mt-2">
                    <Grid item xs={12}>
                        <Image src={sidebar2} alt='sidebar image'/>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Sidebar;