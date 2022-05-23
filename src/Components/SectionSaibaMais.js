import React from 'react'
import './scss/section-saiba-mais.scss'

import BackgroundImage from '../Assets/2-background-image.jpg'

const SectionSaibaMais = () => {
  return (
    <section>
      <img src={ BackgroundImage } alt='Lewis Hamilton no carro da Mercedes' className='background-image'/>

      <article classList='saiba-mais'>
        Um dos maiores pilotos da história da Fórmula 1

        <button>SAIBA MAIS</button>
      </article>
    </section>
  )
}

export default SectionSaibaMais
