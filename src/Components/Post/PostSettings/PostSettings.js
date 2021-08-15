import React, { useRef, useEffect } from "react";

import classes from "./PostSettings.module.scss";

const POST__SETTINGS = [
  {
    action: "Delete",
    handleClick: () => {
      console.log("Clicked Delete!");
    },
  },
  {
    action: "Edit",
    handleClick: () => {
      console.log("Clicked Edit!");
    },
  },
];

const PostSettings = (props) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          props.setShowSettingsHandler();
        }
      }

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <div
      ref={wrapperRef}
      className={`${classes.Dropdown__Menu} ${
        props.showSettings ? classes.Dropdown__Open : classes.Dropdown__Closed
      }`}
    >
      <ul className={` ${classes.Dropdown__Items}`}>
        {POST__SETTINGS.map((setting) => (
          <li key={setting.action} onClick={setting.handleClick}>
            <i>{setting.action}</i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(PostSettings);
