import React from 'react';
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Post from './Post'
import './App.css';

function App() {
  return (
    <div className ='app'>
      <Header />

      <div className='app_body'>
      <Sidebar/>
      <Feed />
    </div>
</div>
  );
}

export default App;
