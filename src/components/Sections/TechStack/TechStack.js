import React from "react";
import classes from './TechStack.module.css';
import {Grid} from "@mui/material";
import djangoLogo from '../../../assets/images/techStack/django-logo.png';
import gitLogo from '../../../assets/images/techStack/git-logo.png';
import linuxLogo from '../../../assets/images/techStack/linux-logo.png';
import reactLogo from '../../../assets/images/techStack/react-logo.png';
import pythonLogo from '../../../assets/images/techStack/python.png';
import webLogo from '../../../assets/images/techStack/webScript.png';

const TechStack = props => {
    return (
        <div className={classes.TechStack}>
                <div className={classes.TechStackContent}>
                <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                    <Grid item xs={2}>
                        <img className={classes.TechStackImages} src={webLogo} alt="webLogo"/>
                    </Grid>
                    <Grid item xs={2}>
                        <img className={classes.TechStackImages} src={pythonLogo} alt="pythonLogo"/>
                    </Grid>
                    <Grid item xs={2}>
                        <img className={classes.TechStackImages} src={reactLogo} alt="reactLogo"/>
                    </Grid>
                    <Grid item xs={2}>
                        <img className={classes.TechStackImages} src={djangoLogo} alt="djangoLogo"/>
                    </Grid>
                    <Grid item xs={2}>
                        <img className={classes.TechStackImages} src={gitLogo} alt="gitLogo"/>
                    </Grid>
                    <Grid item xs={2}>
                        <img className={classes.TechStackImages} src={linuxLogo} alt="linuxLogo"/>
                    </Grid>
                </Grid>
                <p>Listed above are names/logos of Ishaq's <span className={classes.BlueColor}>major</span> Software Development stack.</p>
            </div>
        </div>
    )
}

export default TechStack