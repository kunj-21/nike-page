import React from 'react'
import './App.css'

const Nav = () => {
  return (
    <div>
        <nav className='container'>
            <div className='logo'>
            <img src='./img/brand_logo.png' alt="img" />
            </div>
            <ul>
                <li><a href="#">MENU</a></li>
                <li><a href="#">LOCATION</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>

            <button>Login</button>
        </nav>

    </div>
  )
}

export default Nav