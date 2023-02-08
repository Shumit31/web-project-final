import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignUp = () => {
  const {register,handleSubmit,formState:{errors}}=useForm();
  const handleSignUp=(data)=>{
    console.log(data);
  }
  return (
    <div className='h-[600px] flex justify-center items-center'>
    <div className='w-96 p-7'>
      <h2 className='text-3xl text-center'>SignUp</h2>
      <form onSubmit={handleSubmit(handleSignUp)} >

      <div className="form-control w-full max-w-xs">
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
          <label className="label"> <span className="label-text">Password</span>   </label>
          <input type="password"
           {...register("password",{
            required:"Password is required",
            minLength:{value:6,message:"Password must be 6 characters long"},

            pattern:{ value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
           })} 
           
           className="input input-bordered w-full max-w-xs" />
           {errors.password &&<p className='text-red-600'>{errors.password.message}</p>}
        
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label"> <span className="label-text">Phone Number</span>   </label>
          <input type="number"
           {...register("number",{
            required:"Phone Number is required",
             maxLength:{value:11,message:"Phone Number must be 11 characters long"},
            pattern:{ value: /(\+88|88)?-?01[1-9]\d{8}/g, message: 'Valid Phone number required' }


         
           })} 
           
           className="input input-bordered w-full max-w-xs" />
           {errors.number &&<p className='text-red-600'>{errors.number.message}</p>}
        
        </div>


        <input className='btn btn-content w-full'  value='Sign Up' type="submit" />
      </form>


      <p>Already have an account?<Link className='text-primary' to='/login'>Please Login</Link></p>


      <div className='divider'>OR</div>

      <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>


    </div>
  </div>
  );
};

export default SignUp;
