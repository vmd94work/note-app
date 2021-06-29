import { exit } from "process";
import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { AlertContext } from "../context/alert/alertContext";

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);

  return (
    <CSSTransition
      in={alert.visible}
      timeout={{ enter: 500, exit: 350 }}
      classNames={"alert"}
      mountOnEnter
      unmountOnExit
    >
      <div
        className={`alert alert-${alert.type || "warning"} alert-dismissible`}
      >
        <strong>Atención!</strong>
        &nbsp;{alert.text}
        <button
          className="btn-close"
          onClick={hide}
          type="button"
          aria-label="Close"
          data-dismiss="alert"
        ></button>
      </div>
    </CSSTransition>
  );
};
