import React from 'react'
import BottomShape from './BottomShape'
import ContainerButtons from './ContainerButtons'
import TopShape from './TopShape'
import Video from './Video'

function SectionVideo() {
  return (
    <div className="w-full h-auto relative overflow-hidden">
        <Video/>
        <ContainerButtons/>
        <BottomShape/>
        <TopShape/>
    </div>
  )
}

export default SectionVideo