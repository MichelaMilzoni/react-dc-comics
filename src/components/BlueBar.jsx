// fascia azzurra del main (bonus)


//* importazione Alert
import Alert from './Alert';


//* importazione css
import './BlueBar.css';

const BlueBar = () => {
  return (
    <div className="blue-bar">
      <ul>
        <li>
          <img src="../public/img/buy-comics-digital-comics.png" alt="DIGITAL COMICS"></img>
          <p>DIGITAL COMICS</p>
        </li>
        <li>
          <img src="../public/img/buy-comics-merchandise.png" alt="DC MERCHANDISE"></img>
          <p>DC MERCHANDISE</p>
        </li>
        <li>
          <img src="../public/img/buy-comics-subscriptions.png" alt="SUBSCRIPTION"></img>
          <p>SUBSCRIPTION</p>
        </li>
        <li>
          <img src="../public/img/buy-comics-shop-locator.png" alt="COMIC SHOP LOCATOR"></img>
          <p>COMIC SHOP LOCATOR</p>
        </li>
        <li>
          <img src="../public/img/buy-dc-power-visa.svg" alt="DC POWER VISA"></img>
          <p>DC POWER VISA</p>
        </li>
      </ul>
    </div>
  );
};

//* esportazione del componente BlueBar
export default BlueBar;