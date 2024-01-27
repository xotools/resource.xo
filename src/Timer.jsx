function Timer({title, timerSeconds, reset}) {

  const minutes = Math.floor(timerSeconds / 60);
  const remainingSeconds = timerSeconds % 60;

  return (
    <div>
      { timerSeconds == 0 ? 
        <p class='green-text'>{title}:: {minutes}:{remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}
            <button class="reset-button-timer-stopped" onClick={() => reset(title)}>Reset Timer!!</button></p> 
            :
        <p>{title}:: {minutes}:{remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}
            <button class="reset-button-timer-running" onClick={() => reset(title)}>Reset Timer</button></p>     
      }
    </div>
  );
}

export default Timer;