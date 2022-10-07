import React from 'react'
import ButtonsBar from './ButtonsBar'
import ContainerButtons from './ContainerButtons'
import Video from './Video'

function SectionVideo() {
  return (
    <div className="w-full h-auto relative">
        <Video/>
        <ContainerButtons/>
        <ButtonsBar/>
    </div>
  )
}

export default SectionVideo