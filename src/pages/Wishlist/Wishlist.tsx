import React, { FunctionComponent, memo } from 'react';
import Page from '../../shared/components/Page/Page';
import MainGrid from '../../shared/components/MainGrid/MainGrid';
import { useAppSelector } from '../../hooks/redux';
import { filteredPhonesSelector } from '../../store/selectors';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../AppRoutes/AppRoutes';

const Wishlist: FunctionComponent = () => {
  const { wishList } = useAppSelector(filteredPhonesSelector);
  return (
    <Page title={'Wishlist'}>
      {wishList.length ? (
        <MainGrid phones={wishList} />
      ) : (
        <Link to={AppRoutes.Home}>
          <Button variant='contained' color='secondary'>
              Your wishlist is empty! Please, add something !
          </Button>
        </Link>
      )}
    </Page>
  );
};

export default memo(Wishlist);
