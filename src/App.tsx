import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import {useFetch} from "./hooks/useFetch";
import {useAppSelector} from "./hooks/redux";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router } from "react-router-dom"



function App() {
    useFetch('1')
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
