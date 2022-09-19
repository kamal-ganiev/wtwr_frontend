import "../blocks/App.css";
import React from "react";
import Header from "./Header";
import Main from "./Main";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import ModalWithForm from "./ModalWithForm";
import { handleModalOpen } from "./ModalWithForm";
import Footer from "./Footer";

function App() {
  document.body.classList.add("body");
  const temp = "75°";

  return (
    <div className="App">
      <div className="page">
        <Header openModal={handleModalOpen} modalName="add" />
        <Main temp={temp}>
          <WeatherCard id="Weather" key="WeatherCard" temp={temp} />
          <ItemCard id="Item" key="ItemCard" />
        </Main>
        <ModalWithForm
          title="New garment"
          id="AddingGarment"
          buttonText="Add garment"
          name="add"
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
