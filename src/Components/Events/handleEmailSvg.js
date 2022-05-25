import React from 'react'
import '../scss/footer.scss'

import CloseEmail from '../../Assets/7-email-close.svg'
// import OpenEmail from '../../Assets/8-email-open.svg'
// import Checked from '../../Assets/9-check.svg'

const handleEmailSvg = () => {
  return (
    <img src={ CloseEmail } alt='email fechado' id='img'/>
  )
}

export default handleEmailSvg