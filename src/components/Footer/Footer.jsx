import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaGoogle } from "react-icons/fa6";
import gallery from '../../assets/images/food-table.webp'
function Footer() {
  return (
    <div className="Footer py">
      <div className="container">
        <div className="row">
          <div className="box">
            <h3>About us</h3>
            <p>
              It was popularised in the 1960 with the release of Latest sheets
              containing Lorem Ipsum passage.
            </p>
            <button className="btn-warning">Read More</button>
          </div>
          <div className="box">
            <h3>Quik Links</h3>
            <ul className="links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="/">Products</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Services</a>
              </li>
              <li>
                <a href="/">Gallery</a>
              </li>
              <li>
                <a href="/">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="box">
            <h3>Follow Us</h3>
            <ul className="links media">
              <li>
                <FaFacebookF />
                <a href="/"> Facebook</a>
              </li>
              <li>
                <FaTwitter />
                <a href="/"> Twitter</a>
              </li>
              <li>
                <FaGoogle />
                <a href="/">Google +</a>
              </li>
              <li>
                <FaInstagram />
                <a href="/"> Instagram</a>
              </li>
            </ul>
          </div>
          <div className="box">
            <h3>Gallery</h3>
            <div className="gallery">
              <img src={gallery} alt="gallery" />
              <img src={gallery} alt="gallery" />
              <img src={gallery} alt="gallery" />
              <img src={gallery} alt="gallery" />
              <img src={gallery} alt="gallery" />
              <img src={gallery} alt="gallery" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;