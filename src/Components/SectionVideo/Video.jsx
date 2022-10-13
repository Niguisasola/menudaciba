import React from 'react'
import videoCiba from '../../Assets/Img/laciba.mp4'
import ButtonsBar from './ButtonsBar'
import videoCibaMovil from '../../Assets/Img/lacibaMovil.mp4'

function Video() {
  return (
    <>
         <video className="hidden sm:flex sm:w-full sm:h-full sm:relative sm:object-cover" loop autoPlay muted>
          <source src={videoCiba} type="video/mp4" height="400"/>
          <ButtonsBar/>
          </video>
          <video className="sm:hidden" loop autoPlay muted>
          <source src={videoCibaMovil} type="video/mp4" height="400"/>
          <ButtonsBar/>
          </video>
    </>
  )
}

export default Video