import React from 'react'
import './Sidebar.css'
import Avatar from '@mui/material/Avatar';
import ME from './images/02profilewyncode.jpg'
import abstract from './images/abtract.jpeg'

function Sidebar() {

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
            <Avatar className='sidebar_avatar'/>
            <h2>Ralph Etienne</h2>
            <h4>ralphyetienne109@aol.com</h4>
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