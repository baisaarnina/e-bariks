import { React, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Button,
} from "@mui/material";
import homeData from "../json/home.json";
import { appbarHeight, pagePadding } from "../constant/constant";

import cagbalogo from "../assets/image/cagbalogo.png";
import mangcayo from "../assets/image/mangcayo.png";
import matango from "../assets/image/matango.png";

import cagbalogo2 from "../assets/image/cagbalogo2.jpg";
import mangcayo2 from "../assets/image/mangcayo2.jpg";
import matango2 from "../assets/image/matango2.jpg";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";
import S from "../constant/sizes";
import C from "../constant/colors";
import TruncatedText from "../component/truncatedText";

const brgy = [
  {
    id: 0,
    title: "Cagbalogo",
    subtitle: homeData.cagbalogo.text,
    image: cagbalogo,
    image2: cagbalogo2,
    action: "",
  },
  {
    id: 1,
    title: "Mangcayo",
    subtitle: homeData.mangcayo.text,
    image: mangcayo,
    image2: mangcayo2,
    action: "",
  },
  {
    id: 2,
    title: "Matango",
    subtitle: homeData.matango.text,
    image: matango,
    image2: matango2,
    action: "",
  },
];

const cardColors = ["#001524", "#5E3023", "#001524"];
const buttonColors = ["#5E3023", "#001524", "#5E3023"];
export default function Barangay() {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  return (
    <Box sx={style.maincontainer}>
      <Box xs={12} md={6} textAlign="justify" justifyContent="center">
        <Typography
          sx={{
            textAlign: "center",
            fontSize: 28,
            fontWeight: "bold",
            color: "#000000",
            position: "relative",
            display: "inline-block",
            marginBottom: 2,
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
          MGA BARANGAY SA VINZONS NA MAYROONG KABUHAYAN NG PAGBABARIKS
        </Typography>
        <Typography sx={{ fontSize: 16, marginBottom: 2, color: "#000000" }}>
          {homeData.brgy1.text}
        </Typography>
      </Box>
      <Box sx={style.container}>
        {brgy.map((item, index) => (
          <Card
            key={index}
            sx={{
              width: "300px",
              backgroundColor: cardColors[index % cardColors.length],
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              p: 2,
              borderRadius: 2,
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title || "Card Image"}
                sx={{ objectFit: "cover", borderRadius: 2 }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "#FFFFFF" }}
                >
                  {item.title}
                </Typography>
                <TruncatedText text={item.subtitle} maxSentences={1} />
                {/* <Typography
                  sx={{ color: "#FFFFFF", fontSize: 16, textAlign: "justify" }}
                >
                  {item.subtitle}
                </Typography> */}
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button variant="contained" sx={{ backgroundColor: buttonColors[index % buttonColors.length],color:'white'}}onClick={() => handleOpen(item)}>
                {item.action || "Matuto pa"}
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
      <AnimatePresence>
        {open && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(43, 28, 8, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1300,
            }}
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "white",
                borderRadius: S.br16,
                padding: S.mp40,
                width: "80%",
                maxWidth: 600,
                position: "relative",
              }}
            >
              <CloseIcon
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  top: S.s16,
                  right: S.s16,
                  cursor: "pointer",
                  color: C.textBrown,
                }}
              />
              <Box
                component="img"
                src={selectedItem.image2}
                alt={selectedItem.title}
                sx={{
                  height: "400px",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: S.br8,
                  mb: 2,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontSize: S.fs28,
                  fontWeight: "bold",
                  color: C.textBrown,
                }}
              >
                {`Baranggay ${selectedItem.title}`}
              </Typography>

              <Box
                sx={{
                  maxHeight: "200px",
                  overflowY: "auto",
                  paddingRight: "10px",
                }}
              >
                <Typography
                  sx={{
                    textAlign: "justify",
                    fontSize: S.fs16,
                    color: C.textBrown,
                  }}
                >
                  {selectedItem.subtitle}
                </Typography>
              </Box>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}

const style = {
  maincontainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: pagePadding,
  },
  container: {
    flexDirection: "row",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 3,
  },
};
