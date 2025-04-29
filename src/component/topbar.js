import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    useTheme,
    useMediaQuery,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Logo from '../assets/image/logo.png'
import { tabItems } from "../constant/string";
import { Link as RouterLink } from 'react-router-dom';

import C from '../constant/colors'

export default function TopBar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const [openDrawer, setOpenDrawer] = React.useState(false);

    const toggleDrawer = (open) => () => {
        setOpenDrawer(open);
    };

    const menu = [
        { id: 0, name: 'INTRODUKSYON', path: '/' },
        { id: 2, name: 'KASAYSAYAN', path: '/kasaysayan' },
        { id: 1, name: 'GAWI AT PANINIWALA', path: '/gawi at paniniwala' },
        { id: 3, name: 'PROSESO', path: '/proseso' },
        { id: 4, name: 'KONKLUSYON', path: '/konklusyon' },
        { id: 4, name: 'KONTAK', path: '/kontak' },
    ]

    return (
        <AppBar
            sx={{
                backgroundColor: '#5E3023',
                boxShadow: 'none',
                justifyContent: 'center',
                position: 'sticky',
                zIndex: (theme) => theme.zIndex.drawer + 1
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between', paddingX: isMobile ? 2 : 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <img src={Logo} alt="Temporary Logo" width={isMobile ? 30 : isTablet ? 32 : 35} height={isMobile ? 30 : isTablet ? 32 : 35} />
                    <Typography
                        component="div"
                        sx={{
                            color: '#FFFFFF',
                            fontSize: 18,
                        }}
                    >
                        E-BARIKS
                    </Typography>
                </Box>
                {isMobile ? (
                    <>
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon sx={{ color: '#100A05' }} />
                        </IconButton>
                        <Drawer
                            anchor="right"
                            open={openDrawer}
                            onClose={toggleDrawer(false)}
                        >
                            <Box

                                sx={{ width: 250 }}
                                role="presentation"
                                onClick={toggleDrawer(false)}
                                onKeyDown={toggleDrawer(false)}
                            >
                                <List>
                                    {menu.map((item) => (
                                        <ListItem key={item.id} disablePadding >
                                            <ListItemButton
                                                component={RouterLink}
                                                to={item.path}
                                                onClick={() => {
                                                    console.log("item", item.path);
                                                }}
                                            >
                                                <ListItemText
                                                    primary={item.name}
                                                    primaryTypographyProps={{
                                                        sx: {
                                                            fontSize: 18,
                                                            color: '#100A05',
                                                            textTransform: 'capitalize'
                                                        }
                                                    }}
                                                />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Drawer>
                    </>
                ) : (
                    <Box
                        sx={{
                            display: 'flex',
                            gap: isTablet ? 1 : 2,
                        }}
                    >
                        {menu.map((item) => (
                            <Button
                            key={item.id}
                            component={RouterLink}
                            to={item.path}
                            sx={{
                                color: '#FFFFFF',
                                backgroundColor: 'transparent',
                                transition: 'background-color 0.3s ease',
                                '&:hover': {
                                    color: '#5E3023',
                                    backgroundColor: 'white',
                                },
                                '&:active': {
                                    color: '#5E3023',
                                    backgroundColor: 'white',
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: 16,
                                    textTransform: 'capitalize'
                                }}
                            >
                                {item.name}
                            </Typography>
                        </Button>
                        ))}

                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
}