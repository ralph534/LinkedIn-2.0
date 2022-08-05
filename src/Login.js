import React from 'react'
import './Login.css'
import IMG from './linwdin.png'

function Login() {

    const register = () => {

    }


    const loginApp = () => {
        
    }


  return (
    <div className='login'>
        <img src={IMG} alt=''/>

        <form>
            <input placeholder='Full name( required for register)' type='text'/>
            <input placeholder='Profile Pic Url (optional)' type='text'/>
            <input placeholder='Email' type='email'/>
            <input placeholder='Password' type='password'/>
            <button onclick={loginApp} >Sign In</button>
        </form>

       <p>Not A Member?<span className="login_register" onClick={register} >Register Now!</span></p>
        
    </div>
  )
}

export default Login