import React from "react";
import classes from "./CircledUserImage.module.css";
import {Avatar} from "@mui/material";

// const CircledUserImage = () => <img className={classes.CircledUserImage} src={userImage} alt="img"/>
const CircledUserImage = props => <Avatar className={classes.CircledUserImage} src={props.image} alt={props.profile}/>

export default CircledUserImage;