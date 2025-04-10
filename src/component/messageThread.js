import React from "react";
import { Box, Typography } from "@mui/material";
import S from "../constant/sizes";
import C from "../constant/colors";

import image from '../assets/image/kasaysayanOne.png';

const MessageThread = ({ messages }) => {
  return (
    <Box
      sx={{
        position: "relative",
        px: 4,
        py: 10,
      }}
    >
      <Box
        sx={{
          width: "5%",
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "49.7%",
            backgroundColor: C.mainBrown,
            width: S.s12,
            height: S.s12,
            borderRadius: "50%",
          }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          width: 2,
          left: "50%",
          backgroundColor: C.mainBrown,
        }}
      />

      {messages.map((msg, idx) => {
        const isLeft = idx % 2 === 0;

        return (
          <Box
            key={idx}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 10,
            }}
          >
            {!isLeft ? (
              <>
                <Box sx={{ width: "47%", pr: 4, textAlign: "right" }}>
                  <Typography sx={{
                    color: C.mainBlue,
                    textAlign: 'justify',
                    fontSize: 16,
                    whiteSpace: 'pre-wrap',
                    padding: '1.5rem',
                    lineHeight: '1.8',
                    letterSpacing: '0.5px',
                  }}>
                    {msg.text}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "5%",
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: S.s12,
                      height: S.s12,
                      backgroundColor: "#8B5E3C",
                      borderRadius: "50%",
                    }}
                  />
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: "2px",
                      backgroundColor: C.mainBrown,
                    }}
                  />
                </Box>

                <Box sx={{ width: "55%" }}>
                  <Box
                    component='img'
                    src={require(`../assets/image/${msg.image}`)}
                    sx={{
                      borderRadius: '16px',
                      width: '80%',
                      height: '80%',
                      objectFit: 'cover',
                      objectPosition: 'center 12%'
                    }}
                  />
                </Box>
              </>
            ) : (
              <>
                <Box sx={{ width: "53%" }} >
                  <Box
                    component='img'
                    src={require(`../assets/image/${msg.image}`)}
                    sx={{
                      borderRadius: '16px',
                      width: '80%',
                      height: '80%',
                      objectFit: 'cover',
                      objectPosition: 'center 12%'
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    width: "5%",
                    display: "flex",
                    justifyContent: "right",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: "2px",
                      backgroundColor: C.mainBrown,
                    }}
                  />
                  <Box
                    sx={{
                      width: S.s12,
                      height: S.s12,
                      backgroundColor: "#8B5E3C",
                      borderRadius: "50%",
                    }}
                  />
                </Box>
                <Box sx={{ width: "45%", pl: 4, textAlign: "left" }}>
                  <Typography sx={{
                    color: C.mainBlue,
                    textAlign: 'justify',
                    fontSize: 16,
                    whiteSpace: 'pre-wrap',
                    padding: '1.5rem',
                    lineHeight: '1.8',
                    letterSpacing: '0.5px',
                  }}>
                    {msg.text}
                  </Typography>
                </Box>
              </>
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default MessageThread;

const style = {
  label: {
    fontSize: { xs: S.fs24 },
    color: C.mainBrown,
  },
};
