import React from 'react';
import storybanner from '../../../assets/images/storybanner.jpg';

const OurStory = () => {
  return (
    <div>
        <div className="hero  mt-32">
  <div className="hero-content flex-col lg:flex-row gap-24">
    <img src={storybanner} alt="/" className="max-w-lg rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Our Story</h1>
      <p className="py-6">We started as a small beauty studio in Islington, London. Our main idea was to create the best beauty studio in the world. Can there be compromises in the best studio in the world? Our answer is always no, we care about the best quality, we hire the best specialists and provide the best customer service. This approach allowed us to grow and create awesome team that is passionate about everything we do.</p>
      <button className="btn btn-primary bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white ">Learn More</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default OurStory