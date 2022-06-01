import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FunctionComponent, memo, useCallback } from 'react';
import { Phone } from './models';
import { RemoveShoppingCartOutlined } from '@mui/icons-material';
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
      width: '99%',
      height: 330,
      alignSelf: 'center',
      margin: '0 auto',
      padding: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '5px',
      background: theme.palette.background.paper,
      transition: '.15s ease-in-out',
      '&:hover': {
        width: '100%',
      },
    },
    imgWrapper: {
      width: 160,
      alignSelf: 'center',
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
  const dispatch = useAppDispatch();
  const onAddToWishList = useCallback(() => {
    dispatch(addToWishList(phone));
  }, [dispatch, phone]);
  const onRemoveFromWishList = useCallback(() => {
    dispatch(removeFromWishList(phone.phone_name));
  }, [dispatch, phone]);
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle1" height={40} letterSpacing={'0.1rem'}>
        {phone.phone_name}
      </Typography>
      <Box className={classes.imgWrapper}>
        <img src={phone.image} alt="hike" className={classes.image} />
      </Box>
      <CardActions
        sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}
      >
        <IconButton
          aria-label="add to favorites"
          disabled={phone.wished}
          sx={{ color: phone.wished ? 'red!important' : '#6767a0' }}
          onClick={onAddToWishList}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" onClick={onRemoveFromWishList}>
          {phone.wished && <RemoveShoppingCartOutlined />}
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
