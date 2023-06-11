import React from 'react'
import allProduct from "../assets/header/all-product-icon.png"
import guestIcon from "../assets/header/guest-icon.png"
import guestVector from "../assets/header/Vector-guest.png"
import CartPage from "./CartPage"
import LoginHover from './LoginHover'
import { useNavigate  } from "react-router-dom";
const HeaderAcess = ({ cart,toCartButton}) => {
    const navigate = useNavigate()
  return (
    <div className='header-2'>
        <div className='d-flex align-items-center gap-3 all-product-cont' onClick={()=>navigate("/more")} style={{cursor:"pointer"}}>
            <div className='d-flex align-items-center'>
            <img src={allProduct} alt="all-product-icon" className='img-fluid'/>
            </div>
            <h1 className='align-self-center product-text'>All Products</h1>
        </div>
        <label htmlFor='login-hover-box'>
        <div className='d-flex align-items-center gap-3 guest-con'>
            <div>
                <img src={guestIcon} alt="guest-icon" className='img-fluid'/>
            </div>
            <p className='guest-text'>Hi,Guests</p>
            <div className='guest-image'><img src={guestVector} alt="guest-vector" className='img-fluid'/></div>
            <input type='checkbox' id='login-hover-box' className='d-none'></input>
            <LoginHover/>
        </div>
        </label>
        <div>
        <CartPage cart={cart} toCartButton={toCartButton}/>
        </div>
    </div>
  )
}

export default HeaderAcess