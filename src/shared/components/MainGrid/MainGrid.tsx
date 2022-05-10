import React, { FunctionComponent } from 'react';
import { Phone } from '../PhoneCard/models';
import { Box, Grid } from '@mui/material';
import PhoneCard from '../PhoneCard/PhoneCard';

export interface MainGridProps {
  phones: Array<Phone>;
}

const MainGrid: FunctionComponent<MainGridProps> = ({ phones }) => {
  return (
    <Box sx={{ maxWidth: 700,margin:"0 auto" }}>
      <Grid container spacing={2}>
        {phones.map((phone) => (
          <Grid item xs={12} sm={6} md={3} key={phone.slug}>
            <PhoneCard phone={phone} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MainGrid;
