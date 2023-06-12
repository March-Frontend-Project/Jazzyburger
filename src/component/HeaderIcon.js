import React from 'react'
import logo from "../assets/header/logo.png"
import mapLogo from "../assets/header/map-icon.png"
import { useNavigate  } from "react-router-dom";

const HeaderIcon = () => {
    const navigate = useNavigate()
  return (
    <div className='header-1'>
        <div className="" onClick={()=>navigate("/")} style={{cursor:"pointer"}}>
            <img src={logo} alt="logo" className='img-fluid'/>
        </div>
        <div className='d-lg-flex gap-3 flex-grow-1 d-none'>
        <div className="">
            <img src={mapLogo} alt="map-icon" />
        </div>
        <div>
            <p>Lagos, Nigeria</p>
        </div>
        </div>
    </div>
  )
}

export default HeaderIcon