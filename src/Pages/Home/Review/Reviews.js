import React from 'react';
import qoute from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Reviews = () => {

    const reviews =[
        {
               _id:1,
               name:'— Stephen E.',
               image:people1,
               userReview:'Best place in Wheat Ridge to have your hair cut or anything to do with hair. Cherie has been in the business for a long time, besides cutting and caring for hair, he knows whats best for your scalp and hair. As a guy he is fast and really precise, he gets you in and out pretty quick. I have heard him also make great suggestions to his female customers. He is very caring and makes you feel like family.”',
               location:'London'
        },
        {
            _id:2,
            name:'— Elena',
            image:people2,
            userReview:'Cherie is the most professional hair stylist I have ever met. Every time I visit his shop I’m always certain that he always give me the color and style that I will absolutely love when he is finished. He also takes care to listen to my wishes and is always kind,warm and never rude. I feel very comfortable sending others to him as I know how professional he is. I am happy and grateful',
            
            location:'Manchester City'
     },
     {
        _id:3,
        name:'— Paul C.',
        image:people3,
        userReview:'Our whole family has been getting our hair done by Cherie for ten years now. My wife has very curly hair and Cherie has been the only stylist we have found who is able to make her love her hair again. Thanks for your friendly yet professional studio, even makes this old man comfortable like an old neighborhood barber shop would!',
        location:'Arsenal'
 }
    ]
  return (
  <section className='my-16 mt-16'>
    <div className='flex justify-between'>
        <div>
          <h3 className='text-xl text-primary font-bold'>Review</h3>
          <h2 className='text-4xl'>What Our Clients Says</h2>
        </div>
        <figure>
    <img className='w-24 lg:w-48' src={qoute} alt=""/>
        </figure>
    </div>
    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
{
  reviews.map(review=><Review
  key={review._id}
  review={review}></Review>)
}
    </div>
  </section>
  );
};

export default Reviews;