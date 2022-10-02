import "../blocks/Main.css";
import "../blocks/cards.css";
import WeatherCard from "./WeatherCard";

function Main(props) {
  return (
    <main className="main">
      <section className="cards">
        <WeatherCard
          id="Weather"
          key="WeatherCard"
          temp={props.temp}
          weather={props.weather}
          isDay={props.isDay}
        />
        <h3 className="cards__title">
          Today is {props.temp} F / You may want to wear:
        </h3>
        {props.children}
      </section>
    </main>
  );
}

export default Main;
