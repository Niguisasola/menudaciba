import React from 'react'
import ContainerIcons from './ContainerIcons'
import LinksFooter from './LinksFooter'


function Footer() {
  return (
    <div className='w-full h-36 bg-verde-ciba rounded-tr-[50px] flex flex-col justify-center items-center'>
      <LinksFooter />
      <ContainerIcons />
    </div>
  )
}

export default Footer