import CloseEmail from '../../Assets/7-email-close.svg'
import OpenEmail from '../../Assets/8-email-open.svg'
import Checked from '../../Assets/9-check.svg'

import '../scss/footer.scss'

export function closeEmail() {
  let img = document.querySelector('#img'),
      button = document.querySelector('.sendEmail')

  if (button.classList.contains('checked')) {
    img.src = `${ Checked }`
  }
  
  else img.src = `${ CloseEmail }`
}

export function openEmail() {
  let img = document.querySelector('#img'),
      button = document.querySelector('.sendEmail')

  if (button.classList.contains('checked')) {
    img.src = `${ Checked }`
  }

  else img.src = `${ OpenEmail }`
}

export function checked() {
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        email = document.querySelector('#email')

  if (email.value.match(regex)) {
    let img = document.querySelector('#img'),
        button = document.querySelector('.sendEmail')

    img.src = `${ Checked }`
    button.classList.add('checked')
    button.style.background = '#24B576'
  }

  else {
    let error = document.querySelector('.email-error'),
        tempo = 3
    error.classList.add('active')

    let retiraMensagemDeErro = setInterval(retiraErro, 1000)
    function retiraErro() {
      tempo--

      if (tempo === 0) {
        clearInterval(retiraMensagemDeErro)
        error.classList.remove('active')
      }
    }

  }
}
