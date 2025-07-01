import React, { useState } from 'react'
import './LogInPopUp.css'
import { assets } from '../../assets/assets'
function LogInPopUp({ setShowLogin}) {
    const[currentState, setCurrentState] = useState("sign up")
  return (
    <div className='login-popup'>
        <form action="" className='login-popup-container'>
            <div className="login-pop-title">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
             {currentState==="Login" ? <></> :                 <input type="text"  placeholder='Your Name' required/>}
                <input type="email" name="" id="" placeholder='Your email' required />
                <input type="password" name="" id="" placeholder='Password Required' />
            </div>
            <button>{currentState=== "sign up" ? "create account" : "Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing i agree to the terms of use & privacy Policy</p>
            </div>
            {currentState=="Login"?<p>Create a new account? <span onClick={()=>setCurrentState("sign up")}>Click here</span></p> :             <p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>}
        </form>
        </div>
  )
}

export default LogInPopUp