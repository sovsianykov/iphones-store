import React, { FunctionComponent } from 'react';
import { Box, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from '../../../constants/theme';
import Title from './Title';

export interface PageProps {
  children: JSX.Element | JSX.Element[];
  title: string;
}

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const Page: FunctionComponent<PageProps> = ({ children, title }) => {
  const classes = useStyles();

  return (
    <Container >
      <Title title={title} />
      <Box className={classes.root}>{children}</Box>
    </Container>
  );
};

export default Page;
