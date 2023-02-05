import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid bg-dark  ">
          <button className="btn-lg bg-dark" style={{ border: "0" }}>
            {" "}
            <Link className="navbar-brand text-danger " to="/">
              HD-Valley
            </Link>
          </button>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" style={{ marginLeft: "50px" }}>
              <li className="nav-item ">
                <Link
                  className="nav-link active text-light "
                  aria-current="page"
                  to="/"
                >
                  Nature
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/education">
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-light" to="/feelings">
                  Feelings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-light" to="/music">
                  Music
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-light" to="/computer">
                  Computer
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
