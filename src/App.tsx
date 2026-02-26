import React from 'react';

import './App.css';
import AppTitle from './components/AppTitle/AppTitle';
import { UserAutoComplete } from './components';



function App() {
  return (
    <div className="App">
      <AppTitle />      
      <UserAutoComplete/>
    </div>
  );
}

export default App;
