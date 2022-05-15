import React from 'react';
import { useFetch } from './hooks/useFetch';
import { useAppSelector } from './hooks/redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { fetchPhones } from './store/thunk';
import { fetchPhoneDetail } from './pages/Detail/store/thunks';
import Routing from './Routing/Routing';
import Navbar from "./components/Navbar/Navbar";

function App() {
  useFetch('1', fetchPhones);

  const { phones } = useAppSelector((state) => state.phones.data);

  console.log(phones);
  return (
    <Router>
        <Navbar/>
      <Routing />
    </Router>
  );
}

export default App;
