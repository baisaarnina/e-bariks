import React from "react";
import { Typography, Box } from "@mui/material";
import homeData from "../json/home.json";
import sasa from '../assets/image/sasa.jpg'
import { appbarHeight, pagePadding } from "../constant/constant";

export default function Intro() {
    return (
        <Box sx={style.maincontainer}>
            <Box sx={style.container}>
                <Box xs={12} md={6} textAlign='justify' width='50%'>
                    <Typography
                        sx={{
                            fontSize: 28,
                            fontWeight: 'bold',
                            color: 'white',
                            position: 'relative',
                            display: 'inline-block',
                            marginBottom: 2,
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                bottom: -4,
                                width: '100%',
                                height: '2px',
                                borderRadius: 2,
                                backgroundColor: '#5E3023',
                            },
                        }}
                    >
                        INTRODUKSYON
                    </Typography>
                    <Typography sx={{ fontSize: 16, marginBottom: 2, color: 'white' }}>
                        {homeData.inrtro1.text}
                    </Typography>
                    <Typography sx={{ fontSize: 16, color: 'white' }}>
                        {homeData.inrtro2.text}
                    </Typography>
                </Box>
                <Box xs={12} md={6} width='50%'>
                    <Box
                        component="img"
                        src={sasa}
                        alt="Paunang Salita"
                        sx={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 2,
                        }}
                    />
                </Box>

            </Box>
        </Box>
    )
}

const style = {
    maincontainer: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: "#5E3023",
        padding: pagePadding,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        gap: 4,
        p:5
    }

}
