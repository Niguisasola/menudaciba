import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header';
import SectionVideo from '../Components/SectionVideo/SectionVideo'
import LoadingHome from '../Components/LoadingHome';

function HomePage() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      {loading?
        <div className='loadingHome'>
        <LoadingHome/>
        </div>
        :
      <>
      <Header/>
      <SectionVideo/>
      <Footer/>
      </>
      }
      
    </div>

    
  )
}

export default HomePage