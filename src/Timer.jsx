function Timer({title, timerSeconds, reset}) {

  const minutes = Math.floor(timerSeconds / 60);
  const remainingSeconds = timerSeconds % 60;

  return (
    <div>
      { timerSeconds == 0 ? 
       
       <div className="grid grid-cols-5 gap-2 justify-start content-start max-w-96">
          <div className='col-span-3 green-text my-5 max-w-60 px-5' >{title} </div> 
          <div className="my-5 max-w-10">{minutes}:{remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds} </div>
          <div className="col-span-1"> <button className="reset-button-timer-stopped rounded-full" onClick={() => reset(title)}>Reset</button></div>
        </div>
            :
        <div className="grid grid-cols-5 gap-2 justify-start content-start max-w-96">
            <div className="col-span-3 my-5 max-w-60 px-5">{title} </div> 
            <div className="my-5 max-w-10"> {minutes}:{remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}</div>
            <div className="col-span-1"><button className="reset-button-timer-running rounded-full" onClick={() => reset(title)}>Reset</button>     </div>
        </div>
      }
    </div>
  );
}

export default Timer;