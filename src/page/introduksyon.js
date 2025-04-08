import React from "react";
import Banner from "../component/banner";
import { Box } from "@mui/material";

import C from '../constant/colors';
import S from '../constant/sizes';
import banner from '../assets/image/banner.png'
import Pauna from "../component/pauna";


export default function Introduksyon() {
    return (
        <Box xs={12} sx={style.maincontainer}>
          <Banner/>
          <Box sx={style.container}>
            <Pauna/>
          </Box>
        </Box>
    );
}

const style = {
    maincontainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: C.primarybackground,
        position: 'relative',
        overflow: 'hidden',
        // padding: pagePadding,
    },
    container: {
        padding: { sm: S.sp60, md: S.sp100, lg: S.sp180 },
        gap: { sm: S.sp60, md: S.sp100, lg: S.sp160 },
        display: 'flex',
        flexDirection: 'column'
    }
}
