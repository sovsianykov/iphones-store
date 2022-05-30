import React, { useState } from "react";
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import {makeStyles} from "@mui/styles";

import { Link } from "react-router-dom";
import {Menu} from "@mui/icons-material";
import {AppRoutes} from "../../AppRoutes/AppRoutes";
import theme from "../../constants/theme";

const useStyles = makeStyles(()=>({
    root : {
        background: theme.palette.primary.main,
        height: "100vh"
    },

    link:{
        textDecoration:"none",
        color: "yellow",
        fontSize: "20px",
    },
    icon:{
        color: "white"
    }
}));

function DrawerComponent() {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <Drawer

                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List className={classes.root}>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to={AppRoutes.Home} className={classes.link}>Home</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to={AppRoutes.WishList} className={classes.link}>Wishlist</Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton  onClick={() => setOpenDrawer(!openDrawer)}>
                <Menu  sx={{ color: "#FFF"}}/>
            </IconButton>
        </>
    );
}
export default DrawerComponent;
