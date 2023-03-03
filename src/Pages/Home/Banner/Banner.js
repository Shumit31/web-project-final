import React from 'react'
import banner from '../../../assets/images/banner.png';

function Banner() {
  return (
    <div className="hero  bg-base-200 mt-2 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={banner} alt="/" className=" rounded-lg lg:w=1/2 shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold ">Welcome to Chérie</h1>
      <p className="py-6">Chérie is a North Vancouver based boutique hair salon, we specialize in all areas of hair including precision haircuts, creative highlights, natrual balayage, lived-in blondes, men's long hair, barbering and skin fades. Our talented hairstylists truly love what they do. Our goal is to create hair that works with your lifestyle.</p>
      <button  className="btn btn-primary bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white  ">Get Started</button>
    </div>
  </div>
</div>
  );
};

export default Banner;