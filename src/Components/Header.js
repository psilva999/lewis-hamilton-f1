import React from 'react'
import { resizeWindow, menuMobile, closeMenu } from './Events/handleMenu.js'

import { ReactComponent as Logo } from '../Assets/0-logo.svg'
import { ReactComponent as Arrow } from '../Assets/1-arrow.svg'

import './scss/header.scss'
import { showFirstDetail, hidesFirstDetail, showSecondDetail, hidesSecondDetail, showThirdDetail, hidesThirdDetail } from './Events/handleDetail'

const Header = () => {
  window.addEventListener('resize', resizeWindow)
  document.body.addEventListener('click', closeMenu)

  return (
    <header>
      <Logo className='logo'/>

      <nav>
        <button className='toggle-menu' onClick={ menuMobile } id='toggle-menu'></button>

        <ul className='menu' id='menu'>
          <li onMouseOver={ showFirstDetail } onMouseOut={ hidesFirstDetail }>História</li>
          <li onMouseOver={ showSecondDetail } onMouseOut={ hidesSecondDetail }>Recordes</li>
          <li onMouseOver={ showThirdDetail } onMouseOut={ hidesThirdDetail }>Contato</li>

          <button className='login-menu'>
            LOGIN 
            <Arrow/>
          </button>
        </ul>

        <button className='login'>
          LOGIN 
          <Arrow/>
        </button>
      </nav>
    </header>
  )
}

export default Header
