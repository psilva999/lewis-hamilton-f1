import React from 'react'
import './scss/section-curiosidades.scss'

import Trophy from '../Assets/3-trophy.svg'
import Winner from '../Assets/4-winner.svg'
import PolePositions from '../Assets/5-pole-positions.svg' 

const SectionCuriosidades = () => {
  return (
    <section className='curiosidades'>
      <div>
        <img src={ Trophy } alt='trophy'/>
        <span className='titulos'>7 títulos</span>
      </div>

      <div>
        <img src={ Winner } alt='trophy'/>
        <span className='winner'>103 vitórias</span>
      </div>

      <div>
        <img src={ PolePositions } alt='trophy'/>
        <span className='pole-positions'>102 pole positions</span>
      </div>
    </section>
  )
}

export default SectionCuriosidades
