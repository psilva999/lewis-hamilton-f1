import React from 'react'
import { ReactComponent as Logo } from '../Assets/0-logo.svg'
import { ReactComponent as Arrow } from '../Assets/1-arrow.svg'

import './scss/header.scss'
import { showFirstDetail, hidesFirstDetail, showSecondDetail, hidesSecondDetail, showThirdDetail, hidesThirdDetail } from './Events/handleDetail'

const Header = () => {
  return (
    <header>
      <Logo className='logo'/>

      <nav>
        <button className='toggle-menu'></button>

        <ul className='menu'>
          <li onMouseOver={ showFirstDetail } onMouseOut={ hidesFirstDetail }>História</li>
          <li onMouseOver={ showSecondDetail } onMouseOut={ hidesSecondDetail }>Recordes</li>
          <li onMouseOver={ showThirdDetail } onMouseOut={ hidesThirdDetail }>Contato</li>
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
