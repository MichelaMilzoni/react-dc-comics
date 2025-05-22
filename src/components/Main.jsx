// sezione centrale
//* importazione card
import ComicList from "./ComicList";

//* importazione css
import '../styles/Main.css';

//* funzione che restituisce JSX
const Main = ({ handleError }) => {
  const simulateError = () => {
    handleError("Errore nel caricamento dei dati!");
  };

  return (
    <main>
      <section className="jumbotron"></section>
      <h2 className="section-main-title">CURRENT SERIES</h2>
      {/* <button onClick={simulateError}>Simula Errore</button> */}
      <ComicList />
      <button className="button-load-more">LOAD MORE</button>
    </main>
  );
};

//* esportazione del componente Main
export default Main;