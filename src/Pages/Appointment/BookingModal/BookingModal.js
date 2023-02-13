import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from './../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const BookingModal = ({service,selectedDate,setService,refetch}) => {
  const{name:serviceName,slots,}=service; //appointment section
  const date=format(selectedDate,'PP');


  const {user}=useContext(AuthContext);

//event handler
const handleBooking=event=>{
  event.preventDefault();
  const form =event.target;
  const name= form.name.value;
  const email=form.email.value;
  const slot=form.slot.value;
  const phone =form.phone.value;


const  booking ={
  appointmentDate:date,
  service:serviceName,
  client:name,
  slot,
  email,
  phone,
}
 fetch('http://localhost:5000/bookings',{
  method:'POST',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(booking)
 })
 .then(res=>res.json())
 .then(data=>{
  console.log(data);



  if(data.acknowledged){
  setService(null);
  toast.success('Booking Confiremed');
  refetch();
  }
  else{
     toast.error(data.message);
  }
 })
 
  

}



  return (
    <>
     <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{serviceName}</h3>
   <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>



   <input type="text" disabled value={date} className="input input-bor w-full " />
   
  
   <select name="slot" className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-primary w-full' type="submit" value="Submit" />
   </form>
  </div>
</div> 
    </>
  );
};

export default BookingModal;
