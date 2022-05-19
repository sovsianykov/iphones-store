import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {FunctionComponent, memo, useCallback} from "react";
import {Phone} from "./models";
import { Remove} from "@mui/icons-material";
import {Box, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import theme from "../../../constants/theme";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../../hooks/redux";
import { addToWishList, removeFromWishList} from "../../../store/ducks";



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
   const dispatch = useAppDispatch()
   const  onAddToWishList = useCallback(() =>{
       dispatch(addToWishList(phone))
   },[dispatch, phone])
     const  onRemoveFromWishList = useCallback(() =>{
         dispatch(removeFromWishList(phone.phone_name))
     },[dispatch, phone])
    return (
        <Card className={classes.root} >
          <Typography variant='h6'>
              {phone.phone_name}
          </Typography>
             <Box sx={{ maxWidth: 160 , height: 212, overflow: 'hidden',padding:"10px"}}>
                 <img src={phone.image} width='100%' alt='hike'/>
             </Box>
            <CardActions >
                <IconButton aria-label="add to favorites" color='error' onClick={onAddToWishList}>
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share"  onClick={onRemoveFromWishList}>
                    <Remove />
                </IconButton>
                <Link to={`${phone.phone_name.trim()}`} state={{ from:'phone', detail: phone.detail}}>
                    read more
                </Link>
            </CardActions>
        </Card>
    );
}

export default memo(PhoneCard)