import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({service,selectedDate}) => {
  const{name ,slots}=service; //appointment section
  const date=format(selectedDate,'PP');
  return (
    <>
     <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{name}</h3>
   <form className='grid grid-cols-1 gap-3 mt-10'>



   <input type="text" disabled value={date} className="input input-bor w-full " />
   <select className="select select-bordered w-full ">
  
  {
    slots.map(slot=> <option  selected value={slot}>{slot}</option>)
  }
</select>
   <input type="text" className="input w-full input-bordered" />
   <input type="text"  className="input w-full input-bordered " />
   <input type="text" className="input w-full input-bordered " />
   <input type="text"  className="input w-full input-bordered " />
   <br/>
   <input className='w-full  btn vtn-primary' type="submit" value="Submit"/>
   </form>
  </div>
</div> 
    </>
  );
};

export default BookingModal;
