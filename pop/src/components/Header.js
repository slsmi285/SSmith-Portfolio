import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse, Link } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { Link as Scroll } from 'react-scroll';
import ScrollTotop from './ScrollTotop';
import Skills from './Skills';
import Popup from 'reactjs-popup';
import "./style.css";
import Content from "./Content.js";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        // margin: '5px',
        fontFamily: 'Raleway',
        minHeight: '10vh',
        [theme.breakpoints.down("sm")]: {
            flexDirection: 'column',
        },
    },
    rootTwo: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
            color: '#ffffff',
            textShadow: '-1px 1px #000',
            minHeight: '1rem',
            fontFamily: 'Raleway',
            fontSize: '12px',
        },
    },
    appbar: {
        background: 'none',

    },
    appbarTitle: {
        flexGrow: '1',
        fontSize: '1rem',
        display: 'flex',

    },
    appbarWrapper: {
        width: '100%',
        margin: '0 auto',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',

    },
    colorText: {
        color: '#5AFF3D',
        textShadow: '-1px 1px #000',
        marginLeft: '10px',
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: '#fff',
        fontSize: '3rem',
        marginTop: '20px',
    },
    goDown: {
        color: '#5AFF3D',
        fontSize: '3rem',

    },
    skillBlock: {
        justify: 'center',
        marginLeft: '100px',
        // marginBottom: '20px',
    },
}));
export default function Header() {
    {
        const classes = useStyles();
        const [checked, setChecked] = useState(false);
        useEffect(() => {
            setChecked(true);
        }, []);
        const preventDefault = (event) => event.preventDefault();
        // render()
        return (
            <div className={classes.root} id="header">
                <div className="App">
                    <AppBar className={classes.appbar} elevation={0}>

                        <Toolbar className={classes.appbarWrapper}>

                            <h1 className={classes.appbarTitle}>Sandra Smith<span className={classes.colorText}>My Portfolio</span></h1>

                            <Typography className={classes.rootTwo}>
                                <Popup modal
                                    trigger={<button className="buttonMe">
                                        <h3>About Me</h3></button>}>
                                    {close => <Content close={close} />}
                                </Popup>
                                <Link href="#" onClick={preventDefault}>
                                    Projects 
                                </Link>

                                <Link href="#" onClick={preventDefault} >
                                    Resume 
                                </Link>
                                <Link href="#" onClick={preventDefault} >
                                    Contact Me 
                                </Link>


                                


                                <IconButton>

                                    <ScrollTotop />

                                </IconButton>
                            </Typography>
                        </Toolbar>

                    </AppBar>
                </div>
                {/* <Box> */}
                <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapseHeight={50}>
                    <div className={classes.container}>
                        <h1 className={classes.title}>
                            Sandra Smith <br />
            Web<span className={classes.colorText}>Developer</span>

                            <div className={classes.skillBlock}>
                                <Skills />
                            </div>


                        </h1>
                        {/* <br /> */}
                        <Scroll to="place-to-visit" smooth={true}>
                            <IconButton>
                                <ExpandMoreIcon className={classes.goDown} />
                            </IconButton>
                        </Scroll>

                    </div>
                </Collapse>
                {/* </Box> */}
            </div>
        )
    };
}
