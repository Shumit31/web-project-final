import React from 'react'
import Appointment from './../Appointment/Appointment';

export const AppointmentSection = ({appointmentSection}) => {
    const{name,slots}=appointmentSection;
    
  return (
    <div>
        <div className="card shadow-xl">
  <div className="card-body text-center ">
    <h2 className="text-center text-3xl text-primary font-bold">{name}</h2>
    <p>{slots.length>0 ? slots[0]:'Try another day'}</p>
    <p>{slots.length} {slots.length>1?'spaces' :'space' } available</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary text-white">Book Appointment</button>
    </div>
  </div>
</div>
    </div>
  )
}
export default AppointmentSection;