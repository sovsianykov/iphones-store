import React, { FunctionComponent, memo } from 'react';
import { Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

interface ImageBlockProps {
  images: Array<string>;
}
const useStyles = makeStyles(() => ({
  imgWrapper: {
    width: 200,
    overflow: 'hidden',
    marginBottom: 40,
    borderRadius: "3px",
  },
  picture: {
    display: 'block',
    width: '100%',
  },
}));

const ImageBlock: FunctionComponent<ImageBlockProps> = ({ images }) => {
  const classes = useStyles();
  return (
    <Grid container>
      {images.map((img) => (
        <Grid
          item
          xs={12}
          md={3}
          key={img}
          display="flex"
          justifyContent="space-around"
        >
          <Box className={classes.imgWrapper}>
            <img src={img} alt={img} className={classes.picture} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default memo(ImageBlock);
