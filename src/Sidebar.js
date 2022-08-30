import React from 'react'
import './Sidebar.css'
import Avatar from '@mui/material/Avatar';
import abstract from './images/abtract.jpeg'
import { logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';

function Sidebar() {


    const dispatch = useDispatch()

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()
     }



    const user = useSelector(selectUser)

    const recentItem = (topic) => (
       <div className='sidebar_recentItem'>
          <span className='sidebar_hash'>#</span>
          <p className='sidebar_topics'>{topic}</p>
       </div>
    )



  return (
    <div className='sidebar'>
        <div className='sidebar_top'>
            <img src={abstract} alt='' />
            <div className='tar'>
            <Avatar src={user.photoUrl} onClick={logoutOfApp} className='sidebar_avatar'>{user.email[0]}</Avatar>
            </div>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className='sidebar_status'>
            <div className='sidebar_stat'>
                <p>Who visited you :</p>
                <p className='sidebar_statNumber'>2,563</p>
            </div>

            <div className='sidebar_stat'>
            <p>Views on post :</p>
                <p className='sidebar_statNumber'>1,093</p>
            </div>
        </div>

        <div className='sidebar_bottom'>
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('design')}
            {recentItem('software engineer')}
            {recentItem('developer')}
        </div>

    </div>
  )
}

export default Sidebar