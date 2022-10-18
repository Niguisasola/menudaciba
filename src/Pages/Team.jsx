import React from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import ContainerTeam from '../Components/Team/ContainerTeam'

function Team() {
  return (
    <>
      <Header />
      <div className='flex flex-col justify-center items-center'>
        <h2 className='p-1 font-alata text-violeta-ciba text-4xl'>Equipo</h2>
        <p className='font-roboto text-center px-2'>Contamos con profesionales de gran experiencia y calidad humana</p>
      </div>
      <ContainerTeam />
      <Footer />
    </>
  )
}

export default Team