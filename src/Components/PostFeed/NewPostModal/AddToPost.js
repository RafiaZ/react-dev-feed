import { faImage, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./AddToPost.module.scss";

const AddToPost = (props) => {
  return (
    <div className={classes.AddToPost}>
      <Button>
        <FontAwesomeIcon icon={faImage} className={classes.Icon} />
      </Button>

      <Button>
        <FontAwesomeIcon icon={faLocationArrow} className={classes.Icon} />
      </Button>
    </div>
  );
};

export default AddToPost;
