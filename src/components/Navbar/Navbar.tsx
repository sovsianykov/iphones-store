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
import {AppRoutes} from "../../AppRoutes/AppRoutes";
import Search from "../../shared/components/Search/Search";

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
        borderBottom: "1px solid transparent",
        transition:'0.15s ease-in-out',
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid yellow",
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
               <Link to={AppRoutes.Home}>
                   <Typography variant="h6" className={classes.logo} color='aliceblue'>
                       Serhii's Phones
                   </Typography>
               </Link>
                {isMobile ? (
                    <DrawerComponent />
                ) : (
                    <div className={classes.navlinks}>
                        <Link to={AppRoutes.Home} className={classes.link}>
                            Home
                        </Link>
                        <Link to={AppRoutes.WishList} className={classes.link}>
                            Wishlist
                        </Link>
                        <Search/>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;
