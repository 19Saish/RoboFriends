import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CardList from './components/CardList';
import "tachyons";
import { robots } from "./robots";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
);
