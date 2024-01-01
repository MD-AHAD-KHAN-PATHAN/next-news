'use client'
import LatestNews from "@/components/ui/LatestNews/LatestNews";
import { Grid } from "@mui/material";


const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <LatestNews></LatestNews>
      </Grid>
      <Grid item xs={4}>
        <h1>old news</h1>
      </Grid>
    </Grid>
  );
};

export default Home;