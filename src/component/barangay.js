import React from "react";

import { Box, Typography } from "@mui/material";
import homeData from "../json/home.json";
import { appbarHeight, pagePadding } from "../constant/constant";

export default function Barangay() {
    return (
        <Box sx={style.maincontainer}>
            <Box xs={12} md={6} textAlign='center' justifyContent='center'>
                <Typography
                    sx={{
                        fontSize: 28,
                        fontWeight: 'bold',
                        color: '#000000',
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
                    MGA BARANGAY SA VINZONS NA MAYROONG KABUHAYAN NG PAGBABARIKS
                </Typography>
                <Typography sx={{ fontSize: 16, marginBottom: 2, color: '#000000' }}>
                    {homeData.brgy1.text}
                </Typography>
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
        padding: pagePadding,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
    }

}
