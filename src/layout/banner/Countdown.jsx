import { useState, useEffect } from "react";

export const Countdown = ({ duration }) => {
  const [time, setTime] = useState(duration);
  const [seconds, setSeconds] = useState();
  const [minutes, setMinutes] = useState();
  const [hours, setHours] = useState();
  const [days, setDays] = useState();

  const getFormattedTime = (miliseconds) => {
    let total_seconds = parseInt(Math.floor(miliseconds / 1000));
    let total_minutes = parseInt(Math.floor(total_seconds / 60));
    let total_hours = parseInt(Math.floor(total_minutes / 60));
    setDays(parseInt(Math.floor(total_hours / 24)));
    setSeconds(parseInt(total_seconds % 60));
    setMinutes(parseInt(total_minutes % 60));
    setHours(parseInt(total_hours % 24));
  };

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
    getFormattedTime(time);
  }, [time]);

  return (
    <div className="countdown-block">
      <div>
        <p className="countdown-number">{days}</p>
        <p className="countdown-text"> Days</p>
      </div>
      <div>
        <p className="countdown-number">{hours}</p>
        <p className="countdown-text"> Hours</p>
      </div>
      <div>
        <p className="countdown-number">{minutes}</p>
        <p className="countdown-text"> Min</p>
      </div>
      <div>
        <p className="countdown-number">{seconds}</p>
        <p className="countdown-text"> Sec</p>
      </div>
    </div>
  );
};
