import React from 'react'
import './Footer.css'
import user from './images/user.png'
import leftControl from './images/left-control.png'
import pageOne from './images/Page1.png'
import pageTwo from './images/Page2.png'
import rightControl from './images/right-control.png'
import help from './images/help.png'
import { Link } from 'react-router-dom'

function Footer({location}) {
  return (
    <div>
        <div className='footer'>
            <div className='container'>
                <div>
                    <img src={user} alt='user'/>
                </div>
                <div className='controller'>
                    <div className='left-control'>
                        <Link to={'/'}>
                            <img src={leftControl} alt='left-control' />
                        </Link>
                    </div>
                    <div className='page1'>
                        <img src={location.pathname==='/'? pageOne : pageTwo} alt='page' />
                    </div>
                    <div className='right-control'>
                        <Link to={'/week2'}>
                            <img src={rightControl} alt='right-control' />
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={help} alt='help'/>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Footer