import React, { FunctionComponent } from 'react';
import { Phone } from '../PhoneCard/models';
import { Grid } from '@mui/material';
import PhoneCard from '../PhoneCard/PhoneCard';

export interface MainGridProps {
  phones: Array<Phone>;
}

const MainGrid: FunctionComponent<MainGridProps> = ({ phones }) => {
  return (
    <Grid container spacing={2}>
      {phones.map((phone) => (
        <Grid item xs={12} sm={4} md={3} key={phone.id}>
          <PhoneCard phone={phone} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MainGrid;
