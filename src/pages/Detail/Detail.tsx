import React, { FunctionComponent, memo } from 'react';
import Page from '../../shared/components/Page/Page';
import { CircularProgress, Grid, Paper, Typography} from '@mui/material';
import Specifications from './Specifications';
import { useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { fetchPhoneDetail } from './store/thunks';
import { useAppSelector } from '../../hooks/redux';
import { phoneDetailSelector } from './store/selectors';
import {makeStyles} from "@mui/styles";
import theme from "../../constants/theme";
import Avatar from "@mui/material/Avatar";
import ImageBlock from "./ImageBlock";

const useStyles = makeStyles(() =>({
  root: {
    maxWidth: 1100,
    padding: theme.spacing(4),
  },
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
        <Typography variant='h5' align='center' mt={1} mb={1}> {phone_name}</Typography>
        <Typography variant='subtitle2' align='center' mt={1} mb={2}>{release_date}</Typography>
        <ImageBlock images={phone_images}/>
        <Typography variant='h6' > {storage}</Typography>
        <Typography variant='body2'  mt={1}> {dimension}</Typography>
        <Typography variant='body2'  mt={1} mb={3}> {os}</Typography>

        <Grid container direction='column'>
          {specifications.map((s) => (
              <Grid item xs={12} key={s.title}>
                <Specifications specification={s}/>
              </Grid>
          ))}
        </Grid>
      </Paper>}
    </Page>
  );
};

export default memo(Detail);
