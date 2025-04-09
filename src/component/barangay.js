import React from "react";

import { Box, Typography, Card, CardContent, CardMedia, CardActionArea, CardActions, Button, Grid } from "@mui/material";
import homeData from "../json/home.json";
import { appbarHeight, pagePadding } from "../constant/constant";

import cagbalogo from '../assets/image/cagbalogo.png'
import mangcayo from '../assets/image/mangcayo.png'
import matango from '../assets/image/matango.png'

const brgy = [
    { id: 1, title: 'Cagbalogo', subtitle: ' Mahalagang bahagi na ng buhay ng mga lokal na mamamayan sa barangay Cagbalogo ang tradisyunal na pagbabariks. ', image: cagbalogo, action: '' },
    { id: 1, title: 'Mangcayo', subtitle: 'Hindi magpapahuli ang barangay ng Mangcayo pagdating sa produksyon ng bariks sa lalawigan ng Camarines Norte.', image: mangcayo, action: '' },
    { id: 1, title: 'Matango', subtitle: 'Isa ang barangay Matango sa mga komunidad sa bayan ng Vinzons, Camarines Norte na mayroong mahabang kasaysayan ng produksyon ng tradisyunal na pagbabariks katulad ng iba pang mga karatig barangay sa Vinzons.', image: matango, action: '' }
]

const cardColors = ['#001524', '#5E3023', '#001524']
export default function Barangay() {

    return (
        <Box sx={style.maincontainer}>
            <Box xs={12} md={6} textAlign='justify' justifyContent='center'>
                <Typography
                    sx={{
                        textAlign: 'center',
                        fontSize: 28,
                        fontWeight: 'bold',
                        color: '#000000',
                        position: 'relative',
                        display: 'inline-block',
                        marginBottom: 2,
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            left: 0,
                            bottom: -4,
                            width: '100%',
                            height: '2px',
                            borderRadius: 2,
                            backgroundColor: '#5E3023',
                        },
                    }}
                >
                    MGA BARANGAY SA VINZONS NA MAYROONG KABUHAYAN NG PAGBABARIKS
                </Typography>
                <Typography sx={{ fontSize: 16, marginBottom: 2, color: '#000000' }}>
                    {homeData.brgy1.text}
                </Typography>
            </Box>
            <Box
                sx={style.container}
            >
                {brgy.map((item, index) => (
                    <Card
                        key={index}
                        sx={{
                            width: '300px',
                            backgroundColor: cardColors[index % cardColors.length],
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            p: 2, borderRadius:2
                        }}
                    >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image={item.image}
                                alt={item.title || 'Card Image'}
                                sx={{ objectFit: 'cover', borderRadius: 2 }}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#FFFFFF' }}>
                                    {item.title}
                                </Typography>
                                <Typography sx={{ color: '#FFFFFF', fontSize: 16, textAlign: 'justify' }}>
                                    {item.subtitle}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions sx={{ justifyContent: 'center' }}>
                            <Button variant="contained">
                                {item.action || 'Learn More'}
                            </Button>
                        </CardActions>

                    </Card>
                ))}
            </Box>
        </Box>
    )
}


const style = {
    maincontainer: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: pagePadding,
    },
    container: {
        flexDirection: 'row',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 3,
    }

}
