import { Box, Typography } from "@mui/material";
import StatueSrc from "../assets/image/image_statue.png";
import PlantSrc from "../assets/image/image_plant.png";

import { pagePadding } from "../constant/constant";
import C from "../constant/colors";
import S from "../constant/sizes";
import T from "../json/proseso.json";

const pictures = [
  require("../assets/image/drum.png"),
  require("../assets/image/bumbung.png"),
  require("../assets/image/container.png"),
  require("../assets/image/drum.png"),
  require("../assets/image/pump.png"),
  require("../assets/image/hose.png"),
  require("../assets/image/panggatong.png"),
  require("../assets/image/sasa_o_nipa.png"),
];

const itemsPerRow = 4;

const kasangkapan = [
  {
    path: pictures[0],
    title: "DRUM",
    subtitle: "Nagsisilbing lutuan ng mga naimbak na tuba. ",
  },
  {
    path: pictures[1],
    title: "BUMBUNG",
    subtitle:
      "Kawayan na ginagamit na nagsisilbing pangsahod sa tuba mula sa Sasa. ",
  },
  {
    path: pictures[2],
    title: "CONTAINER",
    subtitle: "Nagsisilbing imbakan ng mga nakakuhang tuba",
  },
  {
    path: pictures[3],
    title: "PANGKARET",
    subtitle:
      "Isang matulis na kagamitan tulad ng itak o sundang na ginagamit panghawan sa tangkay ng Sasa.",
  },
  {
    path: pictures[4],
    title: "WATER PUMP",
    subtitle:
      "Isang makina na ginagamit upang pataasin ang pressure ng tubig at mailipat ito sa ibabaw ng lutuan at mapadali ang paglamig ng singaw ng nilulutong tuba.",
  },
  {
    path: pictures[5],
    title: "HOSE",
    subtitle:
      "Isang tubo na daluyan ng nalutong bariks upang mabilis na mailipat sa container.",
  },
  {
    path: pictures[6],
    title: "PANGGATONG",
    subtitle:
      "Ginagamit tulad ng kahoy upang magpaningas sa pagluluto ng tuba.",
  },
  {
    path: pictures[7],
    title: "SASA O NIPA",
    subtitle: " Isang halaman  na naglalabas ng tu",
  },
];

export default function Proseso() {
  return (
    <Box sx={style.maincontainer}>
      {/* BODY START */}

      <Box
        sx={{
          px: { xs: 2, sm: 4, md: 10, lg: 20 },
          py: { xs: 6, md: 8 },
        }}
      >
        {/* LABEL 1 */}
        <Typography sx={style.text}>PROSESO NG PAGBABARIKS</Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: { xs: 4, md: "60px" },
            pt: { xs: 6, md: "80px" },
          }}
        >
          <Box
            sx={{
              position: "relative",
              height: { xs: "300px", sm: "400px", md: "520px" },
            }}
          >
            <Box
              sx={{
                height: "100%",
                bgcolor: "#1a1a1a",
                borderRadius: 5,
                zIndex: 0,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 25,
                left: 25,
                width: "100%",
                height: "100%",
                overflow: "hidden",
                borderRadius: 5,
                zIndex: 1,
              }}
            >
              <Box
                component="img"
                src={StatueSrc}
                alt="Vinzons Town Hall"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
          <Typography color="initial" sx={style.label}>
            {T.text1}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: { xs: 4, md: "64px" },
            pt: { xs: 6, md: "80px" },
          }}
        >
          {/* LABEL 2 */}
          <Typography sx={style.label}>{T.text2}</Typography>

          <Box
            sx={{
              position: "relative",
              height: { xs: "300px", sm: "400px", md: "520px" },
            }}
          >
            <Box
              sx={{
                height: "100%",
                bgcolor: "#1a1a1a",
                borderRadius: 5,
                zIndex: 0,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 25,
                left: 25,
                width: "100%",
                height: "100%",
                overflow: "hidden",
                borderRadius: 5,
                zIndex: 1,
              }}
            >
              <Box
                component="img"
                src={PlantSrc}
                alt="Vinzons Town Hall"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={style.textBox}>
        <Typography sx={style.containerText}>{T.text3}</Typography>
      </Box>

      <Typography color="initial" sx={style.text}>
        MGA KASANGKAPANG GINAGAMIT SA PAGBABARIKS
      </Typography>

      <Box sx={style.parentBox}>
        {kasangkapan.map((item, index) => {
          const row = Math.floor(index / itemsPerRow);
          const col = index % itemsPerRow;
          const isEven = (row + col) % 2 === 0;
          return (
            <Box
              key={index}
              bgcolor={isEven ? C.mainBrown : C.mainBlue}
              color="white"
              sx={style.childBoxes}
            >
              <Box
                component="img"
                src={item.path}
                alt={item.title}
                sx={{
                  width: "100%",
                  height: "280px",
                  objectFit: "cover",
                  borderRadius: 2,
                  mb: S.mp40,
                }}
              />
              <Typography sx={{ pb: S.mp12 }} fontSize={{ xs: S.fs48 }}>
                {item.title}
              </Typography>
              <Typography fontSize={{ xs: S.fs16 }}>{item.subtitle}</Typography>
            </Box>
          );
        })}
      </Box>

      {/* BODY END */}
    </Box>
  );
}

const style = {
  maincontainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: C.primarybackground,
    position: "relative",
    overflow: "hidden",
    padding: pagePadding,
    marginTop: S.sp32,
    gap: S.sp64,
  },
  textBox: {
    borderRadius: S.br4,
    backgroundColor: C.mainBlue,
    py: { xs: 4, md: 8 },
    px: { xs: 2, sm: 4 },
  },
  parentBox: {
    display: "grid",
    gridTemplateColumns: {
      xs: "repeat(1, 1fr)",
      sm: "repeat(2, 1fr)",
      md: "repeat(3, 1fr)",
      lg: "repeat(4, 1fr)",
    },
    gap: { xs: 2, sm: 3 },
    px: { xs: 2, sm: 4 },
  },
  childBoxes: {
    display: "flex",
    flexDirection: "column",
    borderRadius: { xs: S.br4, md: S.br8, lg: S.br16 },
    p: "24px",
  },
  containerText: {
    color: "white",
    fontSize: { xs: S.fs18, sm: S.fs24 },
  },
  text: {
    fontSize: { xs: S.fs48 },
    fontWeight: "bold",
    color: C.mainBrown,
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
  },
  label: {
    fontSize: { xs: S.fs16, md: S.fs18, lg: S.fs24 },
    color: C.textBrown,
    textAlign: "justify",
  },
};
