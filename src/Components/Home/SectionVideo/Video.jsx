import React from 'react'
import videoCiba from '../../../Assets/Img/laciba.mp4'
import ButtonsBar from './ButtonsBar'

function Video() {
  return (
    <>
         <video classname="w-full h-full relative" loop autoPlay muted>
          <source src={videoCiba} type="video/mp4" height="400"/>
          <ButtonsBar/>
          </video>
    </>
  )
}

export default Video