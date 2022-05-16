import React, { FunctionComponent, memo } from 'react';
import { Specification } from './models';
import { Box, Grid, Typography } from '@mui/material';
interface SpecificationsProps {
  specification: Specification;
}

const Specifications: FunctionComponent<SpecificationsProps> = ({
  specification,
}) => {
  return (
    <>
      <Typography variant="h6" mt={2}>
        {specification.title}
      </Typography>
      <Grid container>
        <Box borderBottom={2} minHeight={200} width="100%" p={1}>
          {specification.specs.map((s) => (
            <Grid item xs key={s.key} alignSelf="flex-start">
              <Typography variant="body2" mt={1}>
                {s.key}
              </Typography>
              <Grid container>
                {s.val.map((value) => (
                  <Grid xs item key={value}>
                    <Typography variant="body1" color="purple">
                      {value}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        </Box>
      </Grid>
    </>
  );
};

export default memo(Specifications);
