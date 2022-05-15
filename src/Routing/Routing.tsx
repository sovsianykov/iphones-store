import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Navbar from "../components/Navbar/Navbar";
import {AppRoutes} from "../AppRoutes/AppRoutes";
import Home from "../pages/Home/Home";
import Detail from "../pages/Detail/Detail";

const Routing = () => {
    return (
        <Routes>
            <Route path={AppRoutes.Home} element={<Home/>}/>
            <Route path={AppRoutes.Detail} element={<Detail/>}/>
        </Routes>
    );
};

export default Routing;