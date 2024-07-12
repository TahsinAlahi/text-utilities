import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

function TextForm({ heading, showAlert }) {
  const [text, setText] = useState("");

  let defaultText = useRef(null);

  const handleUpper = () => {
    setText(text.toUpperCase());
    showAlert("Converted to uppercase", "Success");
  };

  const handleRevert = () => {
    setText(defaultText.current);
  };

  const handleClearText = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    defaultText.current = event.target.value;
  };

  const handleCopy = () => {
    let box = document.getElementById("myBox");
    // Copies the text
    navigator.clipboard.writeText(box.value);
    showAlert("Text has been copied", "Success");
  };

  return (
    <>
      <div className="container">
        <h1>{heading}</h1>

        <div className="mb-3 ">
          <label htmlFor="myBox" className="form-label">
            Enter a text below
          </label>
          <textarea
            className="form-control"
            id="myBox"
            rows="6"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter your text here..."
          ></textarea>
        </div>

        <button className="btn btn-primary mx-1 my-1" onClick={handleUpper}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleRevert}>
          Revert back
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearText}>
          Clear text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy text
        </button>
      </div>

      <div className="container my-3">
        <h1>Text summary</h1>
        <p>
          Your text has {text.split(/\s+/).filter((val) => val).length} words
          and {text.length} characters.
          {/* text.replace(/\s/g, "").length removes the spaces from */}
        </p>
        <p>
          This can be read in {0.008 * text.split(/\s+/).filter(Boolean).length}{" "}
          minutes
        </p>

        <h3 style={{ textDecoration: "underline" }}>Preview</h3>
        <p>{text ? text : "Enter something to preview it here..."}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
  showAlert: PropTypes.func,
};

export default TextForm;
