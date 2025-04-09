import React from "react";
import { Box, Typography } from "@mui/material";
import S from "../constant/sizes";
import C from "../constant/colors";

const MessageThread = ({ messages }) => {
  return (
    <Box
      sx={{
        position: "relative",
        px: 4,
        py: 10,
        backgroundColor: "#fffaf5",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "50%",
          width: S.s3,
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
                <Box sx={{ width: "40%", pr: 4, textAlign: "right" }}>
                  <Typography
                    variant="body1"
                    sx={{ color: "#333", fontSize: "1rem" }}
                  >
                    {msg.text}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: "10%",
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      backgroundColor: "#8B5E3C",
                      borderRadius: "50%",
                    }}
                  />
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: "3px",
                      backgroundColor: C.mainBrown,
                    }}
                  />
                </Box>

                <Box sx={{ width: "55%" }} />
              </>
            ) : (
              <>
                <Box sx={{ width: "60%" }} />
                <Box
                  sx={{
                    width: "10%",
                    display: "flex",
                    justifyContent: "right",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: "3px",
                      backgroundColor: C.mainBrown,
                    }}
                  />
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      backgroundColor: "#8B5E3C",
                      borderRadius: "50%",
                    }}
                  />
                </Box>
                <Box sx={{ width: "45%", pl: 4, textAlign: "left" }}>
                  <Typography
                    variant="body1"
                    sx={{ color: "#333", fontSize: "1rem" }}
                  >
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
