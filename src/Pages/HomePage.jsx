import React from 'react'
import CalendarSetMore from '../Components/Home/Calendario/Calendar'
import FormCalendar from '../Components/Home/Calendario/FormCalendar'
import SectionVideo from '../Components/Home/SectionVideo/SectionVideo'
import Header from '../Components/Header'



function HomePage() {
  return (
    <div>
      <Header/>
      <CalendarSetMore/>
      <SectionVideo/>
      <FormCalendar/>
    </div>
    
  )
}

export default HomePage