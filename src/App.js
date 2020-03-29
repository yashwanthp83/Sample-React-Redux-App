import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './containers/user-list';
import UserSeleted from './containers/user-selected-dob';

function App() {
  return (
    <div>
      <UserList />
      <br>
      </br>
      <UserSeleted/>
    </div>
  );
}

export default App;
