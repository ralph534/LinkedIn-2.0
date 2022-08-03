import React from 'react'
import Avatar from '@mui/material/Avatar';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import InputOption from './InputOption';

import './Post.css'

function Post({name, description, message, photoUrl}) {
  return (
    <div className='post'>
       <div className='post_header'>
         <Avatar/>
         <div className='post_info'>
         <h2>{name}</h2>
         <p>{description}</p>
         </div>
       </div>

       <div className='post_body'>
           <p>{message}</p> 
       </div>

       <div className='post_button'>
           <InputOption Icon={ThumbUpAltIcon} title='Like' color='white' />
           <InputOption Icon={ChatIcon} title='Message'/>
           <InputOption Icon={ShareIcon} title='Share'/>
           <InputOption Icon={SendIcon} title='Send'/>
       </div>

    </div>
  )
}

export default Post