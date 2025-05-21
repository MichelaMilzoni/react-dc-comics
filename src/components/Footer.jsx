// sezione finale con link e icone social

//* importazione css
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <ul>
          <li>DC Comics</li>
          <li>DC Entertainment</li>
          <li>Sites</li>
          <li>Shop</li>
        </ul>
      </div>
      <div className="social-media">
        <p>Follow us on:</p>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>YouTube</li>
        </ul>
      </div>
    </footer>
  );
}; 

//* esportazione del componente Footer
export default Footer;