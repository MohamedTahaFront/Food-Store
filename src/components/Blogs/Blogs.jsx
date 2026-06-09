import "./Blogs.css";
import donut from "../../assets/images/donut.webp";
import coffee from "../../assets/images/coffee.webp";

function Blogs() {
  return (
    <div className="Blogs py">
      <div className="container">
        <div className="h1">Lastest News From Blog</div>
        <div className="row">
          <div className="card">
            <div className="image">
              <img src={donut} alt="donut" />
            </div>
            <div className="card-body">
              <i>(Jun 5, 2026) (Posted By <b>Mohamed Taha</b>) (12 Commentns)</i>
              <h3>A cookie cake is a dessert that consists of a large cookie...</h3>
              <p>Its A long Established fact That a Reader Will Be Distracked By The Readable Content Of The Page When Looking at its Layout , I Wish U Engoy Reading Nothing</p>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src={coffee} alt="coffee" />
            </div>
            <div className="card-body">
              <i>(Jun 5, 2026) (Posted By <b>Mohamed Taha</b>) (8 Commentns)</i>
              <h3>Coffee is a beverage prepared from roasted coffee beans...</h3>
              <p>Its A long Established fact That a Reader Will Be Distracked By The Readable Content Of The Page When Looking at its Layout , I Wish U Engoy Reading Nothing</p>
            </div>
          </div>
        </div>
        <button className="btn-view"> View More</button>
      </div>
    </div>
  );
}

export default Blogs;
