import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import configureStore from "./Store";
import App from "./App";
import "./index.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Callout from "./component/Callout";

let store = configureStore();

function render(){
  let root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <Provider store={store}>
      <App></App>
    </Provider>
  );
store.subscribe(() => root.render(   
    <Provider store={store}>
      <App></App>
    </Provider>)
    );
}


render();