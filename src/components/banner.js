import React from "react";

import C from "../constant/colors";
import S from "../constant/sizes";
import { appbarHeight, pagePadding } from "../constant/constant";
import { Box, Typography, Grid } from "@mui/material";

import banner from '../assets/image/banner.png'

export default function Banner() {
    
    return(
        <div>
            <Box sx={style.container}>
                <Box sx={style.container_two}>
                <Box sx={style.backgroundImageOverlay}></Box>
                <Box sx={style.contentContainer}>
                    <Grid container>
                        <Grid item>
                            <img src={banner}/>
                        </Grid>
                    </Grid>
                </Box>
                </Box>

            </Box>
        </div>
    );
}
const style ={
    container:{
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
        backgroundColor: C.mainBrown,
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
        flexDirection: 'column'
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