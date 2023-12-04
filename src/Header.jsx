import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  // opens the modal
  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };

  //closes modal
  const handleClose = () => {
    setIsSignupVisible(false);
  };

  let authenticationLinks;
  if (localStorage.jwt === undefined) {
    authenticationLinks = (
      <>
        <li className="nav-item">
          <a className="nav-link" onClick={handleSignupShow}>
            Signup
          </a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </>
    );
  } else {
    authenticationLinks = (
      <li className="nav-item">
        <a className="nav-link" to="/logout">
          Logout
        </a>
      </li>
    );
  }

  const [isSignupVisible, setIsSignupVisible] = useState(false);

  return (
    <header>
      <Modal show={isSignupVisible} onClose={handleClose}>
        <Signup />
      </Modal>

      {/* start bootstrap nav here */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Cookr
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link active" aria-current="page">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/recipes/new">
                      New Recipe
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/recipes">
                      All Recipes
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              {authenticationLinks}
              {/* LOGGED OUT JUNK */}
              {/* LOGGED IN JUNK */}
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-info" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
