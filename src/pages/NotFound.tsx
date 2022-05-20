import { FaSearch, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="hero">
        <div className="text-center hero-content flex-col">
          <div className="text-8xl font-bold mb-0">404</div>
          <div className="text-2xl block font-light">
            <FaSearch className="inline" /> Page not found
          </div>
          <Link to="/" className="btn btn-success btn-lg">
            <FaHome className="mr-2" />
            Go back home
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
