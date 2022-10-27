import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Authentication from '../components/IniciarSesion/Authentication'

function LoginPage() {
  return (
    <div className='grid grid-rows-[auto_1fr_auto] h-screen'>
      <Header />
      <Authentication />
      <Footer />
    </div>
  )
}

export default LoginPage