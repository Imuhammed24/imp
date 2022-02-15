import React from "react";
import imLogo from '../../../assets/images/logo.png'
import classes from "./Logo.module.css";

const Logo = () => <a href="/"><img className={classes.HeaderLogo} src={imLogo} alt=""/></a>

export default Logo;
