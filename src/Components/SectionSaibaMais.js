import React from 'react'
import { Link } from 'react-scroll'

import './scss/section-saiba-mais.scss'
import BackgroundImage from '../Assets/2-background-image.jpg'

const SectionSaibaMais = () => {
  return (
    <section>
      <img src={ BackgroundImage } alt='Lewis Hamilton no carro da Mercedes' className='background-image'/>

      <article classList='saiba-mais'>
        Um dos maiores pilotos da história da Fórmula 1

        <button>
          <Link activeClass="active"
            to='saiba-mais'
            spy={ true }
            smooth={ true }
            offset={ -40 }
            duration={ 600 }> 
              SAIBA MAIS 
          </Link>
        </button>
      </article>
    </section>
  )
}

export default SectionSaibaMais
