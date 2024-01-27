import { createRoot } from "react-dom/client";
import React, { useEffect, useState } from 'react';
import './style.css';
import Timer from "./Timer";
import NoSleep from 'nosleep.js';


const App = () => {



  const [abilities, setAbilities] = useState([
    { title: "Establish Airhead", refreshTime: 600 , remainingSeconds: 0},
    { title: "Encourage", refreshTime: 600 , remainingSeconds: 0 },
    { title: "Ammo Drop", refreshTime: 600, remainingSeconds: 0 },
    { title: "Supply Drop", refreshTime: 120, remainingSeconds: 0 },
    { title: "Recon Plane", refreshTime: 300, remainingSeconds: 0 },
    { title: "Supply Truck", refreshTime: 90, remainingSeconds: 0 },
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAbilities(abilities => abilities.map(ability => {
        if (ability.remainingSeconds > 0) {
          return { ...ability, remainingSeconds: ability.remainingSeconds - 1 };
        } else {
          return ability;
        }
      }));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

    const reset = (title) => {
      setAbilities(abilities => abilities.map(ability => {
        if (ability.title === title) {
          return { ...ability, remainingSeconds: ability.refreshTime };
        } else {
          return ability;
        }
      }));
    };

  useEffect(() => {
    const noSleep = new NoSleep();
    noSleep.enable();
    return () => noSleep.disable();
  }, []);

  return (
    <div className="app">
      <h1 className="text-2xl">Hell Let Loose Exeuctive Officer</h1>
        {abilities.sort((a, b) => {
        if (a.remainingSeconds > b.remainingSeconds) {
          return 1;
        } else if (b.remainingSeconds > a.remainingSeconds) {
          return -1;
        } else {
          return a.title.localeCompare(b.title);
        }
      }).map((ability, index) => (
        <Timer key={index} title={ability.title} timerSeconds={ability.remainingSeconds} reset={reset} />
      ))}
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);