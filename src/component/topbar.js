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
                                    {tabItems.map((item) => (
                                        <ListItem key={item} disablePadding>
                                            <ListItemButton
                                                component={RouterLink}
                                                to={`/${item.toLowerCase() === 'introduksyon' ? '/' : item.toLowerCase()}`}
                                            >
                                                <ListItemText
                                                    primary={item}
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
                        {tabItems.map((item) => (
                            <Button
                                key={item}
                                component={RouterLink}
                                to={`/${item.toLowerCase() === 'INTRODUKSYON' ? '' : item.toLowerCase()}`}
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
                                    {item}
                                </Typography>
                            </Button>
                        ))}
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
}