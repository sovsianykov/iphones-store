import React from 'react';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import { Link } from 'react-router-dom';
import DrawerComponent from './Drawer';
import theme from '../../constants/theme';
import { AppRoutes } from '../../AppRoutes/AppRoutes';
import Search from '../../shared/components/Search/Search';
import { useAppSelector } from '../../hooks/redux';
import { filteredPhonesSelector } from '../../store/selectors';
import NavigationLink from './NavigationLink';


type StyleProps = {
  isMobile: boolean
}


const useStyles = makeStyles<Pick<StyleProps, 'isMobile'>,StyleProps>(() => ({
  navLinks: {
    marginLeft: theme.spacing(5),
    display: 'flex',
    letterSpacing: '0.1rem',
  },
  logo: {
    flexGrow: '1',
    fontFamily: 'Rubik-regular, sans-serif',
    width: ({isMobile}) => isMobile ? 300 : 400,
    cursor: 'pointer',
    letterSpacing: '0.2rem',
  },
  wishListNumbers: {
    width: 20,
    height: 20,
    marginTop: theme.spacing(0.7),
    borderRadius: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    background: 'purple',
    marginLeft: 5,
    color: '#FFF',
    fontSize: 14,
    lineHeight: '14px',
    border: '1px solid purple',
  },
}));

function Navbar() {
  const theme = useTheme();
  const { wishList } = useAppSelector(filteredPhonesSelector);

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const classes = useStyles({isMobile});

  return (
    <AppBar position="fixed">
      <CssBaseline />
      <Toolbar >
        <Link to={AppRoutes.Home}>
          <Typography variant="h6" className={classes.logo} color="aliceblue">
            Serhii's Phones
          </Typography>
        </Link>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navLinks}>
            <NavigationLink title={'Home'} path={AppRoutes.Home} />
            <NavigationLink title={'Wishlist'} path={AppRoutes.WishList} />
            {!!wishList.length && (
              <div className={classes.wishListNumbers}>{wishList.length}</div>
            )}
            <Search />
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
