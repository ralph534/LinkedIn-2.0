import React, {useEffect} from 'react';
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'
import Login from './Login'
import './App.css';
import {auth} from './firebase'
import {selectUser, login, logout} from './features/userSlice'
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        // User is logged In
        dispatch(login({
          email: userAuth.email,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoUrl
        }))
      }else{
        // User is Logged Out
        dispatch(logout())

      }
    })
  }, [])
  
  return (
    <div className ='app'>
      <Header />

      {!user ? (
         <Login/>)
          : (
         <div className='app_body'>
            <Sidebar/>
            <Feed />
            <Widgets/>
          </div>
          )}
      

</div>
  );
}

export default App;
