import React from 'react'
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import MuiDrawer from '@mui/material/Drawer';
import { styled, useTheme } from '@mui/material/styles';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { BarChartOutlined, CalendarTodayOutlined, HelpOutlineOutlined, MapOutlined, PeopleOutlined, PersonOutline, PieChartOutline, TimelineOutlined } from '@mui/icons-material';
import { ContactsOutlined } from '@mui/icons-material';
import { ReceiptOutlined } from '@mui/icons-material';
import { Avatar, Hidden, Tooltip, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { grey } from '@mui/material/colors';
const drawerWidth = 240;


const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);



const Array1 = [
    { text: "Dashboard", icon: <HomeOutlinedIcon />, path: '/' },
    { text: "Mange Team", icon: <PeopleOutlined />, path: '/team' },
    { text: "Contacts Information", icon: <ContactsOutlined />, path: '/contacts' },
    { text: "Invoices Balances", icon: <ReceiptOutlined />, path: '/invoices' },
];
const Array2 = [
    { text: "Profile Form", icon: <PersonOutline />, path: '/form' },
    { text: "Calendar", icon: <CalendarTodayOutlined />, path: '/calendar' },
    { text: "FAQ Page", icon: <HelpOutlineOutlined />, path: '/faq' }
];
const Array3 = [
    { text: "Bar Chart", icon: <BarChartOutlined />, path: '/bar' },
    { text: "Pie Chart", icon: <PieChartOutline />, path: '/pie' },
    { text: "Line Chart", icon: <TimelineOutlined />, path: '/line' },
    { text: "Geography Chart", icon: <MapOutlined />, path: '/geography' }
];




export default function SideBar({ open, handleDrawerClose }) {
    const theme = useTheme();
    const navigat = useNavigate();
    const location = useLocation();
    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />

            <Avatar sx={{ mx: 'auto', height: open ? 68 : 33, width: open ? 68 : 30, my: 1, border: "2px solid gray", transition: '0.25s' }} alt="Remy Sharp" src="public/Images/photo-1560179707-f14e90ef3623.jfif" />
            <Typography sx={{ fontSize: open ? 18 : 0, transition: '0.25s' }} align='center'>Nile Company</Typography>
            <Typography sx={{ fontSize: open ? 15 : 0, transition: '0.25s', color: theme.palette.info.main, mb: 1 }} align='center'>Eygpt</Typography>


            <Divider />
            <List>
                {Array1.map((item) => (
                    <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                        <Tooltip title={open ? null : item.text} placement='left'>
                            <ListItemButton
                                onClick={() => {
                                    navigat(item.path)
                                }}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    backgroundColor: location.pathname === item.path ? theme.palette.mode === 'dark' ? grey[800] : grey[300] : '',
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </Tooltip>
                    </ListItem>
                ))}
            </List>

            <Divider />
            <List>
                {Array2.map((item) => (
                    <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                        <Tooltip title={open ? null : item.text} placement='left'>

                            <ListItemButton
                                onClick={() => {
                                    navigat(item.path)
                                }}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    backgroundColor: location.pathname === item.path ? theme.palette.mode === 'dark' ? grey[800] : grey[300] : '',

                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </Tooltip>

                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {Array3.map((item) => (
                    <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                        <Tooltip title={open ? null : item.text} placement='left'>

                            <ListItemButton
                                onClick={() => {
                                    navigat(item.path)
                                }}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    backgroundColor: location.pathname === item.path ? theme.palette.mode === 'dark' ? grey[800] : grey[300] : '',

                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </Tooltip>

                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}
