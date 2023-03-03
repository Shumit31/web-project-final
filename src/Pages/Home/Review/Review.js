import React from 'react'

const Review = ({review}) => {
    const{name,image,userReview,location}=review;
  return (
    <div>
<div className="card  shadow-xl h-full">
  <div className="card-body ">
    
    <p>{userReview}</p>
    <div className="flex items-end ">
    <div className="avatar mr-6 pt-3 justify-end ">
  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={image} alt="/" />
  </div>
</div>
<div>
    
    <h5 className='text-lg'>{name}</h5> 
    <p>{location}</p>
</div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Review