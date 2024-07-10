import React from "react";
import PropTypes from "prop-types";

function Alert({ alert }) {
  return (
    alert && (
      <div
        className={`alert alert-${alert.type.toLowerCase()} alert-dismissible fade show`}
        role=" alert"
      >
        <p>
          <strong>{alert.type}</strong> : {alert.message}
        </p>
        {/* <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button> */}
      </div>
    )
  );
}

Alert.propTypes = {
  alert: PropTypes.object,
};

export default Alert;
