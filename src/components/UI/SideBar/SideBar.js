import React from "react";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import {Box, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import BuildIcon from '@mui/icons-material/Build';

const SideBar = props => {
    const sideNavItems = [
        {name: 'Home', url: '/home', icon: <HomeIcon />},
        {name: 'About', url: '/about', icon: <InfoIcon />},
        {name: 'Projects', url: '/projects', icon: <BuildIcon />},
        {name: 'Services', url: '/services', icon: <BusinessCenterIcon />},
        {name: 'Contact', url: '/contact-us', icon: <SupportAgentIcon />}
    ]
    const list = (anchor) => (
        <Box
            sx={{width: 250}}
            role="presentation"
            onClick={() => props.toggleDrawer(anchor, false)}
            onKeyDown={() => props.toggleDrawer(anchor, false)}
        >
            <List>
                {sideNavItems.map((item, index) => (
                    <ListItem button key={item.name}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.name}/>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <React.Fragment>
            <SwipeableDrawer
                anchor='left'
                open={props.showSideBar}
                onClose={() => props.toggleDrawer('left', false)}
                onOpen={() => props.toggleDrawer('left', true)}>
                {list('left')}
            </SwipeableDrawer>
        </React.Fragment>
    )
}

export default SideBar;
