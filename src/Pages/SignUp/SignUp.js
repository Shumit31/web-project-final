import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from './../../contexts/AuthProvider';

const SignUp = () => {
  const {register,handleSubmit,formState:{errors}}=useForm();


  const {createUser}=useContext(AuthContext);
  const handleSignUp=(data)=>{
    console.log(data);
    createUser(data.email,data.password)
    .then(result=>{
      const user = result.user;
      console.log(user);
    })
    .catch(error=>console.log(error));
  }
  return (
    <div className='h-[800px] flex justify-center items-center'>
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
       


        <input className='btn btn-content w-full mt-4'  value='Sign Up' type="submit" />
      </form>


      <p>Already have an account?<Link className='text-primary' to='/login'>Please Login</Link></p>


      <div className='divider'>OR</div>

      <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>


    </div>
  </div>
  );
};

export default SignUp;
