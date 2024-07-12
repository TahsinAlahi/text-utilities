import React from "react";
import PropTypes from "prop-types";

function Alert({ alert }) {
  return (
    <div style={{ height: "60px" }}>
      {alert && (
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
      )}
    </div>
  );
}

Alert.propTypes = {
  alert: PropTypes.object,
};

export default Alert;
