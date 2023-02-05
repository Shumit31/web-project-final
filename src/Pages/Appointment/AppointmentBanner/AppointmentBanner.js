import React, { useState } from 'react';
import appointmentbanner from'../../../assets/images/appointmentbanner.jpg';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({selectedDate,setselectedDate}) => {
   
  return (
   <header className='my-6'>
    <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={appointmentbanner} alt="/" className="max-w-sm rounded-lg shadow-2xl" />
    <div className='mr-16'>
    <DayPicker  mode="single"
      selected={selectedDate}
      onSelect={setselectedDate}
      >
        
    </DayPicker>
    
    </div>
  </div>
</div>
   </header>
  )
}

export default AppointmentBanner