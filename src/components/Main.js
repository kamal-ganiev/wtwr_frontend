function Main(props) {
  return (
    <main className="main">
      {props.children[0]}
      <section className="cards">
        <h3 className="cards__title">
          Today is {props.temp} F / You may want to wear:
        </h3>
        {props.children[1]}
      </section>
    </main>
  );
}

export default Main;
