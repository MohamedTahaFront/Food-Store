import { Link, useNavigate } from "react-router-dom";
import "./Error404.css";
function Error404() {
  const navigate = useNavigate();
  return (
    <div className="error ">
      <h2>404</h2>
      <h3>Page Not Found</h3>
      <p>
        Don't worry, you can head back to the homepage or use the navigation
        menu to find what you need
      </p>
      <div className="btns">
        <Link to={"/"} className="btn-primary">
          Back to home
        </Link>
        <button onClick={() => navigate(-1)} className="btn-secondary">
          Go back
        </button>
      </div>
    </div>
  );
}

export default Error404;
