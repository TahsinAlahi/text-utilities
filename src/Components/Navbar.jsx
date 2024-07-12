import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar({
  title = "Tahsin Home",
  about = "Tahsin About",
  mode,
  toggleDarkMode,
}) {
  let modeSetup = {
    textColor: mode ? "text-white" : "text-dark",
    backgroundColor: mode ? "bg-dark" : "bg-secondary bg-gradient",
    bodyColor: mode ? "black" : "white",
  };

  const themeChange = (event) => {
    if (mode) document.body.style.backgroundColor = event.target.value;
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${modeSetup.backgroundColor} ${modeSetup.textColor}`}
      >
        <div className={"container-fluid "}>
          {/* Title */}
          <Link className={`navbar-brand ${modeSetup.textColor}`} to="/">
            {title}
          </Link>

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
                <Link
                  className={"nav-link active " + modeSetup.textColor}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${modeSetup.textColor}`} to="/about">
                  {about}
                </Link>
              </li>
            </ul>

            {/* color Theme buttons */}
            <button
              type="button"
              className="btn btn-outline-primary mx-2"
              value={"#240750"}
              onClick={themeChange}
            >
              Blue
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary mx-2"
              value={"#344C64"}
              onClick={themeChange}
            >
              Grey
            </button>
            <button
              type="button"
              className="btn btn-outline-success mx-2"
              value={"#183D3D"}
              onClick={themeChange}
            >
              Green
            </button>
            <button
              type="button"
              className="btn btn-outline-danger mx-2"
              value={"#3D0000"}
              onClick={themeChange}
            >
              Red
            </button>

            {/* DarkMode switch */}
            <div className="form-check form-switch mx-5">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                unchecked="true"
                onClick={toggleDarkMode}
              />
              <label
                className="form-check-label user-select-none"
                htmlFor="flexSwitchCheckDefault"
              >
                Dark Mode
              </label>
            </div>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                style={mode ? {} : { color: "black", borderColor: "black" }}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  mode: PropTypes.bool,
};
export default Navbar;

// Navbar.defaultProps = {
//   title: "Tahsin Home",
//   about: "Tahsin About",
// };
