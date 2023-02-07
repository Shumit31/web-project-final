import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({service,selectedDate,setService}) => {
  const{name ,slots}=service; //appointment section
  const date=format(selectedDate,'PP');

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
  service:name,
  client:name,
  slot,
  email,
  phone,
}

  console.log(booking);
  setService(null);

}



  return (
    <>
     <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{name}</h3>
   <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>



   <input type="text" disabled value={date} className="input input-bor w-full " />
   <select name='slot' className="select select-bordered w-full ">
  
  {
    slots.map((slot,i)=> <option  selected 
      value={slot}
      key={i}
      
      
      >{slot}
      
      
      </option>)
  }
</select>
   <input name='name' type="text"  placeholder='Your Name'  className="input w-full input-bordered" />
   <input name='email' type="email" placeholder='Email'  className="input w-full input-bordered " />
   <input name='phone' type="text" placeholder='Phone-Number' className="input w-full input-bordered " />
   
   <br/>
   <input className='w-full  btn vtn-primary' type="submit" value="Submit"/>
   </form>
  </div>
</div> 
    </>
  );
};

export default BookingModal;
