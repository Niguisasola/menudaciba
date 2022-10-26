import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header';
import SectionVideo from '../components/SectionVideo/SectionVideo'
import LoadingHome from '../components/LoadingHome';
import Main from '../components/Main/Main';

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
      {loading ?
        <div className='loadingHome'>
          <LoadingHome />
        </div>
        :
        <>
          <Header />
          <SectionVideo />
          <Main />
          <Footer />
        </>
      }

    </div>


  )
}

export default HomePage