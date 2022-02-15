import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../UI/Logo/Logo";
import userImage from '../../assets/images/man.jpg'
import gitIcon from '../../assets/svg/git-icon.svg'
import NavigationItems from "../NavigationItems/NavigationItems";
import CircledUserImage from "../UI/CircledUserImage/CircledUserImage";
import Button from "@mui/material/Button";
import MenuIcon from '@mui/icons-material/Menu';
import {ThemeProvider} from "@mui/material";
import {darkButton} from "../../MaterialThemes/Dark/darkTheme";

const Toolbar = props => {
    return (
        <div className={classes.Toolbar}>
            <div className={classes.DesktopToolbarContent}>
                <Logo/>
                <NavigationItems/>
                <div className={classes.RightContainer}>
                    <CircledUserImage image={gitIcon} imgAlt="git"/>
                    <CircledUserImage image={userImage} imgAlt="profile"/>
                </div>
            </div>
            <div className={classes.MobileToolbar}>
                <ThemeProvider theme={darkButton}>
                    <Button className={classes.SideNavToggle} color="dark" onClick={() => props.toggleDrawer('left', true)}><MenuIcon fontSize="large"/></Button>
                </ThemeProvider>

                <div className={classes.RightContainer}>
                    <Logo/>
                </div>
            </div>
        </div>
    )
}

export default Toolbar;
