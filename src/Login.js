import React, {useState} from 'react'
import './Login.css'
import IMG from './linwdin.png'
import { auth } from './firebase'
import {login} from './features/userSlice'
import {useDispatch} from 'react-redux'




function Login() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const dispatch = useDispatch()



    const loginToApp = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoUrl,
            }))
        }).catch(error => alert(error))
    }




    const register = () => {
       if(!name){
           return alert('Please Enter Full Name !!')
       }
       auth.createUserWithEmailAndPassword(email, password)
       .then((userAuth) => {
        userAuth.user.updateProfile({
            displayName: name,
            photoUrl: profilePic
        })
        .then(() => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
            }))
        })
       })
       .catch(error => alert(error))
    }




  return (
    <div className='login'>
        <img src={IMG} alt=''/>

        <form>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Full name ( required for register)' type='text'/>
            <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder='Profile Pic Url (optional)' type='text'/>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type='email'/>
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' type='password'/>
            <button  onClick={loginToApp}>Sign In</button>
        </form>

       <p>Not A Member? <span className="login_register" onClick={register} >Register Now!</span></p>
        
    </div>
  )
}

export default Login