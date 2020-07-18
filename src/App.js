import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useLocation } from "./useLocation";
function App() {
  const location = useLocation();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Location</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Latitude: {location.latitude}, Latitude: {location.longitude}
        </a>
      </header>
    </div>
  );
}

export default App;
