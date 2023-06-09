import React from 'react'
import HeaderIcon from './HeaderIcon'
import HeaderAcess from './HeaderAcess'
import "../styles/Header.css"

const Header = ({ cart,toCartButton}) => {
  return (
    <header>
        <HeaderIcon/>
        <HeaderAcess cart={cart} toCartButton={toCartButton}/>
    </header>
  )
}

export default Header