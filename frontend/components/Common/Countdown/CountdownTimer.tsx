import React from 'react';
import { useCountdown } from './useCountdown';

interface IDateTimeDisplay{
  value?:number, 
  type?:string, 
  isDanger?:boolean
}

interface IShowCounter{
  days:number,
  hours: number,
  minutes: number,
  seconds: number,
}

const ExpiredNotice = () => {
    return (
      <div className="expired-notice">
        <span>Expired!!!</span>
        <p>Please select a future date and time.</p>
      </div>
    );
  };

  const DateTimeDisplay = ({ value, type, isDanger }:IDateTimeDisplay) => {
    return (
      <div className="timer">
        <p>{value}</p>
        <span>{type}</span>
      </div>
    );
  };

  const ShowCounter = ({ days, hours, minutes, seconds }:IShowCounter) => {
    return (
      <div className="show-counter">
        <a
          href="https://tapasadhikary.com"
          target="_blank"
          rel="noopener noreferrer"
          className="countdown-link"
        >
            <div className="d-flex gap-1 align-items-center ">
                <span className='days'>{days} ngày</span>
                <DateTimeDisplay value={hours} isDanger={false} />
                <p>:</p>
                <DateTimeDisplay value={minutes} isDanger={false} />
                <p>:</p>
                <DateTimeDisplay value={seconds} isDanger={false} />   
            </div>
        </a>
      </div>
    );
  };
  
const CountdownTimer = ({ targetDate }:any) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;