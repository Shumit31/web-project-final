import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';


const MyAppointment = () => {
    const {user}= useContext(AuthContext);
    const url=`http://localhost:5000/bookings?email=${user?.email}`;

    const {data:bookings=[]} =useQuery({
        queryKey:['bookings',user.email],
        queryFn: async()=>{
           const res = await fetch(url);
           const data = await res.json();
           return data;
        }
    })
    return (
        <div>
            <h3 className='text-3xl mb-5'>My Appointments</h3>
            <div className="overflow-x-auto">
  <table className="table w-full">

    <thead>
    <tr>
        <th>1</th>
        <td>Name</td>
        <td>Service</td>
        <td>Date</td>
        <td>Time</td>
      </tr>
  
    </thead>
    <tbody>
  
    {
        bookings.map((booking,i)=> <tr key={booking._id}>
            <th>{i+1}</th>
            <td>{booking.client}</td>
            <td>{booking.service}</td>
            <td>{booking.appointmentDate}</td>
            <td>{booking.slot}</td>
          </tr>)
    }
    
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointment;