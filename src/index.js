import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { useState } from "react";
const rootElement = document.getElementById("root");

const App = ({ inicial }) => {
  const [contador, setContador] = useState(inicial);

  const handleClickAdd = () => {
    setContador(contador + 1);
  };
  const handleClickReset = () => {
    setContador(inicial);
  };
  const handleClickDec = () => {
    setContador(contador - 1);
  };

  const isEven = contador % 2 === 0;
  const mensaje = isEven ? "Par" : "Impar";

  return (
    <div>
      <h1> Clase3</h1>
      <h2>{contador}</h2>
      <p>{mensaje} </p>
      <button onClick={handleClickDec}>-</button>
      <button onClick={handleClickReset}>Reset</button>
      <button onClick={handleClickAdd}>+</button>
    </div>
  );
};
ReactDOM.render(<App inicial={0} />, rootElement);
