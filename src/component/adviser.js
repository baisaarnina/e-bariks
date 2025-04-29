import React from 'react'
import MyAdvicer from '../assets/image/advicer.jpg';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function Advicer() {
    const advicer = {
        profile: MyAdvicer,
        name: 'Melchor M. Amor, PhD',
        role: 'Tagapayo',
        statement: 'Nagtapos ng elementarya sa Gaboc Elementary School sa Mercedes, Camarines Norte at sekondaryang edukasyon sa Baesa Adventist Academy sa Caloocan City. Samantala, natapos naman niya ang kursong Batsilyer sa Pansekondaryang Edukasyon Major sa Filipino sa Naga View Adventist College sa Naga City.\n\nKumuha siya ng Master of Arts in Filipino sa University of Nueva Caceres, Naga City, at nagtapos ng Doctor of Philosophy in Filipino sa Bicol University, Legazpi City. Mula taong 2007 hanggang 2011, nagsilbi siyang instruktor sa mga bansang Thailand, Cambodia, at Laos. Sa pagbabalik niya sa Pilipinas, nagsilbi siya bilang guro sa pampublikong paaralan sa ilalim ng DepEd Camarines Norte mula 2012 hanggang 2017.\n\nNoong 2017 hanggang 2019, siya ay naging Language Cluster Head sa Central Bicol State University of Agriculture sa Pasacao, Camarines Sur. Sa kasalukuyan, siya ay konektado sa Camarines Norte State College bilang guro sa antas gradwado ng Master of Arts in Filipino at kasabay nito’y tagapagturo sa Kolehiyo ng Edukasyon.',
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
            <Box sx={{display: 'flex'}}>
                <Card
                    sx={{
                        width: '100%',
                        maxWidth: 380,
                        mx: 'auto',
                        borderRadius: '12px',
                        boxShadow: "0px 4px 12lx rgba(0,0,0,0.1)",
                        overflow: 'hidden',
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
        </Box>
    )
}

