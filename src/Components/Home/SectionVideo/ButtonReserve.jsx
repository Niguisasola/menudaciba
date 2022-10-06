import React from 'react'
import { Link } from 'react-router-dom'

function ButtonReserve() {
  return (
    <Link to='/reservarPorEdad'>
    <button>
        <p>Reservar</p>
    </button>
    </Link>
  )
}

export default ButtonReserve