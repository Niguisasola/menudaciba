import React from 'react'
import videoCiba from '../../../Assets/Img/laciba.mp4'

function Video() {
  return (
    <>
         <video classname="w-full" loop autoPlay muted>
          <source src={videoCiba} type="video/mp4" height="400"/>
          </video>
    </>
  )
}

export default Video