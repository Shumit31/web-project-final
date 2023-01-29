import React from 'react'
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import InfoCards from '../InfoCards/InfoCards';
import Makeappointment from '../MakeAppointment/Makeappointment';
import OurStory from '../OurStory/OurStory';
import Reviews from '../Review/Reviews';

import Services from '../Services/Services';

const Home = () => {
  return (
    <div className='mx-5'>
        <Banner></Banner>
        <InfoCards></InfoCards>
        <Services></Services>
        <OurStory></OurStory>
        <Makeappointment></Makeappointment>
        <Reviews></Reviews>
        <Contact></Contact>
    </div>
  )
}

export default Home;