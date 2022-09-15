import "../blocks/App.css";
import React from "react";
import Header from "./Header";
import Main from "./Main";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";

function App() {
  document.body.classList.add("body");

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main>
          <WeatherCard />
          <ItemCard />
        </Main>
      </div>
    </div>
  );
}

export default App;
