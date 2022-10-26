import React from 'react'
import TeamMember from './TeamMember'

function ContainerTeam() {
  return (
    <div className='flex flex-wrap justify-center items-center'>
        <TeamMember nombre="Laura" foto="https://i.postimg.cc/vB5VjzdZ/team1.jpg"/>
        <TeamMember nombre="Victoria" foto="https://i.postimg.cc/FzRhcrGX/team2.jpg"/>
        <TeamMember nombre="María" foto="https://i.postimg.cc/k5vCp6pd/team3.jpg"/>
        <TeamMember nombre="Paula" foto="https://i.postimg.cc/fWrNphBk/team4.jpg"/>
        
    </div>
 

  )
}

export default ContainerTeam