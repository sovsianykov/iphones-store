import React, { FunctionComponent, memo } from 'react';
import { makeStyles } from '@mui/styles';
import theme from '../../../constants/theme';
import { Box, useMediaQuery, useTheme } from "@mui/material";
import HistoryButton from '../HistoryButton/HistoryButton';

export interface TitleProps {
  title: string;
  children?: JSX.Element;
}

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: 30,
    marginTop: theme.spacing(10),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    [theme.breakpoints.between('xs', 'md')]: {
      marginTop: theme.spacing(5),
      flexDirection: 'column',
      height: 130,
    },
  },
  title: {
    fontSize: '25px',
    color: theme.palette.common.white,
    letterSpacing: '.2rem',
    fontWeight: 700,
  },
}));

const Title: FunctionComponent<TitleProps> = ({ title, children }) => {
  const classes = useStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box className={classes.root}>
      <h1 className={classes.title}>{title}</h1>
      {children}
      { !isMobile && <HistoryButton />}
    </Box>
  );
};

export default memo(Title);
