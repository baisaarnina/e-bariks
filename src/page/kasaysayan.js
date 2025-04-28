import React from "react";
import { Box, Typography } from "@mui/material";
import MessageThread from "../component/messageThread";
import { pagePadding } from "../constant/constant";
import S from "../constant/sizes";
import C from "../constant/colors";

const messages = [
  {
    text: "Matagal nang na-uugnay ang paggawa ng tradisyunal na bariks sa mga lokal na mamamayan ng Vinzons, Camarines Norte. Sa bawat salinlahi, ang tradisyunal na paraan ng paggawa nito ay patuloy na isinasagawa, na siyang nagiging bahagi ng kanilang pamumuhay at kultura. Ang bariks, isang inuming alak na gawa sa Sasa o nipa, ay isang mahalagang pamanang kabuhayan na natatangi sa mga barangay ng Vinzons. Sa kabila ng paglipas ng panahon at ang pag-usbong ng makabagong teknolohiya, nananatiling buhay at matatag ang kasanayan sa paggawa ng bariks.",
    image: "kasaysayanOne.png"
  },
  {
    text: "Noong unang panahon, ang sasa o nipa ay tumutubo ng masagana sa mga baybaying-dagat at latian sa Vinzons. Dahil sa lokasyon ng kanilang mga barangay, ang mga mamamayan dito ay natutong gamitin ang mga halamang ito hindi lamang bilang materyales para sa iba’t ibang gamit, kundi bilang hilaw na sangkap sa paggawa ng bariks. Ayon sa mga kuwento ng matatanda, mula sa mga ninuno nila, natutunan ang kaalaman sa paggawa ng inuming ito, at sa paglipas ng mga taon, naging bahagi ito ng kanilang kabuhayan.",
    image: "kasaysayanTwo.png"
  },
  {
    text: 'Ang kasanayan sa paggawa ng bariks ay nagmula pa sa kanilang mga ninuno, gayunpaman may ilang nagsasabi na may mga kilalang tao sa komunidad ng bayan ng Vinzons na siyang nagpasimula ng ganitong kabuhayan sa lugar. Ang ilan pa nga ay nagbigay ng mga detalye tungkol sa pangalan ng mga taong unang nagpasimula ng paggawa ng bariks mula sa Sasa. "Bariks" o "barikolkol," ang pangalan ng inuming ito, ay naging popular sa buong lugar, at ito ay tanging hindi gawa sa niyog, kaya\'t itinuturing itong kakaibang lokal na alak kumpara sa lambanog.',
    image: "kasaysayanThree.png"
  },
  {
    text: "Ang paggawa ng bariks sa Vinzons ay naging isang makulay na bahagi ng kasaysayan ng kanilang bayan. Bagaman hindi malinaw kung kailan talaga ito nagsimula, ayon sa mga impormante, ang industriya ng bariks ay umusbong noong dekada 50’s o 60’s, at sa kabila ng mga pagsubok sa pag-unlad ng makabagong teknolohiya, nanatili itong isang mahalagang kabuhayan sa Vinzons. ",
    image: "kasaysayanFour.png"
  },
  {
    text: "Ang tradisyunal na paggawa ng bariks ay patuloy na isinasagawa sa kabila ng modernisasyon. Bagaman walang mga organisasyon o grupo na sumusuporta sa paggawa ng bariks, ito ay nananatiling buhay sa kanilang mga komunidad. Isinasabuhay nila ito bilang isang makulay na tradisyon, na ipinasa mula sa mga magulang at ninuno. Hindi ito naging hadlang sa mga pagsubok ng panahon, kundi nagsilbing simbolo ng kanilang dedikasyon at kasipagan.",
    image: "kasaysayanFive.png"
  },
  {
    text: "Sa mga kwento ng mga impormante, isang mahalagang detalye ang lumitaw: karamihan sa kanila ay natuto ng paggawa ng bariks mula sa murang edad, mula 11 hanggang 18 taong gulang. Nagsimula sila sa pamamagitan ng pagmamasid sa mga nakatatandang miyembro ng pamilya o sa mga bihasa sa paggawa ng bariks sa kanilang barangay. Ang kaalaman ay hindi pormal, kundi natutunan sa pamamagitan ng pagsasanay at praktikal na aplikasyon. Marami sa kanila ang mga pamilyang matagal nang gumagawa ng bariks, at ipinasa ang kasanayan mula sa isang henerasyon hanggang sa susunod. Sa ganitong paraan, naging bahagi ng kanilang araw-araw na buhay ang paggawa ng bariks, at marami sa kanila ang nagsasabing walang makapipigil sa kanilang dedikasyon sa gawaing ito.",
    image: "kasaysayanSix.png"
  },
  {
    text: "Ngunit, may ilang kuwento rin mula sa mga nagmula sa ibang lugar na nagsasabing natutunan nila ang paggawa ng bariks matapos silang mag-asawa ng mga taga-Vinzons. Isinasalaysay nila na mula sa pagmamasid at pagtuturo ng mga lokal, natutunan nilang gawin ang inuming ito at kalaunan ay naging bihasa na rin sa paggawa ng bariks.",
    image: "kasaysayanSeven.png"
  },
  {
    text: "Sa kabila ng mga pagsubok at pagbabago, patuloy ang tradisyunal na paggawa ng bariks sa Vinzons—isang buhay na patunay ng kasaysayan, kultura, at pagmamahal sa kanilang mga ninuno.",
    image: "kasaysayanEight.png"
  },
];

export default function Kasaysayan() {
  return (
    <Box sx={style.maincontainer}>
      <Typography sx={style.text}>KASAYSAYAN NG PAGABARIKS</Typography>
      <MessageThread messages={messages} sx={{textAlign:'justify'}}/>
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
  text: {
    fontSize: { xs: S.fs48 },
    fontWeight: "bold",
    color: C.mainBrown,
    position: "relative",
    display: "inline-block",
  },
};
