import React from 'react'

function TeamMember(props) {
  return (
    <div className='flex flex-col justify-center items-center p-4'>
        <div className='w-48 h-48 rounded-full bg-violeta-ciba'>
            <img className="clip-mask" src="https://thispersondoesnotexist.com/image" alt="Team Member" />
        </div>
        <p className='font-alata text-violeta-ciba text-2xl'>{props.nombre}</p>
    </div>
  )
}

export default TeamMember