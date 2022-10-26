import React from 'react'
import { Link } from 'react-router-dom'
import ContactFooter from './ContactFooter'

function LinksFooter() {
  return (
    <div className='hidden w-6/12 sm:flex text-center sm:flex-row justify-around text-violeta-ciba p-4 text-lg font-alata'>
      <Link to='/sobrenosotros' className='hover:text-white'><p>Sobre Nosaltres</p></Link>
      <Link to='/equipo' className='hover:text-white'><p>Equip</p></Link>
      <Link to='/reservar' className='hover:text-white'><p>Reserves</p></Link>
      <ContactFooter />
    </div>
  )
}

export default LinksFooter