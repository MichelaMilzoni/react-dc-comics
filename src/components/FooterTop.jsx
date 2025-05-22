//* Importazione del file CSS
import "../styles/FooterTop.css";

const FooterTop = () => {
  return (
    <section className="footer-links">
    
    <div className="container">
    <div className="row">
      <div className=".col-20">
        {/* Colonna 1 - DC Comics */}
        <ul>
          <li><h3>DC COMICS</h3></li>
          <li><a href="#">Characters</a></li>
          <li><a href="#">Comics</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">TV</a></li>
          <li><a href="#">Games</a></li>
          <li><a href="#">Videos</a></li>
          <li><a href="#">News</a></li>
        </ul>

        {/* Colonna 2 - Shop */}
        <ul>
          <li><h3>SHOP</h3></li>
          <li><a href="#">Shop DC</a></li>
          <li><a href="#">Shop DC Collectibles</a></li>
        </ul>
      </div>


          {/* Colonna 3 - DC Info */}
      <div className=".col-20">
        <ul>
          <li><h3>DC</h3></li>
          <li><a href="#">Terms Of Use</a></li>
          <li><a href="#">Privacy policy (New)</a></li>
          <li><a href="#">Ad Choices</a></li>
          <li><a href="#">Advertising</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Subscriptions</a></li>
          <li><a href="#">Talent Workshop</a></li>
          <li><a href="#">CPSC Certificates</a></li>
          <li><a href="#">Ratings</a></li>
          <li><a href="#">Shop Help</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>

      {/* Colonna 4 - Siti DC */}
      <div className=".col-20">
        <ul>
          <li><h3>SITES</h3></li>
          <li><a href="#">DC</a></li>
          <li><a href="#">MAD Magazine</a></li>
          <li><a href="#">DC Kids</a></li>
          <li><a href="#">DC Universe</a></li>
          <li><a href="#">DC Power Visa</a></li>
        </ul>
      </div>
    </div>

    {/* Sovrapposizione del logo */}
    <div className="logo-footer">
      <img src="../../public/img/dc-logo-bg.png" alt="DC Logo" />
    </div>
    </div>
    </section>
  );
};

//* Esportazione del componente FooterTop
export default FooterTop;