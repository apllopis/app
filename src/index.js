import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
const notes = [
  {
    id: 12,
    content: "Cambiamos aros",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 13,
    content: "revision cables bogies",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
    categories: ["electricidad"],
  },
  {
    id: 14,
    content: "Engrase completo",
    date: "2019-05-30T19:20:14.298Z",
    important: true,
    categories: ["mantenimiento", "revisión"],
  },
];
const rootElement = document.getElementById("root");
ReactDOM.render(<App notes={notes} />, rootElement);
