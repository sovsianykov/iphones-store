import React from 'react';
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from '../AppRoutes/AppRoutes';
import Home from '../pages/Home/Home';
import Detail from '../pages/Detail/Detail';
import Wishlist from "../pages/Wishlist/Wishlist";

const Routing = () => {

  return (
    <Routes>
      <Route path={AppRoutes.Home} element={<Home />} />
      <Route path={AppRoutes.WishList} element={<Wishlist />} />
      <Route path={AppRoutes.Detail} element={<Detail />} />
      <Route path={AppRoutes.WishedPhoneDetail} element={<Detail />} />
    </Routes>
  );
};

export default Routing;
