import React from 'react'
import CalendarSetMore from '../Components/Home/Calendario/Calendar'
import FormCalendar from '../Components/Home/Calendario/FormCalendar'
import SectionVideo from '../Components/Home/SectionVideo/SectionVideo'
import Logo from '../Components/Logo'



function HomePage() {
  return (
    <div>
      <Logo/>
      <CalendarSetMore/>
      <SectionVideo/>
      <FormCalendar/>
    </div>
    
  )
}

export default HomePage