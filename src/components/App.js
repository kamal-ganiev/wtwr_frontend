import "../blocks/App.css";
import React from "react";
import Header from "./Header";

function App() {
  document.body.classList.add("body");

  return (
    <div className="App">
      <div className="page">
        <Header />
      </div>
    </div>
  );
}

export default App;
