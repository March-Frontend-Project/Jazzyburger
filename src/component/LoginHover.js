import React from 'react'
import loginIcon from "../assets/header/login-icon.png"
import signUpIcon from "../assets/header/sign-up-icon.png"


const LoginHover = () => {
  return (
    <div className='login-hover-con'>
        <div className="login-con">
            <div className="login-icon"><img src={loginIcon} alt=''></img></div>
            <div className="login-text">Login</div>
        </div>
        <div className="signup-con">
        <div className=""><img src={signUpIcon} alt='... sign up'></img></div>
            <div className="signup-text">SignUp</div>
        </div>
    </div>
  )
}

export default LoginHover