import React from 'react'
import { Link } from 'react-router-dom'

function ButtonReserve() {
  return (
    <Link to='/reservarPorEdad'>
    <button className='bg-verde-ciba p-3 rounded-3xl font-koulen text-white'>
        <p>Reservar</p>
    </button>
    </Link>
  )
}

export default ButtonReserve