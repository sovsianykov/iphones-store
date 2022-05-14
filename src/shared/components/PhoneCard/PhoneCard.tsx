import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {FunctionComponent, memo} from "react";
import {Phone} from "./models";
import {AddShoppingCart, PhoneIphone} from "@mui/icons-material";
import {Box, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import bg from "../../../assets/img/carbon_fibre.webp";
import theme from "../../../constants/theme";



export interface PhoneCardProps {
    phone: Phone;
}

const useStyles = makeStyles(() =>({
    root: {
        width: "100%",
        padding: theme.spacing(2),
        background: theme.palette.grey["800"],
        color: "yellow",

    },
}))


 const PhoneCard:FunctionComponent<PhoneCardProps> = ({phone}) => {
 const classes = useStyles()

    return (
        <Card className={classes.root} >
          <Typography variant='h6'>
              {phone.phone_name}
          </Typography>
             <Box sx={{ maxWidth: 160 , height: 212, overflow: 'hidden',padding:"10px"}}>
                 <img src={phone.image} width='100%' alt='hike'/>
             </Box>
            <CardActions >
                <IconButton aria-label="add to favorites" color='error'>
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default memo(PhoneCard)