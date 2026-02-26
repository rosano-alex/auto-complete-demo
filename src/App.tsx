import React, { useState } from 'react';

import './App.css';
import AppTitle from './components/AppTitle/AppTitle';
import UserCard from './components/UserCard/UserCard';
import { User } from './types';
import UserAutoComplete from './components/UserAutoComplete/UserAutoComplete';



function App() {
  
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  
  return (
    <div className="App">
      <AppTitle />   
      <UserAutoComplete onSelect={setSelectedUser} />
      <UserCard data={selectedUser} />
    </div>
  );
}

export default App;
