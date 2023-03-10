import React from 'react';
import { useForm } from 'react-hook-form';

import Loading from '../../Shared/Loading/Loading';
import { useQuery } from '@tanstack/react-query';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const AddSpecialist = () => {
    const {register,handleSubmit,formState:{errors}}=useForm();

    const imageHostKey =process.env.REACT_APP_imgbb_key;
     
    const navigate = useNavigate();

    const{data: specialties,isLoading} = useQuery({
        queryKey:['specialty'],
        queryFn:async()=>{
            const res = await fetch('http://localhost:5000/appointmentSpeciality');
            const data = await res.json();
            return data;
        }
    })


    const handleSpecialist = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                console.log(imgData.data.url);
                const specialist = {
                    name: data.name, 
                    email: data.email,
                    specialty: data.specialty,
                    image: imgData.data.url
                }

            //save specialist information into the data base
                fetch('http://localhost:5000/specialists', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(specialist)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.name} is added successfully`);
                    navigate('/dashboard/managespecialists')
                   
                })
            }
        })
    }

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        // <div className='flex justify-center items-center mt-36'>
        <div className='w-96 p-7'>
            <h2 className='text-4xl '>Add a Specialist</h2>
            <form onSubmit={handleSubmit(handleSpecialist)}>

      <div className="form-control w-full max-w-xs ">
          <label className="label"> <span className="label-text">Name</span></label>
          <input type="text"  
          {...register("name",{
            required:"Name is required"
          })}
          className="input input-bordered w-full max-w-xs" />
           {errors.name &&<p className='text-red-600'>{errors.name.message}</p>}
        
        </div>



        <div className="form-control w-full max-w-xs">
          <label className="label"> <span className="label-text">Email</span></label>
          <input type="email" 
           {...register("email",{
            required:"Email is required",
            pattern:{ value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: 'Valid Email must required' }
           })}
          className="input input-bordered w-full max-w-xs" />
           {errors.email &&<p className='text-red-600'>{errors.email.message}</p>}
        
        </div>



        <div className="form-control w-full max-w-xs">
          <label className="label"> <span className="label-text">Speciality</span>   </label>
          <select 
          
          {...register('specialty')}
          className="select input-bordered w-full max-w-xs">
 

  {
    specialties.map(specialty=><option
    key={specialty._id}
    value={specialty.name}
    
    >{specialty.name}</option>)
        
  }
  

</select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label"> <span className="label-text">Photo</span></label>
          <input type="file"  
          {...register("image",{
            required:"Photo is required"
          })}
          className="input input-bordered w-full max-w-xs" />
           {errors.img &&<p className='text-red-600'>{errors.img.message}</p>}
        
        </div>
       


        <input className='btn btn-content w-full mt-4'  value='Add Specialist' type="submit" />
        
      </form>
        </div>
        // </div>
    );
};

export default AddSpecialist;