import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from './NavBar'
import Recommendation from '../Recommendation'
import AppLayout from './AppLayout'

function App() {






  return (
    <AppLayout className="App">
      <NavBar/>
      <Recommendation/>
    </AppLayout>
  );
}

export default App;
