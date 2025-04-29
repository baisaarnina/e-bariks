import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Box, Divider } from "@mui/material";

import contactIcon from "../assets/icons/contact.svg";
import emailIcon from "../assets/icons/email.svg";
import locationIcon from "../assets/icons/location.svg";
import bdayIcon from "../assets/icons/bday.svg";

import France from '../assets/image/france.jpg';
import Christine from '../assets/image/christine.jpg'

const team = [
  {
    id: 1,
    profile: Christine,
    name: "France Mae Magana Cereno",
    kurso: "Batsilyer sa Agham ng Edukasyong Pansekundarya Medyor sa Filipino",
    email: "cerenofrancemae@gmail.com",
    number: "+63 955 826 6926",
    address: "P-2 Manlucugan, Vinzons, Camarines Norte ",
    bday: "Hulyo 19, 2004 "
  },
  {
    id: 2,
    profile: France,
    name: "Christine C. Cuevas ",
    kurso: "Batsilyer sa Agham ng Edukasyong Pansekundarya Medyor sa Filipino",
    email: "tincuevas03@gmail.com",
    number: "+63 909 060 0487",
    address: "Pob. 2 Basud, Camarines Norte ",
    bday: "Enero 05, 2003"
  },
];

export default function Team() {
  return (
    <Box sx={{ textAlign: "center" }}>
      {/* Header */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 2,
          fontFamily: "sans-serif",
          color: "#000",
          textTransform: "uppercase",
        }}
      >
        SINO KAMI?
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#444",
          maxWidth: "600px",
          mx: "auto",
          mb: 4,
        }}
      >
        Kami ay mga mag-aaral na  mula sa Kolehiyo ng Edukasyon - Camarines Norte State College na kasalukuyang nagpapakadalubhasa sa kursong Batsilyer sa Pansekondaryang Edukasyon medyor sa Filipino.
      </Typography>

      {/* Team Cards */}
      <Grid justifyContent='center'  sx={{display:'flex', flexDirection:'row', gap:2}}>
        {team.map((member) => (
          <Grid item xs={12} sm={6} md={4} key={member.id}>
            <Card
              sx={{
                width:'100%',
                maxWidth: 360,
                mx: "auto",
                borderRadius: "12px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
              }}
            >
              <CardMedia
                component="img"
                image={member.profile}
                alt={member.name}
                sx={{ height: 340, objectFit: "cover" }}
              />

              <CardContent
                sx={{
                  backgroundColor: "#5E3023",
                  color: "#fff",
                  textAlign: "center",
                  padding: "20px",
                  flexGrow:1
                }}
              >
                <Typography variant="h6" fontWeight={600}>
                  {member.name}
                </Typography>
                <Typography variant="body2" fontWeight={500} sx={{ opacity: 0.8 }}>
                  {member.kurso}
                </Typography>
                <Divider sx={{ backgroundColor: "#fff", opacity: 0.5, my: 2 }} />
                <Box display="flex" alignItems="center" justifyContent="center" flexDirection='row' gap={2}>
                  <Box mt={2} display="flex" alignItems="center" justifyContent="start" flexDirection='column' gap={2} >
                    <Box component="img" src={bdayIcon} alt="number" sx={{ width: 20, height: 20 }} />
                    <Box component="img" src={locationIcon} alt="number" sx={{ width: 20, height: 20 }} />
                    <Box component="img" src={emailIcon} alt="email" sx={{ width: 20, height: 20 }} />
                    <Box component="img" src={contactIcon} alt="number" sx={{ width: 20, height: 20 }} />
                  </Box>
                  <Box mt={1} display="flex" flexDirection='column' alignItems='self-start' gap={2}  >
                    <Typography variant="body2" >{member.bday}</Typography>
                    <Typography variant="body2" >{member.address}</Typography>
                    <Typography variant="body2" >{member.email}</Typography>
                    <Typography variant="body2" >{member.number}</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
