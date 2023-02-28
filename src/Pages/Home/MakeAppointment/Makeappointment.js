import React from 'react';
import expert from'../../../assets/images/c.png';
import appointmentbanner from '../../../assets/images/appointmentbanner.jfif';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';

const Makeappointment = () => {
  return (
 <section class=" mt-36 bg-cover bg-center bg-no-repeat" 
 style={{
    
    backgroundImage: `url(${appointmentbanner})`
    
 }}
 >
    <div className="hero ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={expert} alt="/" className="-mt-32 hidden md:block lg:w-1/2 rounded-lg shadow-2xl" />
    <div>
        <h2 className='text-lg text-info font-bold'>Appointment</h2>
      <h1 className="text-4xl font-bold text-white">Make an Appoinment Today</h1>
      <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <PrimaryButton> <li className='list-none'><Link to="/appointment">Appointment</Link></li></PrimaryButton>
    </div>
  </div>
</div>
 </section>
  )
}

export default Makeappointment