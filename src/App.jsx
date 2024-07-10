import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import About from "./Components/About";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    // Runs the old value of darkMode so had to use !darkMode
    document.body.style.backgroundColor = !darkMode ? "grey" : "white";
    document.body.style.color = !darkMode ? "white" : "black";

    !darkMode
      ? showAlert("Dark mode enabled", "Success")
      : showAlert("Light mode enabled", "Success");
  };

  return (
    <>
      <Navbar
        title="JackMa"
        about="About him"
        mode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <Alert alert={alert} />

      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter some text here" />
      </div>
    </>
  );
}

export default App;
