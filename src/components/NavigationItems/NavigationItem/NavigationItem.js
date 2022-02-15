import React from "react";
import classes from './NavigationItem.module.css';
import TextButton from "../../UI/Buttons/TextButton/TextButton";

const NavigationItem = props => {
    return (
        <li className={classes.NavigationItem}>
            <TextButton className={classes.NavigationItemBtn}>{props.children}</TextButton>
        </li>
    )
}

export default NavigationItem;