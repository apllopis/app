import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { useState } from "react";

const ListofClicks = ({ clicks }) => {
  return (
    <>
      <p>Clicks totales: {clicks.length}</p>
      {clicks.join(", ")}
    </>
  );
};
const Nousado = () => {
  return <h1>No usado todavía</h1>;
};

const Counter = ({ contador }) => {
  return <h2>{contador}</h2>;
};

const rootElement = document.getElementById("root");

const App = () => {
  const [contador, setContador] = useState({
    izda: 0,
    dcha: 0,
  });
  const [clicks, setClicks] = useState([]);

  const handleClickLeft = () => {
    const nuevoEstadoContador = {
      ...contador,
      izda: contador.izda + 1,
    };
    setContador(nuevoEstadoContador);
    setClicks((prevClicks) => [...prevClicks, "U"]);
  };

  const handleClickReset = () => {
    const nuevoEstadoContador = {
      ...contador,
      izda: 0,
      dcha: 0,
    };
    setContador(nuevoEstadoContador);
    setClicks((prevClicks) => [...prevClicks, "Rst"]);
  };
  const handleClickRight = () => {
    const nuevoEstadoContador = {
      ...contador,
      dcha: contador.dcha + 1,
    };
    setContador(nuevoEstadoContador);
    setClicks((prevClicks) => [...prevClicks, "D"]);
  };

  return (
    <div>
      <h1> Clase3</h1>
      <Counter contador={contador.izda} />
      <button onClick={handleClickLeft}>Superior</button>
      <button onClick={handleClickReset}>Reset</button>
      <button onClick={handleClickRight}>Inferior</button>
      <Counter contador={contador.dcha} />
      {clicks.length === 0 ? <Nousado /> : <ListofClicks clicks={clicks} />}
    </div>
  );
};
ReactDOM.render(<App />, rootElement);
