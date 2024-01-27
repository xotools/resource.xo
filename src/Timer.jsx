function Timer({title, timerSeconds, reset}) {

  const minutes = Math.floor(timerSeconds / 60);
  const remainingSeconds = timerSeconds % 60;

  return (
    <div>
      { timerSeconds == 0 ? 
        <p className='green-text'>{title}:: {minutes}:{remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}
            <button className="reset-button-timer-stopped" onClick={() => reset(title)}>Reset Timer!!</button></p> 
            :
        <p>{title}:: {minutes}:{remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}
            <button className="reset-button-timer-running" onClick={() => reset(title)}>Reset Timer</button></p>     
      }
    </div>
  );
}

export default Timer;