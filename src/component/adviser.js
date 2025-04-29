import React from 'react'
import MyAdvicer from '../assets/image/advicer.jpg';
import Prof from '../assets/image/Picture2.jpg';
import { Box, Card, CardContent, CardMedia, List, ListItem, Typography } from '@mui/material';

export default function Advicer() {
    const advicer = {
        profile: MyAdvicer,
        name: 'Melchor M. Amor, PhD',
        role: 'Tagapayo',
        statement: 'Nagtapos ng elementarya sa Gaboc Elementary School sa Mercedes, Camarines Norte at sekondaryang edukasyon sa Baesa Adventist Academy sa Caloocan City. Samantala, natapos naman niya ang kursong Batsilyer sa Pansekondaryang Edukasyon Major sa Filipino sa Naga View Adventist College sa Naga City.\n\nKumuha siya ng Master of Arts in Filipino sa University of Nueva Caceres, Naga City, at nagtapos ng Doctor of Philosophy in Filipino sa Bicol University, Legazpi City. Mula taong 2007 hanggang 2011, nagsilbi siyang instruktor sa mga bansang Thailand, Cambodia, at Laos. Sa pagbabalik niya sa Pilipinas, nagsilbi siya bilang guro sa pampublikong paaralan sa ilalim ng DepEd Camarines Norte mula 2012 hanggang 2017.\n\nNoong 2017 hanggang 2019, siya ay naging Language Cluster Head sa Central Bicol State University of Agriculture sa Pasacao, Camarines Sur. Sa kasalukuyan, siya ay konektado sa Camarines Norte State College bilang guro sa antas gradwado ng Master of Arts in Filipino at kasabay nito’y tagapagturo sa Kolehiyo ng Edukasyon.',
    }
    const prof = {
        profile: Prof,
        name: 'Ryan S. Rodriguez, PhD',
        role: 'Propersor sa Pananaliksik',
        furtherRole: 'Doktor ng Pilosopiya sa Filipino',
        intro: `Nagtapos ng kolehiyo sa La Consolacion College-Daet sa kursong Batsilyer sa Pansekondaryang Edukasyon major sa Filipino noong 2005. Nagtapos ng Master of Arts in Education major sa Filipino sa Universidad de Santa Isabel - Lungsod Naga. Nagkamit ng karangalan bilang Magna Cum Laude, pinakamahusay na Tesis at Presenter noong 2016. Nakamit ang titulong Doktor ng Pilosopiya sa Filipino noong 2024 sa Bicol University - Lungsod Legazpi at hinirang na pinakamahusay na disertasyon.`,

        bullets: [
            'Pangulo - Pambansang Samahan ng mga Tagapagtaguyod ng Wika at Panitikan, Inc. (PSTWPI). 2024 - kasalukuyan',
            'Pangalawang Pangulo - Pambansang Samahan ng Tagapagtaguyod ng Wika, Kultura at Sining ng Pilipinas (PSTWKSP). 2022 - kasalukuyan',
            'Kalihim - Samahan ng mga Direktor ng mga Sentro ng Wika at Kultura sa Pilipinas (SDSWKP). 2022 - kasalukuyan',
            'Punong Patnugot - BANYUHAY Dyornal ng Camarines Norte State College. 2023 - kasalukuyan',
            'Puno - Sentro ng Wika at Kultura sa Camarines Norte State College. 2022 - 2024',
            'Miyembro - Philippine Association of Coaches and Adjudicator for Culture and Arts. 2016 hanggang kasalukuyan.',
            'Mananaliksik',
            'Manunulat',
            'Lexicographer',
            'Tagasalin',
            'Kasalukuyang Katuwang na Propesor II na nagtuturo ng mga araling Filipino, Professional subjects at Life and Works of Rizal sa Camarines Norte State College - Kolehiyo ng Edukasyon, Daet, Camarines Norte',
        ]
    }

    return (
        <Box>
            <Typography variant='h4' sx={{
                fontWeight: 700,
                mb: 2,
                fontFamily: "sans-serif",
                color: "#000",
                textTransform: "uppercase",
                mb: 4,
            }}>
                tagapayo
            </Typography>
            <Box sx={{ display: 'flex', mb: 20, alignSelf: 'flex-start' }}>
                <Card
                    sx={{
                        // width: '100%',
                        maxWidth: 380,
                        mx: 'auto',
                        borderRadius: '12px',
                        boxShadow: "0px 4px 12lx rgba(0,0,0,0.1)",
                        overflow: 'hidden',
                        alignSelf: 'flex-start'
                    }}
                >
                    <CardMedia
                        component='img'
                        image={advicer.profile}
                        alt="advicer"
                    // sx={{ height: 480, objectFit: 'cover' }}
                    />
                    <CardContent
                        sx={{
                            backgroundColor: '#5E3023',
                            color: '#fff',
                            textAlign: 'center',
                            padding: '20px',
                            flexGrow: 1
                        }}
                    >
                        <Typography variant='h6' fontWeight={600}>
                            {advicer.name}
                        </Typography>
                        <Typography variant='body2' fontWeight={500} sx={{ opacity: 0.8 }}>
                            {advicer.role}
                        </Typography>
                    </CardContent>
                </Card>
                <Typography
                    variant="body1"
                    sx={{
                        color: "#444",
                        maxWidth: "600px",
                        mx: "auto",
                        mb: 4,
                        textAlign: 'justify',
                        fontSize: 16,
                        whiteSpace: 'pre-wrap',
                        padding: '1.5rem',
                        lineHeight: '1.8',
                        letterSpacing: '0.5px',
                    }}
                >
                    {advicer.statement}
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <Box sx={{
                    color: "#444",
                    maxWidth: "600px",
                    mx: "auto",
                    mb: 4,
                    textAlign: 'justify',
                    fontSize: 16,
                    lineHeight: '1.8',
                    letterSpacing: '0.5px',
                }}>
                    <Typography variant="body1" sx={{
                        color: "#444",
                        maxWidth: "600px",
                        mx: "auto",
                        mb: 4,
                        textAlign: 'justify',
                        fontSize: 16,
                        whiteSpace: 'pre-wrap',
                        lineHeight: '1.8',
                        letterSpacing: '0.5px',
                    }}>
                        {prof.intro}
                    </Typography>

                    <List sx={{ paddingLeft: '1.5rem', paddingBottom: '1rem', listStyleType: 'disc' }}>
                        {prof.bullets.map((item, index) => (
                            <ListItem
                                key={index}
                                sx={{
                                    display: 'list-item',
                                    padding: 0,
                                    marginBottom: '0.5rem',
                                }}
                            >
                                <Typography sx={{ fontSize: 16, lineHeight: '1.8', letterSpacing: '0.5px' }}>
                                    {item}
                                </Typography>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                {/* <Typography
                    variant="body1"
                    sx={{
                        color: "#444",
                        maxWidth: "600px",
                        mx: "auto",
                        mb: 4,
                        textAlign: 'justify',
                        fontSize: 16,
                        whiteSpace: 'pre-wrap',
                        padding: '1.5rem',
                        lineHeight: '1.8',
                        letterSpacing: '0.5px',
                    }}
                >
                    {prof.statement}
                </Typography> */}
                <Card
                    sx={{
                        width: '100%',
                        maxWidth: 380,
                        mx: 'auto',
                        borderRadius: '12px',
                        boxShadow: "0px 4px 12lx rgba(0,0,0,0.1)",
                        overflow: 'hidden',
                        alignSelf: 'flex-start'
                    }}
                >
                    <CardMedia
                        component='img'
                        image={prof.profile}
                        alt="advicer"
                    // sx={{ height: 480, objectFit: 'cover' }}
                    />
                    <CardContent
                        sx={{
                            backgroundColor: '#5E3023',
                            color: '#fff',
                            textAlign: 'center',
                            padding: '20px',
                            flexGrow: 1
                        }}
                    >
                        <Typography variant='h6' fontWeight={600}>
                            {prof.name}
                        </Typography>
                        <Typography variant='body2' fontWeight={500} sx={{ opacity: 0.8 }}>
                            {prof.role}
                        </Typography>
                        <Typography
                            variant='body1'
                            fontWeight={600}
                            sx={{ opacity: 0.95, fontStyle: 'italic', mt: 1 }}
                        >
                            {prof.furtherRole}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
}

