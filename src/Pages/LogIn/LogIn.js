import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseToken from '../../hooks/useToken';


import { AuthContext } from './../../contexts/AuthProvider';


const LogIn = () => {
  const { register,formState: { errors }, handleSubmit } = useForm();

  //login context
  const{signIn}=useContext(AuthContext);
  //custom hook
  const[loginError,setLoginError]= useState('');

  //to get the token
  const [loginUserEmail,setLoginUserEmail] =useState('');

const [token] = UseToken(loginUserEmail)

//navigate to home after login
  const location =useLocation();
  const navigate=useNavigate();
  const from = location.state?.from?.pathname || '/';




  if(token){
    navigate(from,{replace:true});
  }




  //login method
  const handleLogin=data=>{
    console.log(data);
     setLoginError('');//to clear the error

     //context to get and login  with  the email and pass into firebase 
    signIn(data.email,data.password)
    .then(result=>{
      const user =result.user;
      console.log(user);
      setLoginUserEmail(data.email);
     

    })
    .catch(error=> {
      console.log(error);
      setLoginError(error.message);

    });
  }



  return (
    <div className='h-[600px] flex justify-center items-center'>
      <div className='w-96 p-7'>
        <h2  className='text-3xl text-center'>LogIn</h2>
        <form onSubmit={handleSubmit(handleLogin)}>               


          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text">Email</span></label>

            <input type="text" 
            {...register("email",
            {required:"Email Address is required"})} 

            className="input input-bordered w-full max-w-xs" />
             {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
          </div>



          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text">Password</span>   </label>
            <input type="password" 
            {...register("password",
            {
              
              required:"Password is required",
              minLength:{value:6,message:'Password must be more than 6 characters'}
          
          
          })}
             className="input input-bordered w-full max-w-xs" />
            <label className="label"><span className="label-text"></span>   </label>
            <label className="label"><span className="label-text"></span>   </label>
            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
          </div>


          <input className='btn btn-content w-full '  value='login' type="submit" />
         <div className='text-red-600'>
          {loginError && <p>{loginError}</p>}
         </div>
        </form>
       <p>New to Ch??rie?<Link className='text-primary' to='/signup'>Create new account</Link></p>
   


       

      


      </div>
    </div>
  );
};

export default LogIn;