// 'use client'
import { getAllCategories } from "@/utils/getAllCategories";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";

const CategoryList = async () => {

    const {data} = await getAllCategories();

    return (
        <Box>
            <Typography variant="h6">Categories</Typography>
            <Divider/>
            <Stack rowGap={1} sx={{mt: 2.5}}>
                
            </Stack>
        </Box>
    );
};

export default CategoryList;