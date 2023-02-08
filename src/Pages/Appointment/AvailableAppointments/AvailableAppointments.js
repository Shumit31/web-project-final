import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentSection from './AppointmentSection';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointments = ({selectedDate}) => {
    const [appointmentSection,setappointmentSection]=useState([]);
    const [service,setService]=useState(null);

   useEffect(()=>{
    fetch('appointmentSection.json')
    .then(res=>res.json()
    .then(data=>setappointmentSection(data)))
   },[])
  return (
    <section className='my-16'>
        <p className='text-center text-primary font-bold'>Available  Appointment on {format(selectedDate,'PP')} </p>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>

{
    appointmentSection.map(section=><AppointmentSection
    key={section._id}
    appointmentSection={section}
    setService={setService}
    
    ></AppointmentSection>)
}
        </div>
      {    service &&
          <BookingModal
          selectedDate={selectedDate}
          service={service}
          setService={setService}
          ></BookingModal>
      }
    </section>
  );
};

export default AvailableAppointments;