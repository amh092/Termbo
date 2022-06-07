import React, { useState } from 'react';

import classes from './Calendar.css'
import Calendar from 'react-calendar';

function Calender() {
  const [value, onChange] = useState(new Date());

  return (
    <div >
    
      <Calendar  showNavigation={true}   className={classes.calendar} calendarType={'Arabic'} onChange={onChange} value={value} />
    </div>
  );
}


export default Calender

