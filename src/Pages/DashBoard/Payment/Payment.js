import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
    const booking=useLoaderData();
    const navigation = useNavigation();
    console.log('booking data', booking)
    const {service,price,appointmentDate,slot} = booking;

    if(navigation.state==="loading"){
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className='text-3xl'>Payment for {service}</h3>
            <p className='text-xl'>Please pay <strong>$</strong>{price} for your appointment on {appointmentDate} at {slot}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;