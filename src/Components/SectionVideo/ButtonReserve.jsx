import React from 'react'
import { Link } from 'react-router-dom'

function ButtonReserve() {
  return (
    <Link to='/reservar'>
      <button className=' w-18 h-16 sm:w-40 sm:h-10 bg-verde-ciba p-3 flex rounded-xl font-alata text-lg text-white justify-center items-center'>
        <p className=''>Hacer reserva</p>
      </button>
    </Link>
  )
}

export default ButtonReserve