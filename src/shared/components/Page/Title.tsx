import React, {FunctionComponent, memo} from 'react';
import {makeStyles} from "@mui/styles";
import theme from "../../../constants/theme";
import {Box} from "@mui/material";

export interface TitleProps {
    title: string;
}

const useStyles = makeStyles(() =>({
    root: {
        maxWidth: 350,
        height:40,
        marginTop: theme.spacing(12),
        display:'flex',
        alignItems:"center",
        justifyContent:"center",
        padding: theme.spacing(2),
    },
    title : {
        fontSize: "25px",
        color: theme.palette.common.white,
        letterSpacing:".2rem",
        fontWeight: 700,
    }
}))


const Title:FunctionComponent<TitleProps> = ({title}) => {
    const classes = useStyles()

    return (
        <Box  className={classes.root}>
            <h1 className={classes.title}>{title}</h1>
        </Box>
    );
};

export default memo(Title);