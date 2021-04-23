import React from "react";
import Navigation from "./components/Navigation";
import "./App.css";
import Router from "./Router";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation className="nav-bar" />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
