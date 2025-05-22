import { useState } from "react";
import { handleError } from "./utils/errorHandler"; // 👈 Importa il gestore degli errori

//* importazione dei componenti
import Header from './components/Header';
import Main from './components/Main';
import BlueBar from './components/BlueBar';
import FooterTop from './components/FooterTop';
import FooterBottom from './components/FooterBottom';
import Alert from "./components/Alert";

function App() {
    const [errorMessage, setErrorMessage] = useState(""); // Stato per l'errore

    return (
        <>
            <Header />
            {errorMessage && <Alert text={errorMessage} />}
            <Main handleError={(msg) => handleError(setErrorMessage, msg)} />
            <BlueBar />
            <FooterTop />
            <FooterBottom />
        </>
    );
}

export default App;