// Navbar con menu e logo 

//* importazione css
import './Header.css';

//* funzione che restituisce JSX
const Header = () => {
  return (
    <header>
      <nav className="Navbar container">
        <div className="logo">
          <img src="../public/img/dc-logo.png" alt="Logo"></img>
        </div>
        <div className='LinksNavBar'>
            <ul>
              <li className='uppercase'>Characters</li>
              <li className='uppercase active'>Comics</li>
              <li className='uppercase'>Movies</li>
              <li className='uppercase'>TV</li>
              <li className='uppercase'>Games</li>
              <li className='uppercase'>Collectibles</li>
              <li className='uppercase'>Videos</li>
              <li className='uppercase'>Fans</li>
              <li className='uppercase'>News</li>
              <li className='uppercase'>Shop</li>
            </ul>
        </div>
      </nav>

    </header>
  );
};

//* esportazione del componente Header
export default Header;