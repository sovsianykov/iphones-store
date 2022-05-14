import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import {useFetch} from "./hooks/useFetch";
import {useAppSelector} from "./hooks/redux";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router } from "react-router-dom"
import {fetchPhones} from "./store/thunk";
import {fetchPhoneDetail} from "./pages/Detail/store/thunks";



function App() {
    useFetch('1',fetchPhones)
    useFetch('https://api-mobilespecs.azharimm.site/v2/apple_iphone_se_(2022)-11410',fetchPhoneDetail)
    const {phones} = useAppSelector(state => state.phones.data)

    console.log(phones)
  return (
    <Router >
      <Navbar/>
        <Home/>
    </Router>
  );
}

export default App;
