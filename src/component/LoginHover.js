import React from 'react'
import loginIcon from "../assets/header/login-icon.png"
import signUpIcon from "../assets/header/sign-up-icon.png"
import { useNavigate } from 'react-router-dom'


const LoginHover = () => {
  const navigate = useNavigate()
  return (
    <div className='login-hover-con'>
        <div className="login-con" onClick={()=>navigate("/login")}>
            <div className="login-icon"><img src={loginIcon} alt=''></img></div>
            <div className="login-text">Login</div>
        </div>
        <div className="signup-con" onClick={()=>navigate("/signup")}>
        <div className=""><img src={signUpIcon} alt='... sign up'></img></div>
            <div className="signup-text">SignUp</div>
        </div>
    </div>
  )
}

export default LoginHover