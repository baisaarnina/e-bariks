import { Box } from "@mui/material";
import React from "react";
import Team from "../component/team";
import Advicer from "../component/adviser";

import C from '../constant/colors';
import S from '../constant/sizes';

export default function Kontak() {
    return (
        <Box sx={style.maincontainer}>
            <Box sx={style.container}>
                <Team />
                <Advicer />
            </Box>
        </Box>
    )
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
        padding: { sm: S.sp20, md: S.sp60, lg: S.sp100 },
        gap: { sm: S.sp20, md: S.sp60, lg: S.sp100 },
        display: 'flex',
        flexDirection: 'column'
    }
}