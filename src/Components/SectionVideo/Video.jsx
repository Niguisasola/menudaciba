import React from 'react'
import videoCiba from '../../Assets/Img/laciba.mp4'
import videoCibaMovil from '../../Assets/Img/lacibaMovil.mp4'

function Video() {
  return (
    <>

      <video className="hidden sm:flex sm:w-full sm:h-full sm:relative sm:object-cover" loop autoPlay muted>
        <source src={videoCiba} type="video/mp4" height="400" />
      </video>

      <video className="sm:hidden" loop autoPlay muted>
        <source src={videoCibaMovil} type="video/mp4" height="400" />
      </video>
      <div className='inset-0 absolute h-full w-full bg-violeta-ciba opacity-70'></div>

    </>
  )
}

export default Video