import React, { FunctionComponent } from 'react';
import { makeStyles } from '@mui/styles';
import theme from '../../constants/theme';
import { Link, useLocation } from 'react-router-dom';

interface NavigationLinkProps {
  title: string;
  path: '/' | '/wishlist';
}
type StyleProps = {
  active: boolean;
};

const useStyles = makeStyles<Pick<StyleProps, 'active'>, StyleProps>(() => ({
  link: {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    fontFamily: 'Rubik-regular, sans-serif',
    color: ({ active }) => (active ? 'yellow' : '#FFF'),
    fontSize: '20px',
    marginLeft: theme.spacing(20),
    borderBottom: '2px solid transparent',
    transition: '0.15s ease-in-out',
    '&:hover': {
      color: 'yellow',
    },
  },
  bottomLine: {
    transition: '0.3s ease-in-out',
    width: ({ active }) => (active ? '100%' : 0),
    height: 2,
    background: ({ active }) => (active ? 'yellow' : 'transparent'),
  },
}));

const NavigationLink: FunctionComponent<NavigationLinkProps> = ({
  title,
  path,
}) => {
  const location = useLocation();
  const props = {
    active: location.pathname === path,
  };
  const classes = useStyles(props);
  return (
    <Link to={path} className={classes.link}>
      {title}
      <div className={classes.bottomLine} />
    </Link>
  );
};

export default NavigationLink;
