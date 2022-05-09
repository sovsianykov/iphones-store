import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import {useFetch} from "./hooks/useFetch";
import {useAppSelector} from "./hooks/redux";




function App() {
    useFetch('1')
    const {phones} = useAppSelector(state => state.phones.data)

    console.log(phones)
  return (
    <div >
      <Navbar/>
    </div>
  );
}

export default App;
