import { createRoot } from "react-dom/client";
import React, { useEffect } from 'react';
import './style.css';
import Timer from "./Timer";
import NoSleep from 'nosleep.js';


const App = () => {

  const abilities = [
    { title: "Establish Airhead", refreshTime: 600 },
    { title: "Encourage", refreshTime: 600 },
    { title: "Ammo Drop", refreshTime: 600 },
    { title: "Supply Drop", refreshTime: 120 },
    { title: "Recon Plane", refreshTime: 300 },
    { title: "Supply Truck", refreshTime: 90 },
  ];

  useEffect(() => {
    const noSleep = new NoSleep();
    noSleep.enable();
    return () => noSleep.disable();
  }, []);

  return (
    <div className="app">
      <h1>Hell Let Loose XO Resource Manager</h1>
      {abilities.map((abilities, index) => (
        <Timer key={index} title={abilities.title} timerSeconds={abilities.refreshTime} />
      ))}
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);