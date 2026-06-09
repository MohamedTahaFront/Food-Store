import "./About.css";
import about from '../../assets/images/About.webp'

function About() {
  return (
    <div className="About py">
      <div className="container">
        <div className="h1">About Fresh Meal</div>
        <div className="row">
          <img src={about} alt="About Fresh Meal" />
          <div className="info">
            <h3>Fresh Meal Is a Long Establishedfact That a Reader Will Be Distracted</h3>
            <p>Countray To Popular Belief . Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolor, quis aspernatur provident non exercitationem! Est a architecto voluptatum rerum, repellat expedita asperiores numquam, beatae deleniti amet nesciunt laudantium assumenda!</p>
            <button className="btn-dark">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
