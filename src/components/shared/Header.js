import { Box, Container, Typography } from "@mui/material";
import headerImage from '@/assets/The Dragon News.png';
import Image from "next/image";
import { getCurrentDate } from "@/utils/getCurrentDate";
const Header = () => {
    const currentDate = getCurrentDate();
    return (
        <Box className='w-full my-6'>
            <Container>
                <Image className="mx-auto" src={headerImage} alt="logo" width={500} height={500}></Image>
                <Typography className="my-2" textAlign='center' color='gray'>Journalism Without Fear or Favour</Typography>
                <Typography textAlign='center'>{currentDate}</Typography>
            </Container>
        </Box>
    );
};

export default Header;