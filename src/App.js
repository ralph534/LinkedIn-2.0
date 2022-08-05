import React from 'react';
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Login from './Login'
import './App.css';
import {selectUser} from './features/userSlice'
import { useSelector } from 'react-redux';

function App() {

  const user = useSelector(selectUser)
  
  return (
    <div className ='app'>
      <Header />

      {!user ? (
         <Login/>)
          : (
         <div className='app_body' color="red">
            <Sidebar/>
            <Feed />
          </div>
          )}
      

</div>
  );
}

export default App;
