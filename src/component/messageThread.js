import React from "react";
import { Box, Typography } from "@mui/material";

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
      {/* Vertical line in center */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "50%",
          width: "3px",
          backgroundColor: "#8B5E3C",
          transform: "translateX(-50%)",
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
            {/* Left Side */}
            {isLeft ? (
              <>
                <Box sx={{ width: "45%", pr: 4, textAlign: "right" }}>
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
                    justifyContent: "center",
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
                </Box>

                <Box sx={{ width: "45%" }} />
              </>
            ) : (
              <>
                <Box sx={{ width: "45%" }} />
                {/* Dot */}
                <Box
                  sx={{
                    width: "10%",
                    display: "flex",
                    justifyContent: "center",
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
                </Box>
                {/* Right Side */}
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
