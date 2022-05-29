import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './Routing/Routing';
import Navbar from './components/Navbar/Navbar';
import { useFetch } from './hooks/useFetch';
import { fetchPhones } from './store/thunk';
import Footer from './components/Footer';

function App() {
  useFetch('1', fetchPhones);

  return (
    <Router>
      <Navbar />
      <Routing />
      <Footer />
    </Router>
  );
}

export default App;
