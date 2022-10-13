import React from 'react'
import Newform from '../Form/Newform'
import TeamMember from './TeamMember'

function ContainerTeam() {
  return (
    <div className='flex justify-center items-center'>
        <TeamMember nombre="Laura"/>
        <TeamMember nombre="Pedro"/>
        <TeamMember nombre="Artemisia"/>
        <TeamMember nombre="Louis"/>
        <Newform/>
    </div>
  )
}

export default ContainerTeam