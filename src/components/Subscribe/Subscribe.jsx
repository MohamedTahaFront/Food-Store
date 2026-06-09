import "./Subscribe.css";
import rasberry from "../../assets/images/rasberry.webp";
function Subscribe() {
  return (
    <div className="Subscribe py">
      <div className="container">
        <div className="row">
          <div className="image">
            <img src={rasberry} alt="rasberry" />
          </div>
          <div className="info">
            <h2>Subscribe To Your NewsLetter</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione animi ad aliquid voluptas consequuntur dolore!</p>
            <form>
              <input type="text" placeholder="Enter Your E-mail"/>
              <button className="btn-warning" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
