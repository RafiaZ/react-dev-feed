import React from "react";
import classes from "./Modal.module.scss";
import CloseBtn from "../CloseBtn/CloseBtn";
import Backdrop from "../Backdrop/Backdrop";
import { Fragment } from "react";
const Modal = (props) => {
  const cssClasses = [
    classes.Modal,
    props.className,
    props.show === "entering"
      ? classes.ModalOpen
      : props.show === "exiting"
      ? classes.ModalClosed
      : null,
  ];
  return (
    <Fragment>
      <Backdrop onClick={props.onClick} />
      <div className={cssClasses.join(" ")}>
        <div className={classes.Modal__Header}>
          <h3>{props.header}</h3>
          <CloseBtn
            onClick={() => {
              props.onClick();
              props.clearInput && props.clearInput();
            }}
          />
        </div>
        {props.children}
      </div>
    </Fragment>
  );
};

export default Modal;
