
import appointmentbanner from'../../../assets/images/appointmentbanner.jpg';

import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({selectedDate,setselectedDate}) => {


  const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid currentColor;
  }
  .my-selected:hover:not([disabled]) { 
    border-color: blue;
    color: blue;
  }
  .my-today { 
    font-weight: bold;
    font-size: 140%; 
    color: green;
  }
`;
   
  return (
    
   <header className='my-6 '>
    <style>{css}</style>
    <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={appointmentbanner} alt="/" className="max-w-lg rounded-lg shadow-2xl" />

    <div className='mr-16'>

    
    <DayPicker  mode="single"              //one appointment booking calender
      selected={selectedDate}               //select which date
      onSelect={setselectedDate}             //event handler for seleting date
      disabled= {{ before: new Date() }}
      modifiersClassNames={{
        selected: 'my-selected',
        today: 'my-today'
      }}
      modifiersStyles={{
        disabled: { fontSize: '75%' }
      }}
      >
        
    </DayPicker>
    
    </div>
  </div>
</div>
   </header>
  )
}

export default AppointmentBanner