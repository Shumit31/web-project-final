import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Hours',
            description: 'Mon - Fri: 8 am — 8 pm ',
         
            icon: clock,
            bgClass: 'bg-error'


        },
        {
            id: 2,
            name: 'Location',
            description: '85 Royal Mint Street London, E1 8LG, United Kingdom',
            icon: marker,
            bgClass: 'bg-info'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: 'T: 070 9485 7568 info@beautysalon.com',
            icon: phone,
            bgClass: 'bg-warning'
        }
    ]
    return (
        <div className='  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 '>
            {
                cardData.map(card => <InfoCard
                    key={card.id}
                    card={card}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;