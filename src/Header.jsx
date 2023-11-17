import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { useState } from "react";

export function Header() {
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  // opens the modal
  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };

  //closes modal
  const handleClose = () => {
    setIsSignupVisible(false);
  };

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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
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
                    <a className="dropdown-item" href="#recipes-new">
                      New Recipe
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#recipes-index">
                      All Recipes
                    </a>
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
              <li className="nav-item">
                <a className="nav-link" onClick={handleSignupShow}>
                  Signup
                </a>
              </li>
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
