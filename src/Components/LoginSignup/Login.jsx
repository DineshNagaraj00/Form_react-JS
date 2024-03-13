import React, { useState } from 'react'
import './Login.css'

import user_icon from '../Assests/person.png'
import pass from '../Assests/password.png'
import mail from '../Assests/email.png'

function Login() {

    const[action,setAction]=useState("Login")


  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
            <div className="inputs">
                {action === "Login"? <div></div> : <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Username' />
                </div>}
                
                <div className="input">
                    <img src={mail} alt="" />
                    <input type="email"  placeholder='Email'/> 
                </div>
                <div className="input">
                    <img src={pass} alt="" />
                    <input type="password" placeholder='Password' />
                </div>
            </div>
        </div>
        {action==="Sign up"?<div></div>: <div className="forgot">
            Lost Password? <span>Click here!</span>
        </div>}
        
        <div className="submit_container">
            <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => {setAction("Sign up")}}>Sign Up</div>
            <div className={action === "Sign up" ? "submit gray" : "submit"} onClick={() => {setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default Login