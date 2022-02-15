import React from "react";
import classes from './NavigationItems.module.css'
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = props =>{
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem>About</NavigationItem>
            <NavigationItem>Projects</NavigationItem>
            <NavigationItem>Contact</NavigationItem>
        </ul>
    )
}

export default NavigationItems;