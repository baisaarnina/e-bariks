import { Box, Typography } from '@mui/material'
import React from 'react'

import { pagePadding } from '../constant/constant';
import C from '../constant/colors';
import S from '../constant/sizes'

import konklusyonData from '../json/implikasyon.json';
function Konklusyon() {
    return (
        <Box xs={12} sx={style.maincontainer}>
            <Box sx={style.section}>
                <Typography
                    gutterBottom
                    sx={{
                        fontSize: 28,
                        fontWeight: "bold",
                        color: C.mainBrown,
                        position: "relative",
                        display: "inline-block",
                        // marginBottom: 2,
                        "&::after": {
                            content: '""',
                            position: "absolute",
                            left: 0,
                            bottom: -4,
                            width: "100%",
                            height: "2px",
                            borderRadius: 2,
                            backgroundColor: "#5E3023",
                        },
                    }}
                >
                    KONKLUSYON
                </Typography>
                <Typography sx={{
                    color: C.mainBlue,
                    textAlign: 'justify',
                    fontSize: 16,
                    whiteSpace: 'pre-wrap',
                    padding: '1.5rem',
                    lineHeight: '1.8',
                    letterSpacing: '0.5px',
                }}>
                    {konklusyonData.konlusyon}
                </Typography>

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
        gap: S.sp32,
    },
    section: {
        display: "flex",
        flexDirection: "column",
        // gap: S.sp32,
        padding: '32px 16%',
    },
};

export default Konklusyon;