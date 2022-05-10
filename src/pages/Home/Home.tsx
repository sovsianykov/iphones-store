import React, {FunctionComponent} from 'react';
import {makeStyles} from "@mui/styles";
import {Box} from "@mui/material";
import bg from '../../assets/img/iphoneBg.jpg'
import {useAppSelector} from "../../hooks/redux";
import MainGrid from "../../shared/components/MainGrid/MainGrid";
const useStyles = makeStyles(() =>({
    root: {
        width: "100%",
        height:"100vh",
        background: `url(${bg}) no-repeat center center/ cover`,
    }


}))


const Home:FunctionComponent = () => {
    const classes = useStyles()
    const {phones} = useAppSelector(state => state.phones.data)

    return (
        <Box role='presentation' className={classes.root} mt={4}>
          <MainGrid phones={phones}/>
        </Box>
    );
};

export default Home;