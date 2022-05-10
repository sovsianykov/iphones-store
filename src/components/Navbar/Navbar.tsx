import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import {makeStyles} from "@mui/styles";

import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import theme from "../../constants/theme";

const useStyles = makeStyles(() => ({
    navlinks: {
        marginLeft: theme.spacing(5),
        display: "flex",
        letterSpacing:"0.1rem",


    },
    logo: {
        flexGrow: "1",
        width: 400,
        cursor: "pointer",
        letterSpacing:"0.1rem",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(20),
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
}));

function Navbar() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <AppBar position="fixed">
            <CssBaseline />
            <Toolbar >
                <Typography variant="h4" className={classes.logo} color='aliceblue'>
                    Serhii's Phones
                </Typography>
                {isMobile ? (
                    <DrawerComponent />
                ) : (
                    <div className={classes.navlinks}>
                        <Link to="/" className={classes.link}>
                            Home
                        </Link>
                        <Link to="/about" className={classes.link}>
                            About
                        </Link>
                        <Link to="/contact" className={classes.link}>
                            Contact
                        </Link>
                        <Link to="/faq" className={classes.link}>
                            FAQ
                        </Link>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;
