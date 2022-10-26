import React from 'react'
import iconFacebook from '../../assets/img/icons/facebook.svg'
import iconInstagram from '../../assets/img/icons/instagram.svg'
import iconTwitter from '../../assets/img/icons/twitter.svg'

function ContainerIcons() {
  return (
    <div className='display flex justify-between '>
      <a href="https://www.facebook.com/profile.php?id=100064361934637" target="_blank" rel="noopener noreferrer" >
        <img className='w-10' src={iconFacebook} alt="Facebook" />
      </a>
      <a href="https://www.instagram.com/lacibascg/" target="_blank" rel="noopener noreferrer" >
        <img className='w-12' src={iconInstagram} alt="Instagram" />
      </a>
      <a href="https://twitter.com/la_ciba" target="_blank" rel="noopener noreferrer" >
        <img className='w-10' src={iconTwitter} alt="Twitter" />
      </a>
    </div>
  )
}

export default ContainerIcons