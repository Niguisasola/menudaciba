import React from 'react'
import ButtonTeam from './ButtonTeam'
import ButtonReserve from './ButtonReserve'
import './ButtonsBar.css'

function ButtonsBar() {
  return (
    <div className='buttons-bar'>
        <ButtonReserve/>
        <ButtonTeam/>
    </div>
  )
}

export default ButtonsBar