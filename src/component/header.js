import React from 'react'
import logo from "../assets/logo.png";
import "../styles/navbar.css"

const Header = () => {
  return (
    <div className='navbar'>
        <div className='leftLogo'>
            <img className='navLogo' src={logo}/>
        </div>
        <div className='rightNav'>
            <a>Properties</a>
            <a>My Dashboard/Activity</a>
            <a>LIST YOUR PROPERTIES</a>
            <a>CONTACT US</a>
            <a>MORE</a>
            <div></div>
            <a>LANG</a>
            <a>PROF</a>
        </div>
    </div>
  )
}

export default Header;
