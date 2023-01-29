import React from 'react';
import haircut from '../../../assets/images/haircut.png';
import styling from '../../../assets/images/styling.png';
import treatment from '../../../assets/images/treatment.png';
import Service from './Service';


const Services = () => {
    const servicesData=[
        {
           id:1,
           name:'Haircut',
           description:'A haircut, trim or shape on anyone over the age of 10. (60 min)',
           img:haircut

        },
        {
            id:2,
            name:'Styling',
            description:'A haircut, trim, shape on anyone over the age of 10 with a customized conditioning treatment. (1 hr 15 min)',
            img:styling
        },
        {
            id:3,
            name:'Treatment',
            description:'Hair treatment using Orising hair care products. (60 min)',
            img:treatment
        }
    ]
  return (
    <div className='mt-24 '>
        <div className='text-center '>
      <h3 className='font-xl font-bold text-primary uppercase'>Our Services</h3>
      <h2 className='text-3xl'>Services We Provided</h2>

        </div>
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
{
    servicesData.map(service=><Service key={service.id}
    service={service}>
    </Service>)
}
        </div>
    </div>
  );
};

export default Services;