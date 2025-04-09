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
  Grid,
  Modal,
} from "@mui/material";
import homeData from "../json/home.json";
import { appbarHeight, pagePadding } from "../constant/constant";

import cagbalogo from "../assets/image/cagbalogo.png";
import mangcayo from "../assets/image/mangcayo.png";
import matango from "../assets/image/matango.png";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";
import S from "../constant/sizes";
import C from "../constant/colors";
import TruncatedText from "../component/truncatedText";

const brgy = [
  {
    id: 0,
    title: "Cagbalogo",
    subtitle:
      "Mahalagang bahagi na ng buhay ng mga lokal na mamamayan sa barangay Cagbalogo ang tradisyunal na pagbabariks. Isa ang komunidad ng Cagbalogo sa mga barangay sa munisipalidad ng Vinzons na mayroong malawak na taniman at pinagkukunan ng Sasa o nipa sa lalawigan. Hindi ito nakapagtataka dahil sa heograpiya ng lugar na malapit lamang sa baybaying-dagat at napapalibutan ng iba't ibang likas na yaman. Kaya't halos nakatuon  sa  sa mga gawaing may kinalaman sa kanilang kapaligiran at likas na yaman tulad ng pangingisda at pagninipa ang kanilang mga hanapbuhay. Ngunit karamihan sa mga lokal na pamilya rito ang umaasa sa paggawa ng tradisyunal na bariks bilang kanilang pangunahing kabuhayan at pinagkakakitaan. Ang Sasa o nipa na dominante sa kanilang lugar ang siyang naging isang pangunahing hilaw na materyales sa paggawa ng bariks. Hanggang sa kasalukuyan, patuloy itong ginagamit at masasalamin sa pang-araw-araw nilang buhay. Sa paglipas ng mga panahon, naging mahalagang bahagi na rin ito ng kanilang kultura at pamumuhay. Produktong patuloy na ibinebenta at ipinagmamalaki ng kanilang lugar. Kaya't kilala ang komunidad ng Cagbalogo bilang isa sa mga barangay sa Vinzons na mayroong pangunahing produksyon ng bariks. Ang barangay na ito ang maituturing na may malaking bentahan o pagawaan ng bariks dahil na rin sa heograpiya at lawak ng tumutubong Sasa o nipa sa kanilang lugar.",
    image: cagbalogo,
    action: "",
  },
  {
    id: 1,
    title: "Mangcayo",
    subtitle:
      "Hindi magpapahuli ang barangay ng Mangcayo pagdating sa produksyon ng bariks sa lalawigan ng Camarines Norte. Kabilang ang barangay ng Mangcayo sa bayan ng Vinzons na sagana pagdating sa Sasa o nipa. Natural itong makikita sa kanilang mga lupain kaya't madali lamang na mapagkukunan ito ng mga hilaw na materyales na ginagamit sa paggawa ng bariks. Makikita agad ang matataas at makapal nitong mga dahon sa magkabilang gilid ng kalsada papunta pa lamang sa kanilang komunidad. Simpleng namumuhay ang mga mamamayan rito. Pawang agrikultural tulad ng pagtatanim o pagsasaka ang pangunahing kabuhayan. Ang paggawa ng bariks ang isa sa mga pangunahing kabuhayan nila hanggang sa kasalukuyang panahon. Nagkaroon ito ng mahalagang gampanin hindi lamang sa pamumuhay ng mga lokal na mamamayan kundi nakapag-ambag din sa makulay na kultura ng kanilang barangay. Hindi maitatanggi na masasalamin pa rin ang  produksyon ng bariks sa kanilang komunidad. Patuloy itong isinasabuhay at pinapatatag ng mga lokal na mamamayan sa barangay Mangcayo. Kaya't hindi maitatanggi na isa rin ang barangay na ito sa mga itinuturing na may malaking produksyon ng bariks katulad ng barangay Cagbalogo. Kung titingnan, hindi nagkakalayo ang dalawang barangay sa produksyon, sapagkat pareho silang nagsasagawa ng pagbabariks bilang kanilang pangunahing kabuhayan at pinagkakakitaan.  Ang barangay Mangcayo ang pangalawang maituturing na mayroong masagana at malawak na produksyon o paggawa ng bariks sa Vinzons.",
    image: mangcayo,
    action: "",
  },
  {
    id: 2,
    title: "Matango",
    subtitle:
      " Isa ang barangay Matango sa mga komunidad sa bayan ng Vinzons, Camarines Norte na mayroong mahabang kasaysayan ng produksyon ng tradisyunal na pagbabariks katulad ng iba pang mga karatig barangay sa Vinzons. Karaniwang umaasa ang mga mamamayan dito sa agrikultura partikular na sa paggamit ng Sasa o nipa sa paggawa ng bariks. Bukod pa sa ibang kabuhayan tulad ng pagtatanim at pagbebenta ng mga kakanin, hindi rin maitatanggi na sagana ang barangay na ito sa lawak ng taniman ng Sasa o nipa na siyang nagsisilbing alternatibong kabuhayan at produktong pinagkakakitaan ng mga pamilya rito. Nagsisilbi itong mahalagang bahagi ng kultura at pamumuhay ng lokal na komunidad. Noon pa man, isa na itong tradisyunal na kabuhayan at produktong ibinebenta. Kilala na ito  sa mga lokal na pamilihan at dinarayo rin ng ilang mga turista at negosyante mula sa ibang lugar. Sa kabila ng mga hamon sa produksyon at pagpapanatili nito, patuloy na ang barangay Matango bilang ang isa sa mga kilalang barangay na nagbibigay ng kaukulang pansin at halaga nito bilang kabuhayan at pagkakakilanlan. Bukod pa sa naunang dalawang barangay, ang barangay Matango ang maituturing na pangatlong mayroong malaking produksyon ng bariks sa Vinzons. ",
    image: matango,
    action: "",
  },
];

const cardColors = ["#001524", "#5E3023", "#001524"];
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
              <Button variant="contained" onClick={() => handleOpen(item)}>
                {item.action || "Learn More"}
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
              width: "100vw",
              height: "100vh",
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
                src={selectedItem.image}
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
                {selectedItem.title}
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
                    textAlign: "center",
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
