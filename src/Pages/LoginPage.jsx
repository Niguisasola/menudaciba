import React from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Authentication from '../Components/IniciarSesion/Authentication'

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