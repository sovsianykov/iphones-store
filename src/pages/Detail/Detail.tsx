import React, { FunctionComponent, memo } from 'react';
import Page from '../../shared/components/Page/Page';
import {Box, CircularProgress, Grid, Paper} from '@mui/material';
import Specifications from './Specifications';
import { useLocation, useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { fetchPhoneDetail } from './store/thunks';
import { useAppSelector } from '../../hooks/redux';
import { phoneDetailSelector } from './store/selectors';
import {makeStyles} from "@mui/styles";
import theme from "../../constants/theme";
import Avatar from "@mui/material/Avatar";
// interface DetailProps {
//     phoneData?: PhoneDetailData
// }

const useStyles = makeStyles(() =>({
  root: {
    width: 1100,
    padding: theme.spacing(2),
  },
  imgWrapper: {
    width: 200,
    height:300,
    overflow:"hidden"
  },
  picture: {
    display:"block",
    width:'100%',
  }
}))


interface State {
  from: string;
  detail: string;
}

const Detail: FunctionComponent = () => {
  const classes = useStyles()

  const location = useLocation();

  const state = location.state as State;
  useFetch(state.detail, fetchPhoneDetail);
  const {
    brand,
    dimension,
    os,
    thumbnail,
    phone_name,
    phone_images,
    release_date,
    specifications,
    storage,
      loading
  } = useAppSelector(phoneDetailSelector);

  return (
    <Page title={phone_name}>
      { !loading ? <CircularProgress/> :  <Paper className={classes.root}>
        <Avatar src={thumbnail}/>
        <Grid container >
          {phone_images.map(img=>(
              <Grid item xs={12} md={3} key={img} display='flex' justifyContent='space-around'>
                <Box className={classes.imgWrapper}>
                  <img src={img} alt={img} className={classes.picture}/>
                </Box>
              </Grid>
          ))}
        </Grid>
        <Grid container direction='column'>
          {specifications.map((s) => (
              <Grid item xs key={s.title}>
                <Specifications specification={s}/>
              </Grid>
          ))}
        </Grid>
      </Paper>}
    </Page>
  );
};

export default memo(Detail);
