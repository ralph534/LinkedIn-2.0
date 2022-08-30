import React, {useState, useEffect} from 'react'
import './Feed.css'
import InputOption from './InputOption'
import Post from './Post'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import { db } from './firebase'
import firebase from "firebase/compat/app"
import { useSelector } from 'react-redux'
import {selectUser} from './features/userSlice'
import FlipMove from 'react-flip-move'

function Feed() {

  const user = useSelector(selectUser)

  const [input, setInput] = useState('')

  const [posts, setPosts] = useState([])


  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
       setPosts(
         snapshot.docs.map(docs => ({
            id: docs.id,
            data: docs.data(),
          }))
        )
    ))
  }, [])



  const sendPost = e => {
    e.preventDefault()

    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      PhotoUrl: user.photoUrl || '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })

  setInput('')
}



  return (
    <div className='feed'>
        <div className='feed_inputContainer'>
           <div className='inputPost'>
               <CreateIcon/> 
               <form>
                  <input value={input} onChange={e => setInput(e.target.value)} type='text' placeholder='Add a post!'/>
                      <button onClick={sendPost} type='sumbit'>Send</button>
               </form>
           </div>


           <div className='feed_inputOptions'>
               <InputOption Icon={ImageIcon} title='photo' color='#70B5F9' />
               <InputOption Icon={SubscriptionsIcon} title='Video' color='#70B5F9' />
               <InputOption Icon={EventNoteIcon} title='Event' color='#70B5F9' />
               <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#70B5F9' />
           </div>
        </div>

        <FlipMove>
        {posts.map(({id, data: {name, description, message, photoUrl, timestamp}}) => (
          <Post
          key={id}
          name= {name} 
          description= {description} 
          message= {message}
          photoUrl= {photoUrl}
          timestamp= {firebase.firestore.FieldValue.serverTimestamp()} />
        ))}
        </FlipMove>


    </div>

    
  )
}

export default Feed