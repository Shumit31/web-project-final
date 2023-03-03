import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from './../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import UseToken from '../../hooks/useToken';


const SignUp = () => {
  
  const {register,handleSubmit,formState:{errors}}=useForm();


  const {createUser,updateUser}=useContext(AuthContext); //signup context

const [signUpError,setsignUpError]=useState('');

const [createdUserEmail,setCreatedUserEmail] =useState('')

const [token] =UseToken(createdUserEmail);



const navigate =useNavigate();

if(token){
  navigate('/');
}



 //event handler for sign up
  const handleSignUp=(data)=>{
    console.log(data);
    setsignUpError('')


     //context to get and createuser with  the email and pass into firebase 
    createUser(data.email,data.password)
    .then(result=>{
      const user = result.user;
      console.log(user);
      toast('User create successfully');
      
      const userInfo={
        displayName:data.name
      }

      //update the user
      updateUser(userInfo)
      .then(()=>{
        saveUser(data.name,data.email);

        
      })
      .catch(err=>console.log(err));
    })
    .catch(error=>{
      console.log(error)
      setsignUpError(error.message)
    
    
    });
  }


  //to get the user in all user
  const saveUser = (name, email) =>{
    const user ={name, email};
    fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
     setCreatedUserEmail(email);
    })

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

            pattern:{ value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z])(?=.*[0-9])/, message: 'Password must have uppercase number,lowercase, number and special characters' }
           })} 
           
           className="input input-bordered w-full max-w-xs" />
           {errors.password &&<p className='text-red-600'>{errors.password.message}</p>}
        
        </div>
        
        {/* <div className="form-control w-full max-w-xs">
          <label className="label"> <span className="label-text">Phone</span>   </label>
          <input type="phone"
           {...register("phone",{
            required:"Password is required",
            minLength:{value:11,message:"Password must be 6 characters long"},

            pattern:{ value:/(\+88)?-?01[3-9]\d{8}/, message: 'Password must have uppercase number,lowercase, number and special characters' }
           })} 
           
           className="input input-bordered w-full max-w-xs" />
           {errors.phone &&<p className='text-red-600'>{errors.phone.message}</p>}
        
        </div> */}
      


        <input className='btn btn-content w-full mt-4'  value='Sign Up' type="submit" />
        {signUpError &&<p className='text-red-600'>{signUpError}</p>}
      </form>


      <p>Already have an account?<Link className='text-primary' to='/login'>Please Login</Link></p>




      


    </div>
  </div>
  );
};

export default SignUp;
