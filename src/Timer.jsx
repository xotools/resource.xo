function Timer({title, timerSeconds, reset}) {

  const minutes = Math.floor(timerSeconds / 60);
  const remainingSeconds = timerSeconds % 60;

  return (
    <div>
      { timerSeconds == 0 ? 
       
       <div className="grid grid-cols-3 gap-2 justify-start content-start">
          <div className='green-text my-5 max-w-40 px-5' >{title} </div> 
          <div className="my-5 max-w-10">{minutes}:{remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds} </div>
          <div className="content-start" ><button className="reset-button-timer-stopped" onClick={() => reset(title)}>Reset Timer!!</button></div>
        </div>
            :
        <div className="grid grid-cols-3 gap-2 justify-start content-start">
            <div className="my-5 max-w-40 px-5">{title}:: </div> 
            <div className="my-5 max-w-10"> {minutes}:{remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}</div>
            <div className="content-start"><button className="reset-button-timer-running" onClick={() => reset(title)}>Reset Timer</button>     </div>
        </div>
      }
    </div>
  );
}

export default Timer;