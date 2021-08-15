import React from "react";
import classes from "./CoverImage.module.scss";

const CoverImage = (props) => {
  return (
    <section className={classes.CoverImage}>
      <label htmlFor="coverImage">Upload an image</label>
      <input type="file" id="coverImage" hidden />
    </section>
  );
};

export default CoverImage;
