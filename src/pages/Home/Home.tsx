import React, { FunctionComponent } from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import bg from '../../assets/img/carbon_fibre.webp';
import { useAppSelector } from '../../hooks/redux';
import MainGrid from '../../shared/components/MainGrid/MainGrid';
import Page from '../../shared/components/Page/Page';
import { filteredPhonesSelector } from '../../store/selectors';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    background: `url(${bg})`,
  },
}));

const Home: FunctionComponent = () => {
  const classes = useStyles();

  const { filteredPhones } = useAppSelector(filteredPhonesSelector);
  return (
    <Box role="presentation" className={classes.root} mt={4}>
      <Page title="Choose your style">
        <MainGrid phones={filteredPhones} />
      </Page>
    </Box>
  );
};

export default Home;
