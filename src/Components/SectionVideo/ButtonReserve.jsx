import React from 'react'
import { Link } from 'react-router-dom'

function ButtonReserve() {
  return (
    <Link to='/reservar'>
    <button className='bg-verde-ciba p-3 rounded-xl font-bebas text-white'>
        <p>Hacer reserva</p>
    </button>
    </Link>
  )
}

export default ButtonReserve