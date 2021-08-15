import React from "react";
import classes from "./MainNav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faCog } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const MainNav = (props) => {
  const NAV_LINKS = [
    {
      label: "News Feed",
      icon: faHome,
      type: "link",
      to: "/news-feed",
    },
    {
      label: "Profile",
      icon: faUser,
      type: "link",
      to: "/profile",
    },
    {
      label: "Settings",
      icon: faCog,
      type: "button",
      handleClick: () => {
        props.toggleSettings();
      },
    },
  ];

  return (
    <nav className={classes.MainNav}>
      <ul className={classes.MainNav__List}>
        {NAV_LINKS.map((link) => {
          return (
            <>
              {link.type === "link" ? (
                <NavLink
                  key={Math.random()}
                  className={classes.MainNav__List__Link}
                  to={link.to}
                >
                  <li>
                    <FontAwesomeIcon icon={link.icon} />
                  </li>
                </NavLink>
              ) : (
                <li
                  key={Math.random()}
                  onClick={link.handleClick}
                  className={classes.MainNav__List__Link}
                >
                  <FontAwesomeIcon icon={link.icon} />
                </li>
              )}
            </>
          );
        })}
      </ul>
    </nav>
  );
};

export default MainNav;
