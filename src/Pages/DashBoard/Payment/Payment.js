import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking=useLoaderData();
    console.log('booking data', booking)
    const {service,price,appointmentDate,slot} = booking;
    return (
        <div>
            <h3 className='text-3xl'>Payment for {service}</h3>
            <p className='text-xl'>Please pay <strong>$</strong>{price} for your appointment on {appointmentDate} at {slot}</p>
        </div>
    );
};

export default Payment;