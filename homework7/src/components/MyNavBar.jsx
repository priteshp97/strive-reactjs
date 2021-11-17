//import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const MyNavbar = () => (
  <Nav className="navbar navbar-expand-lg navbar-dark" id="navbar-color">
    <img src={logo} alt="" style={{ width: "120" }} />
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link to="/">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/tvshows">
            <a className="nav-link" href="/tvshows">
              TV Shows
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/movie-details">
            <a className="nav-link" href="google.com">
              Movies
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="google.com">
            Recently Added
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="google.com">
            My List
          </a>
        </li>
        <li>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="google.com">
              Action
            </a>
            <a className="dropdown-item" href="google.com">
              Another action
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="google.com">
              Something else here
            </a>
          </div>
        </li>
      </ul>
      <div className="dropdown">
        <img src="lens.svg" width="16" alt="lens" className="mr-2" />
        <button
          className="btn dropdown-toggle text-white"
          type="button"
          id="dropdown-basic"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <a
            href="google.com"
            className="mr-4"
            style={{ color: "white", width: "32" }}
          >
            Kids
          </a>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bell"
            className="svg-inline--fa fa-bell fa-w-14 mr-4"
            style={{ width: "22px", height: "40px" }}
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
            ></path>
          </svg>
          <div className="d-inline-block align-middle">
            <p className="truncate mb-0">
              <img src="avatar.png" alt="" height="40px" />
            </p>
          </div>
        </button>
        <div
          className="dropdown-menu"
          aria-labelledby="dropdownMenu2"
          style={{
            backgroundColor: "rgb(20, 20, 20)",
            color: "rgb(20, 20, 20)",
          }}
        >
          <button
            className="dropdown-item "
            style={{ color: "whitesmoke" }}
            type="button"
          >
            Profile
          </button>
          <button
            className="dropdown-item"
            style={{ color: "whitesmoke" }}
            type="button"
          >
            Settings
          </button>
          <button
            className="dropdown-item"
            style={{ color: "whitesmoke" }}
            type="button"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  </Nav>
);

export default MyNavbar;
