import React from "react";

import C from "../constant/colors";
import S from "../constant/sizes";
import { appbarHeight, pagePadding } from "../constant/constant";
import { Box, Typography, Grid } from "@mui/material";

import banner from '../assets/image/banner.png'
import logo from '../assets/image/logo.png'

export default function Banner() {

    return (
        <div>
            <Box sx={style.container}>
                <Box sx={style.container_two}>
                    {/* <Box sx={style.backgroundImageOverlay}></Box> */}
                    <Box sx={style.contentContainer}>
                        <Grid container spacing={8} alignItems="center">
                            {/* Banner Image */}
                            <Grid item xs={12} md={6}>
                                <Box
                                    component="img"
                                    src={banner}
                                    alt="banner"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: 4,
                                    }}
                                />
                            </Grid>

                            {/* Logo + Text Section */}
                            <Grid
                                item
                                xs={12}
                                md={6}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 2,
                                    textAlign: 'center',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={logo}
                                    alt="logo"
                                    sx={{
                                        height: 190,
                                        width: 190,
                                    }}
                                />
                                <Typography
                                    sx={{
                                        fontSize: 28,
                                        fontWeight: 'bold',
                                        color: 'white',
                                        position: 'relative',
                                        display: 'inline-block',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            left: 0,
                                            bottom: -4,
                                            width: '100%',
                                            height: '2px',
                                            borderRadius: 2,
                                        },
                                    }}
                                >
                                    E-BARIKS:
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: 24,
                                        color: 'white',
                                        position: 'relative',
                                        display: 'inline-block',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            left: 0,
                                            bottom: -4,
                                            width: '100%',
                                            height: '2px',
                                            borderRadius: 2,
                                            padding:10
                                        },
                                    }}
                                >
                                    Pamanang Tradisyunal na Kabuhayan sa Bayan ng Vinzons, Camarines Norte
                                </Typography>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>

            </Box>
        </div>
    );
}
const style = {
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: C.mainBrown,
        padding: pagePadding,
    },
    container_two: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: `calc(100vh - (${appbarHeight} + (${pagePadding}*2)))`,
        overflow: 'hidden',
        borderRadius: S.br16,

    },
    backgroundImageOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.6,
        backgroundColor: '#0F2410',
        borderRadius: S.sp16,

    },
    contentContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        flexDirection: 'column',
        backgroundColor: '#5E3023'

    },
    title: {
        color: C.primaryText,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: { xs: S.fs24, md: S.fs32, lg: S.fs48 }
    },
    subtitleContainer: { width: { sm: S.s300, md: S.s800 } },
    subtitle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: { xs: S.fs6, md: S.fs8, lg: S.fs12 },
    },
}