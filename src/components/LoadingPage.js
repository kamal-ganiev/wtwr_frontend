import "../blocks/loading.css";

export default function LoadingPage({ visibility }) {
  return (
    <div className={visibility ? "loading" : "loading_invisible"}>
      <h1 className="loading__title">WTWR</h1>
    </div>
  );
}
