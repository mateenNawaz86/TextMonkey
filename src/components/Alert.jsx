import React from "react";

const Alert = (props) => {
  return (
    <>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.alertType} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{props.alert.msg}</strong>
        </div>
      )}
    </>
  );
};

export default Alert;