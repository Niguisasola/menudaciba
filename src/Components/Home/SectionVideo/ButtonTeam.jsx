import React from 'react'
import { Link } from 'react-router-dom'

function ButtonTeam() {
  return (
    <Link to='/team'>
    <button className='bg-verde-ciba p-3 rounded-3xl font-koulen text-white'>
        <p>Equipo</p>
    </button>
    </Link>
  )
}

export default ButtonTeam