// sezione centrale

//* importazione css
import './Main.css';

//* funzione che restituisce JSX
const Main = ({ handleError }) => {
  const simulateError = () => {
    handleError("Errore nel caricamento dei dati!");
  };

  return (
    <main>
      <h1>Benvenuto!</h1>
      {/* <button onClick={simulateError}>Simula Errore</button> */}
    </main>
  );
};

//* esportazione del componente Main
export default Main;