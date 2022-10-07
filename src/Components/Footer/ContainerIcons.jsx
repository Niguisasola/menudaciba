import React from 'react'
import iconFacebook from '../../Assets/Img/Icons/facebook.svg'
import iconInstagram from '../../Assets/Img/Icons/instagram.svg'
import iconTwitter from '../../Assets/Img/Icons/twitter.svg'

function ContainerIcons() {
  return (
    <div className='display flex justify-around '>
        <img className='w-10' src={iconFacebook} alt="Facebook" />
        <img className='w-12' src={iconInstagram} alt="Instagram" />
        <img className='w-10' src={iconTwitter} alt="Twitter" />
    </div>
  )
}

export default ContainerIcons