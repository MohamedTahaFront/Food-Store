import "./Header.css";
import straw from '../../assets/images/straw.png'
import fresh from '../../assets/images/fresh.svg'

function Header() {
  return (
    <div className="Header py">
      <div className="container">
        <div className="row">
          <div className="info">
          <div className="line">
            <h3>Welcome to :</h3>
            <img src={fresh} alt="fresh" />
          </div>
          <h2>The World Best <span>Shoping</span> Website</h2>
          <p>We Have aLL products You need in Just One Website ... Take a look !</p>
          <div className="btns">
            <button className="btn-primary">Read More</button>
            <button className="btn-secondary">Shope Now</button>
          </div>
          </div>
          <div className="image">
          <img className="straw" src={straw} alt="straw" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
