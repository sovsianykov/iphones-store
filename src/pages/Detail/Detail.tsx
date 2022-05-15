import React, { FunctionComponent, memo } from 'react';
import Page from '../../shared/components/Page/Page';
import title from '../../shared/components/Page/Title';
import { PhoneDetailData } from './models';
import { Grid, Paper } from '@mui/material';
import Specifications from './Specifications';
import { useLocation, useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { fetchPhoneDetail } from './store/thunks';
import { useAppSelector } from '../../hooks/redux';
import { phoneDetailSelector } from './store/selectors';
// interface DetailProps {
//     phoneData?: PhoneDetailData
// }

interface State {
  from: string;
  detail: string;
}

const Detail: FunctionComponent = () => {
  const params = useParams();
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
  } = useAppSelector(phoneDetailSelector);

  return (
    <Page title={phone_name}>
      <Paper>
        <Grid container direction='column'>
            {specifications.map((s) => (
                <Grid item xs key={s.title}>
                     <Specifications specification={s}/>
                </Grid>
            ))}
        </Grid>
      </Paper>
    </Page>
  );
};

export default memo(Detail);
