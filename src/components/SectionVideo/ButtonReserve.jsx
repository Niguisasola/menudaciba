import React from 'react'
import { Link } from 'react-router-dom'

function ButtonReserve() {
  return (
    <Link to='/reservar'>
      <button className=' w-18 h-16 sm:w-40 sm:h-10 lg:w-48 lg:h-24 lg:text-2xl bg-verde-ciba p-3 flex flex-col rounded-xl font-alata text-lg text-white justify-center items-center'>
        <p className=''>Fer reserva</p>
        <p className='hidden lg:flex font-roboto lg:text-sm text-violeta-ciba'>d'horari de canguratge</p>
      </button>
    </Link>
  )
}

export default ButtonReserve