import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import homeData from "../json/home.json";
import Pauna1 from "../assets/image/pauna1.png";

export default function Pauna() {
  return (
    <Box sx={{ width: '100%', p: 4 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Column: Text */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: 'justify' }}>
            <Typography
              sx={{
                fontSize: 28,
                fontWeight: 'bold',
                color: '#5E3023',
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
              Paunang Salita
            </Typography>

            <Typography sx={{ fontSize: 16, marginBottom: 2 }}>
              {homeData.pauna1.text}
            </Typography>
            <Typography sx={{ fontSize: 16 }}>
              {homeData.pauna2.text}
            </Typography>
          </Box>
        </Grid>

        {/* Right Column: Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={Pauna1}
            alt="Paunang Salita"
            sx={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              borderRadius: 2,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
