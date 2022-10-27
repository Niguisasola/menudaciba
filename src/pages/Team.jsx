import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import ContainerTeam from '../components/Team/ContainerTeam'

function Team() {
  return (
    <div className='grid grid-rows-[auto_1fr_auto] h-screen'>
      <Header />
      <div>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='p-1 font-alata text-violeta-ciba text-4xl'>Equip</h2>
        <p className='font-roboto text-center px-2'>Comptem amb professionals de gran experiència i qualitat humana</p>
      </div>
      <ContainerTeam />
      </div>
      <Footer />
    </div>
  )
}

export default Team