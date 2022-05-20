import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FunctionComponent, memo, useCallback } from 'react';
import { Phone } from './models';
import { Remove } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from '../../../constants/theme';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';
import { addToWishList, removeFromWishList } from '../../../store/ducks';

export interface PhoneCardProps {
  phone: Phone;
}

const useStyles = makeStyles<Pick<PhoneCardProps, 'phone'>, PhoneCardProps>(
  () => ({
    root: {
      width: '100%',
      height: 364,
      padding: theme.spacing(2),
      background: ({ phone }) =>
        phone.wished ? 'antiquewhite' : theme.palette.grey['100'],

    },
    imgWrapper: {
      width: 160,
      height: 212,
      overflow: 'hidden',
      borderRadius: '10px',
    },
    image: {
      width: '100%',
      display: 'block',
    },
  })
);

const PhoneCard: FunctionComponent<PhoneCardProps> = ({ phone }) => {
  const classes = useStyles({ phone });
  console.log(phone.wished);
  const dispatch = useAppDispatch();
  const onAddToWishList = useCallback(() => {
    dispatch(addToWishList(phone));
  }, [dispatch, phone]);
  const onRemoveFromWishList = useCallback(() => {
    dispatch(removeFromWishList(phone.phone_name));
  }, [dispatch, phone]);
  return (
    <Box className={classes.root}>
      <Typography variant="h6">{phone.phone_name}</Typography>
      <Box className={classes.imgWrapper}>
        <img
          src={phone.image}
          alt="hike"
          className={classes.image}
        />
      </Box>
      <CardActions>
        <IconButton
          aria-label="add to favorites"
          color="error"
          disabled={phone.wished}
          onClick={onAddToWishList}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" onClick={onRemoveFromWishList}>
          <Remove />
        </IconButton>
        <Link
          to={`${phone.phone_name.trim()}`}
          state={{ from: 'phone', detail: phone.detail }}
        >
          read more
        </Link>
      </CardActions>
    </Box>
  );
};

export default memo(PhoneCard);
