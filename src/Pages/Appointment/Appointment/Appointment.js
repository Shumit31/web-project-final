import React, { useState } from 'react'
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
  const [selectedDate,setselectedDate]=useState(new Date()); //lift up the state and used the date in both component
  return (
    <div>
        <AppointmentBanner
        selectedDate={selectedDate}                //props.state
        setselectedDate={setselectedDate}
        
        ></AppointmentBanner>

        <AvailableAppointments
        selectedDate={selectedDate}
        ></AvailableAppointments>
        
    </div>
  );
};

export default Appointment;