import React from 'react'
import './Navbar.css'
import logo from './assets/dripseasonlogo.png'

function Navbar() {
  return (
   
        <div className='navbar'>
            <div className='navbar_left'>
                <p>Home</p>
                <p>Shop</p>
                <p>About</p>
                <p>Contact</p>
            </div>

            <div className='navbar_logo'>
                <img src={logo} alt=''/>
            </div>

            <div className='navbar_right'>
                <p>Cart</p>
                <p>My Account</p>
                <p>Sign In</p>
            </div>
        </div>

  )
}

export default Navbar
