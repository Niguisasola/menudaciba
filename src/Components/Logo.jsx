import React from 'react'
import LogoMenudaCiba from '../Assets/Img/menudaCiba.png'
import cibaTexto from '../Assets/Img/cibaTexto.png'

function Logo() {
  return (
    <div className='flex items-end'>
      <img className="w-32 h-32 p-4" src={LogoMenudaCiba} alt="Logo Menuda Ciba" />
      <img className="w-36 h-22 pb-3" src={cibaTexto} alt="Espai de recursos per a dones" />
    </div>
  )
}

export default Logo