import React from "react";
import { Typography } from "@mui/material";

const TruncatedText = ({ text, maxSentences = 3 }) => {
  const sentences = text.split(".");

  const truncatedText =
    sentences.slice(0, maxSentences).join(".") +
    (sentences.length > maxSentences ? "..." : "");

  return (
    <Typography
      sx={{ color: "#FFFFFF", fontSize: 16, textAlign: "justify" }}
      variant="body1"
    >
      {truncatedText}
    </Typography>
  );
};

export default TruncatedText;
