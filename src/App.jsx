import { createRoot } from "react-dom/client";
import React from 'react';
import './style.css';
import Timer from "./Timer";

const App = () => {
  return (
    <div className="app">
      <h1>Hell Let Loose XO Resource Manager</h1>
      <Timer title = "Establish Airhead" timerSeconds={600}/>
      <Timer title = "Encouraged" timerSeconds={600}/>
      <Timer title = "Ammo Drop" timerSeconds={600}/>
      <Timer title = "Supply Drop" timerSeconds={120}/>
      <Timer title = "Recon Plane" timerSeconds={300}/>
      <Timer title = "Supply Truck" timerSeconds={90} />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);