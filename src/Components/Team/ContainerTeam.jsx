import React from 'react'
import NewForm from '../Form/Newform'
import TeamMember from './TeamMember'

function ContainerTeam() {
  return (
    <>
    <div className='flex justify-center items-center'>
        <TeamMember nombre="Laura"/>
        <TeamMember nombre="Pedro"/>
        <TeamMember nombre="Artemisia"/>
        <TeamMember nombre="Louis"/>
        
    </div>
    <NewForm/>
    </>

  )
}

export default ContainerTeam