import React from 'react'
import ButtonReserve from './ButtonReserve'
import ButtonTeam from './ButtonTeam'

function ContainerButtons() {
  return (
    <div className='absolute inset-x-1/2 inset-y-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm flex w-1/4 justify-around items-center rounded h-24'>
        <ButtonReserve/>
        <ButtonTeam/>
    </div>
  )
}

export default ContainerButtons