import React from 'react'
import videoCiba from '../../Assets/Img/laciba.mp4'

function Video() {
  return (
    <div>
         <video loop autoPlay muted>
          <source src={videoCiba} type="video/mp4" />
          </video>
    </div>
  )
}

export default Video