import React from 'react'
import ButtonReserve from './ButtonReserve'

function ContainerButtons() {
  return (
    <div className='absolute inset-x-1/2 inset-y-1/2 -translate-x-1/2 -translate-y-1/2 flex w-full h-full bg-violeta-ciba opacity-50 justify-around pr-4 sm:pr-36 md:pr-40 lg:pr-32 pl-4 items-center rounded h-24'>
      <div className='w-1/2 opacity-100'>
        <p className='text-verde-ciba font-roboto text-sm md:text-md'>ESPAI INFANTIL CIBA</p>
        <br />
        <h1 className='text-white font-volkhov text-2xl md:text-4xl lg:text-6xl'>Espai de cura i canguratge municipal</h1>
        <br />
        <p className='text-white font-roboto text-sm md:text-md'>Obert a totes les nenes i nens, entre els 0 i 13 anys.</p>
      </div>
        <ButtonReserve/>
    </div>
  )
}

export default ContainerButtons