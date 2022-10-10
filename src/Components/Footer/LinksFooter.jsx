import React from 'react'
import { Link } from 'react-router-dom'

function LinksFooter() {
  return (
    <div className='w-6/12 flex justify-around text-violeta-ciba p-4 text-lg font-bebas'>
      <Link to='/sobrenosotros'><p>Sobre Nosotr@s</p></Link>
      <Link to='/equipo'><p>Equipo</p></Link>
      <Link to='/reservar'><p>Reservas</p></Link>
      <p>Contacto</p>
    </div>
  )
}

export default LinksFooter