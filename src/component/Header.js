import React from 'react'
import HeaderIcon from './HeaderIcon'
import HeaderAcess from './HeaderAcess'
import "../styles/Header.css"

const Header = ({ cart,toCartButton}) => {
  return (
    <header className="container-lg">
        <HeaderIcon/>
        <HeaderAcess cart={cart} toCartButton={toCartButton}/>
    </header>
  )
}

export default Header