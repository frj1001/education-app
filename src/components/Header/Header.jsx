import React from 'react'
import './Header.css'
import logo from './images/logo.png'
import weekOne from './images/weekone.png'

function Header({location}) {
  return (
    <div>
        <div className='head'>
            <div className='one'>
            <img src={logo} alt='logo'/>
            </div>
            <div className='two'>
            <img src={location.pathname==='/'? weekOne : null} alt=''/>
            </div>
      </div>
    </div>
  )
}

export default Header