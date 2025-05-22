// sezione finale con link e icone social

//* importazione css
import '../styles/FooterTop.css';

const FooterTop = () => {
  return (
    <footer>
      <section className="social-media">
        <p>Follow us on:</p>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>YouTube</li>
        </ul>
      </section>
    </footer>
  );
}; 

//* esportazione del componente Footer
export default FooterTop;