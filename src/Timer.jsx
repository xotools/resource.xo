import React, { useState, useEffect } from 'react';

function Timer({title, timerSeconds = 120}) {
  const [seconds, setSeconds] = useState(timerSeconds);

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [seconds]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const resetTimer = () => {
    setSeconds(timerSeconds);
  };

  return (
    <div>
      { seconds == 0 ? 
        <p class='green-text'>{title}:: {minutes}:{remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}
            <button onClick={resetTimer}>Reset Timer!!</button></p> 
            :
        <p>{title}:: {minutes}:{remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}
            <button onClick={resetTimer}>Reset Timer</button></p>     
      }
    </div>
  );
}

export default Timer;