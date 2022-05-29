import React from 'react';
import { makeStyles } from '@mui/styles';
import theme from '../constants/theme';
import {
   Box, Container,
  CssBaseline,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { AppRoutes } from '../AppRoutes/AppRoutes';
import NavigationLink from './Navbar/NavigationLink';

const useStyles = makeStyles(() => ({
  root: {
    bottom: 0, left: 0, zIndex: 2, position:"fixed",
    background: theme.palette.primary.main,
    width: "100%",
  },

  navLinks: {
    width: "100%",
    marginLeft: theme.spacing(5),
    display: 'flex',
    letterSpacing: '0.1rem',
  },
}));

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box className={classes.root}>
      <CssBaseline />
       <Container>
         <Toolbar>
           {isMobile ?
               ''
               :
               <div className={classes.navLinks}>
                 <NavigationLink title={'Home'} path={AppRoutes.Home} />
                 <NavigationLink title={'Wishlist'} path={AppRoutes.WishList} />
               </div>
           }
         </Toolbar>
       </Container>
    </Box>
  );
};

export default Footer;
