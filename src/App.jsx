import React from "react";
import Abbath from "./assets/images/Black-Metal-Surf-Rock.jpg";

const App = ({ title }) => (
  <div className="column">
    <h1>{title}</h1>
    <p>Fak it Venom</p>
    <img width={300} src={Abbath} alt="Abbath" />
  </div>
);

export default App;
