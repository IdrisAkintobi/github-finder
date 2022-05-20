import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types"

const Navbar: React.FC<{ title?: string }> = ({ title = "GitHub Finder" }) => {
  return (
    <>
      <nav className="navbar mb-6 shadow-lg bg-neutral text-neutral-content">
        <div className="container mx-auto">
          <FaGithub className="text-3xl pr-3 inline lg:ml-6" />
          <Link to="/" className="tx-large font-bold align-middle">
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-sm btn-ghost rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-sm btn-ghost rounded-btn">
              About
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

// Navbar.defaultProps = {
//   title: "GitHub Finder",
// };

export default Navbar;
