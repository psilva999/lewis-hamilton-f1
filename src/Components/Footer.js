import React from 'react'
import emailjs from 'emailjs-com'
import './scss/footer.scss'

import Helmet from '../Assets/6-f1-helmet.svg'
import Error from '../Assets/11-error.svg'

import { openEmail, closeEmail, checked } from './Events/svgAndRegex.js'
import HandleEmailSvg from './Events/HandleEmailSvg.js'

const Footer = () => {
  function sendEmail(e) {
    e.preventDefault()

    emailjs.sendForm(
      'service_4ii5zzr', 
      'template_db5en8l', 
      e.target, 
      'GMgIzGOatYerTDpnQ')
      .then(res => {
        console.log(res) 
      })
      .catch(err => {
        console.log(err)
      })
  }

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

          <p className='email-error'>
            <img src={ Error }/>
            Inclua um "@" para validar
          </p>

          <form onSubmit={ sendEmail }>
            <input 
              type='email' 
              placeholder='E-mail' 
              id='email' 
              name='user_email'
              oninvalid=""/>

            <button 
              type='submit'
              className='sendEmail' 
              onClick={ checked } 
              onMouseOver={ openEmail } 
              onMouseOut={ closeEmail }>
              <HandleEmailSvg/>
            </button>
          </form>
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
