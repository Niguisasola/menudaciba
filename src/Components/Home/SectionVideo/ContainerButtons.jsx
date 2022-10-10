import React from 'react'
import ButtonReserve from './ButtonReserve'

function ContainerButtons() {
  return (
    <div className='absolute inset-x-1/2 inset-y-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm flex w-1/4 justify-around items-center rounded h-24 flex-col'>
      <h1 className='text-white text-xl font-bebas'>Menuda Ciba es un servicio de cuidado de niños</h1>
        <ButtonReserve/>
    </div>
  )
}

export default ContainerButtons