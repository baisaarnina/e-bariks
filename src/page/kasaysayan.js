import React from "react";
import { Box } from "@mui/material";
import MessageThread from "../component/messageThread";

const messages = [
  {
    text: "Marami ang may ugnay na ang paggawa ng tradisyonal na balut sa mga lokal na pamahalaan ng mga lalawigan sa Pilipinas. Bago pa man dumating ang mga Kastila sa bansa, ang mga sinaunang Pilipino ay gumagawa na ng balut at iba pang produktong pagkain. Sa mga lumang tala, ipinapakita na ang paggawa ng balut ay isang mahalagang bahagi ng kulturang Pilipino, hindi lamang bilang pagkain kundi bilang bahagi ng kabuhayan ng maraming pamilya. Sa pagdaan ng panahon, ang kasanayang ito ay naipasa mula henerasyon sa henerasyon, hanggang sa ito ay umabot sa kasalukuyang henerasyon ng mga gumagawa ng balut.",
  },
  {
    text: "Noong unang panahon, ang balut ay naging isa sa kabuhayan ng mga tao sa iba't ibang bahagi ng Pilipinas. Isa itong mahalagang produkto na iniluluwas sa ibang lugar, partikular na sa mga palengke sa Maynila. Ang mga lalawigan gaya ng Pateros ay kilalang tagagawa ng balut, at ito ay naging bahagi ng kanilang pagkakakilanlan. Dahil dito, nagkaroon ng mga pagsisikap upang mapabuti ang paggawa ng balut. Mula sa manu-manong paggawa hanggang sa paggamit ng mga makina, dumaan sa maraming pagbabago ang industriya ng balut.",
  },
  {
    text: "Ang kaalaman sa paggawa ng balut ay nagsimula sa kaalaman ng mga ninuno. Ito ay isang tradisyon na ipinamana mula sa mga magulang patungo sa kanilang mga anak. Ang mga bata ay natututo sa pamamagitan ng panonood at pagtulong sa kanilang mga magulang. Sa ganitong paraan, unti-unting natutunan ng bagong henerasyon ang tamang proseso ng paggawa ng balut — mula sa pag-aalaga ng itlog ng itik, pagsisigurado ng tamang temperatura, hanggang sa tamang oras ng paglalaga. Ang lahat ng ito ay mahalagang bahagi ng isang pamana ng kultura.",
  },
  {
    text: "Ang paggawa ng balut ay likas na bahagi rin ng maraming komunidad sa iba't ibang rehiyon. Sa bawat rehiyon, may kani-kaniyang istilo at pamamaraan ng paggawa ng balut. Ang ilan ay gumagamit ng tradisyonal na pag-init gamit ang ipa ng palay, samantalang ang iba ay gumagamit ng mga incubator. Anuman ang pamamaraan, ang layunin ay pareho — ang makagawa ng balut na may magandang kalidad. Sa mga probinsya, ang paggawa ng balut ay hindi lamang trabaho kundi isa ring pamumuhay.",
  },
  {
    text: "Ang lokal na pamahalaan ay may ginagampanang papel sa pag-unlad ng industriya ng balut. May mga pagsasanay at programang iniaalok para sa mga nais matutong gumawa ng balut. Bukod dito, may mga patakaran ding ipinatutupad upang masiguro ang kalinisan at kalidad ng produkto. Sa tulong ng mga ahensya ng gobyerno, tulad ng DTI at DA, nabibigyan ng suporta ang mga maliliit na negosyante. Ito ay nagbibigay daan sa mas maunlad na produksyon at mas malawak na distribusyon ng balut sa iba't ibang lugar sa bansa.",
  },
  {
    text: "Ang pagbabarik ay bahagi rin ng kultura ng Pilipinas. Sa bawat barangay, may mga taong gumagawa ng balut bilang kanilang hanapbuhay. Sa kabila ng makabagong teknolohiya, nananatiling buhay ang tradisyong ito dahil sa kahalagahan nito sa kabuhayan ng maraming Pilipino. Patuloy itong tinatangkilik ng mamamayan at tinutulungan ng pamahalaan upang mapanatili ang kalidad at kasaysayan ng produktong ito.",
  },
  {
    text: "Sa kabila ng mga pagbabago sa panahon, patuloy ang pag-usbong ng industriya ng pagbabarik. Sa pamamagitan ng teknolohiya, mas napapadali ang paggawa at mas napapabuti ang kalidad ng balut. Sa kasalukuyan, patuloy ang mga inobasyon upang mas mapalago pa ang industriya at mapanatili ang kahalagahan nito.",
  },
];

export default function Kasaysayan() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fce5d3", // warm beige
        overflowY: "auto",
        py: 4,
      }}
    >
      <MessageThread messages={messages} />
    </Box>
  );
}
