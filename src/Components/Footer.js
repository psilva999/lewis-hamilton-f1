import React from 'react'
import { showOpenEmail, showChecked, showCloseEmail } from './Events/handleEmailSvg'
import './scss/footer.scss'

import Helmet from '../Assets/6-f1-helmet.svg'
import CloseEmail from '../Assets/7-email-close.svg'

import OpenEmail from '../Assets/8-email-open.svg'
import Checked from '../Assets/9-check.svg'

const Footer = () => {
  return (
    <footer>
      <img src={ Helmet } alt='capacete de f1'/>

      <div className='container'>
        <div className='perguntas-frequentes'>
          <a href='#'>Perguntas frequentes</a>

          <a href='#'>Termos de Uso</a>

          <a href='#'>Política de Privacidade</a>

          <a href='#'>Política de Segurança</a>

          <a href='#'>Ouvidoria</a>

          <a href='#'>Relatórios financeiros</a>

          <a href='#'>Ética e governança</a>
        </div>

        <div className='newsletter'>
          <h1>Quer saber mais novidades?</h1>
          <span>Inscreva-se na nossa Newsletter</span>

          <input type='email' placeholder='E-mail'/>
          <button 
            onMouseOver={ showOpenEmail }
            onMouseOut={ showCloseEmail }
            onClick={ showChecked }>

            <img src={ CloseEmail } alt='Email fechado' className='close-email'/>
            <img src={ OpenEmail } alt='Email aberto' className='open-email'/>

            <img src={ Checked } alt='Checado' className='checked'/>
          </button>
        </div>

        <div className='feedback'>
          <h1>Encontrou algum bug ou gostaria de enviar um feedback?</h1>
          <span>
            Entre em 
            <a href='#'>contato</a>
          </span>
        </div>

      </div>
    </footer>
  )
}

export default Footer
