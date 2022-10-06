import React from 'react'
import ButtonTeam from './ButtonTeam'
import ButtonReserve from './ButtonReserve'


function ButtonsBar() {
  return (
    <div className='absolute bottom-44 w-full z-10 h-24 bg-violeta-ciba flex justify-around items-center'>
        <ButtonReserve/>
        <ButtonTeam/>
    </div>
  )
}

export default ButtonsBar