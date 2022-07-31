import React from "react";
import "./styles.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1 className="dicover">DISCOVER THE WORLD</h1>
        <h2 className="through">through the meanings of words</h2>
      </header>
      <Dictionary />
      <footer className="sign">This app was coded by Yulia Ratseburzhynska, and is <a href="https://github.com/UyliaRa/dictionary-app-react" target="_blank" rel="noreferrer">open-sourced</a></footer>
    </div>
  );
}
