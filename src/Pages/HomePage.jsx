import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer/Footer'
import SectionVideo from '../Components/Home/SectionVideo/SectionVideo'
import Header from '../Components/Extras/Header'
import LoadingHome from '../Components/Home/LoadingHome';





function HomePage() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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