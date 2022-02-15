import React from "react";
import classes from './LandingIntro.module.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from "@mui/material/Button";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia, Chip, Grid,
    ImageList,
    ImageListItem,
    Paper,
    styled,
    Typography
} from "@mui/material";
import guruImg from '../../../assets/images/LandingIntro/guru.png'
import lecturerEval from "../../../assets/images/LandingIntro/lecturerEval.png";
import msptiImg from "../../../assets/images/LandingIntro/mspti.png";
import cryptographyImg from "../../../assets/images/LandingIntro/cryptography.jpg";

const LandingIntro = props => {

    return (
        <div className={classes.LandingIntro}>
            <div className={classes.LandingIntroContainer}>
                <div className={classes.LandingIntroLeft}>
                    <div className={classes.LandingIntroLeftContainer}>
                        <h1>The <span className={classes.BlueColor}>Tech Bro</span> you want to work with</h1>
                        <p className={classes.ShortHeadingDescription}>
                            ISHAQ MUHAMMED is a cybersecurity specialist and a software engineer who is
                            very passionate about delivering secured, functional, and user-loving
                            softwares which solves problems for people.
                        </p>
                        <Button classes={classes.PrimaryButton} variant="contained">More About <ArrowForwardIosIcon
                            fontSize="smallest"/></Button>
                    </div>

                </div>
                <div className={classes.LandingIntroRight}>
                    <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                        <Grid item xs={9}>
                            <Card sx={{maxWidth: 450}}>
                        <CardMedia
                            component="img"
                            // height="140"
                            image={guruImg}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                <Chip label="Gurustack" color="primary" />
                            </Typography>
                        </CardContent>
                    </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card sx={{maxWidth: 400}}>
                        <CardMedia
                            component="img"
                            height="220"
                            image={msptiImg}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                <Chip label="MSPTI" color="primary" />
                            </Typography>
                            {/*<Typography variant="body2" color="text.secondary">*/}
                            {/*    Lizards are a widespread group of squamate reptiles, with over 6,000*/}
                            {/*    species, ranging across all continents except Antarctica*/}
                            {/*</Typography>*/}
                        </CardContent>
                        {/*<CardActions>*/}
                        {/*    <Button size="small">Share</Button>*/}
                        {/*    <Button size="small">Learn More</Button>*/}
                        {/*</CardActions>*/}
                    </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{maxWidth: 400}}>
                        <CardMedia
                            component="img"
                            // height="140"
                            image={cryptographyImg}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography variant="h4" component="div">
                                <Chip label="Steganography" color="primary" />
                            </Typography>
                            {/*<Typography variant="body2" color="text.secondary">*/}
                            {/*    Lizards are a widespread group of squamate reptiles, with over 6,000*/}
                            {/*    species, ranging across all continents except Antarctica*/}
                            {/*</Typography>*/}
                        </CardContent>
                        {/*<CardActions>*/}
                        {/*    <Button size="small">Share</Button>*/}
                        {/*    <Button size="small">Learn More</Button>*/}
                        {/*</CardActions>*/}
                    </Card>
                        </Grid>
                        <Grid item xs={8}>
                            <Card sx={{maxWidth: 400}}>
                        <CardMedia
                            component="img"
                            // height="140"
                            image={lecturerEval}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                <Chip label="Lecturer Evaluation" color="primary" />
                            </Typography>
                            {/*<Typography variant="body2" color="text.secondary">*/}
                            {/*    Lizards are a widespread group of squamate reptiles, with over 6,000*/}
                            {/*    species, ranging across all continents except Antarctica*/}
                            {/*</Typography>*/}
                        </CardContent>
                        {/*<CardActions>*/}
                        {/*    <Button size="small">Share</Button>*/}
                        {/*    <Button size="small">Learn More</Button>*/}
                        {/*</CardActions>*/}
                    </Card>
                        </Grid>
                        <Grid item xs={9}>
                            <Card sx={{maxWidth: 400}}>
                        <CardMedia
                            component="img"
                            // height="140"
                            image={guruImg}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Lizard
                            </Typography>
                            {/*<Typography variant="body2" color="text.secondary">*/}
                            {/*    Lizards are a widespread group of squamate reptiles, with over 6,000*/}
                            {/*    species, ranging across all continents except Antarctica*/}
                            {/*</Typography>*/}
                        </CardContent>
                        {/*<CardActions>*/}
                        {/*    <Button size="small">Share</Button>*/}
                        {/*    <Button size="small">Learn More</Button>*/}
                        {/*</CardActions>*/}
                    </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card sx={{maxWidth: 400}}>
                        <CardMedia
                            component="img"
                            // height="140"
                            image={guruImg}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Lizard
                            </Typography>
                            {/*<Typography variant="body2" color="text.secondary">*/}
                            {/*    Lizards are a widespread group of squamate reptiles, with over 6,000*/}
                            {/*    species, ranging across all continents except Antarctica*/}
                            {/*</Typography>*/}
                        </CardContent>
                        {/*<CardActions>*/}
                        {/*    <Button size="small">Share</Button>*/}
                        {/*    <Button size="small">Learn More</Button>*/}
                        {/*</CardActions>*/}
                    </Card>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default LandingIntro;