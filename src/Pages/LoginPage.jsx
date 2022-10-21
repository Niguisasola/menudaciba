import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Authentication from '../components/IniciarSesion/Authentication'

function LoginPage() {
  return (
    <>
      <Header />
      <Authentication />
      <Footer />
    </>
  )
}

export default LoginPage