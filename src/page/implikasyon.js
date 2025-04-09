import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import C from "../constant/colors";
import S from "../constant/sizes";
import { pagePadding } from "../constant/constant";
import implikasyonText from "../json/implikasyon.json";

import banner from "../assets/image/banner.png";
import impliImage from '../assets/image/implikasyon.png'
import paniniwalaOne from '../assets/image/paniniwala_one.png'

function Implikasyon() {
    return (
        <Box xs={12} sx={style.maincontainer}>

            {/* implikasyon */}
            <Box sx={style.section}>
                <Box sx={{

                }}>
                    <Typography sx={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 28,
                        color: '#5E3023',
                        fontWeight: 600,
                    }}>
                        IMPLIKASYON SA PAMUMUHAY
                    </Typography>
                    <Typography sx={{
                        fontSize: S.fs32,
                        fontSize: 28,
                        color: '#5E3023',
                        fontWeight: 600,
                    }}>
                        AT HAMONG KINAHAHARAP
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: S.sp32,
                    backgroundColor: '#5E3023',
                    borderRadius: '12px',
                    padding: S.sp32,
                }}>
                    <Typography sx={{
                        color: '#FDE5D4',
                        textAlign: 'justify',
                        fontSize: 16,
                        whiteSpace: 'pre-wrap',
                        padding: '1.5rem',
                        lineHeight: '1.8',
                        letterSpacing: '0.5px',
                    }}>
                        {implikasyonText.impliOne}
                    </Typography>
                    <Box
                        component='img'
                        src={impliImage}
                        sx={{
                            width: '100%',
                            height: '380px',
                            objectFit: 'cover',
                            objectPosition: 'center 12%'
                        }}
                    />
                    <Typography sx={{
                        color: '#FDE5D4',
                        textAlign: 'justify',
                        fontSize: 16,
                        whiteSpace: 'pre-wrap',
                        padding: '1.5rem',
                        lineHeight: '1.8',
                        letterSpacing: '0.5px',
                    }}>
                        {implikasyonText.impliTwo}
                    </Typography>
                </Box>
            </Box>

            {/* paniniwala */}
            <Box sx={style.section}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: S.sp32,
                    backgroundColor: '#001524',
                    borderRadius: '12px',
                    padding: S.sp32,

                }}>
                    <Box >
                        <Typography sx={{
                            fontSize: S.fs32,
                            color: '#FDE5D4',
                            fontWeight: 600,
                        }}>
                            MGA PANINIWALA PATUNGKOL
                        </Typography>
                        <Typography sx={{
                            fontSize: S.fs32,
                            color: '#FDE5D4',
                            fontWeight: 600,
                        }}>
                            SA BARIKS
                        </Typography>
                    </Box>

                    <Grid container spacing={S.sp32} sx={{
                    }}>
                        <Grid item size={6} >
                            <Typography sx={{
                                color: '#FDE5D4',
                                textAlign: 'justify',
                                whiteSpace: 'pre-wrap',
                                fontSize: 16,
                                
                            }}>
                                {implikasyonText.paniniwala}
                            </Typography>
                        </Grid>
                        <Grid container item size={6} >
                            <Grid item size={12}>
                                <Box
                                    component='img'
                                    src={paniniwalaOne}
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center 12%'
                                    }}
                                />
                            </Grid>
                            <Grid item size={12}>
                                <Box
                                    component='img'
                                    src={banner}
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center 12%'
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}
const style = {
    maincontainer: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: C.primarybackground,
        position: "relative",
        overflow: "hidden",
        padding: pagePadding,
        marginTop: S.sp32,
        gap: S.sp64,
    },
    section: {
        display: "flex",
        flexDirection: "column",
        gap: S.sp32,
        padding: '32px 16%',

    },
};

export default Implikasyon;
