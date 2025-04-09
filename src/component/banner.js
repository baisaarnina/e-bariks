import React from "react";

import C from "../constant/colors";
import S from "../constant/sizes";
import { appbarHeight, pagePadding } from "../constant/constant";
import { Box, Typography, Grid } from "@mui/material";

import banner from '../assets/image/banner.png'
import logo from '../assets/image/logo.png'

export default function Banner() {

    return (
        <Box sx={style.container}>
            <Box sx={style.container_two}>
                <Box sx={style.contentContainer}>
                    <Box xs={12} md={6}
                        component="img"
                        src={banner}
                        alt="banner"
                        sx={{
                            // width: '100%',
                            // height: 'auto',
                            // objectFit: 'cover',
                            borderRadius: 4, backgroundColor: 'yellow'
                        }}
                    />
                    <Box  xs={12} md={6} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        width: '100%',
                        textAlign: 'center',
                    }}>
                        <Box component="img" src={logo} alt="logo" sx={{ height: 100, width: 100 }} />
                        <Typography sx={style.title}>
                            E-BARIKS:
                        </Typography>
                        <Typography sx={style.subtitle}> Pamanang Tradisyunal na Kabuhayan sa Bayan ng Vinzons, Camarines Norte</Typography>
                    </Box>
                </Box>
            </Box>
        </Box >
    );
}
const style = {
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: pagePadding,
    },
    container_two: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: `calc(100vh - (${appbarHeight} + (${pagePadding}*2)))`,
        overflow: 'hidden',
        borderRadius: S.br16,
        backgroundColor: 'red'

    },
    contentContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 2,
        backgroundColor: '#5E3023',
        display: 'flex',
        flexDirection: 'row',
        gap: 4
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: { xs: S.fs24, md: S.fs32, lg: S.fs56 }
    },
    subtitleContainer: { width: { sm: S.s300, md: S.s800 } },
    subtitle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: { xs: S.fs6, md: S.fs8, lg: S.fs24 },
    },
}