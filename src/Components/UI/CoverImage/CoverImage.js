import React from "react";
import classes from "./CoverImage.module.scss";

const CoverImage = (props) => {
  const { image } = props;
  return (
    <section className={classes.CoverImage}>
      {!image ? (
        <>
          <label htmlFor="coverImage">Upload an image</label>
          <input type="file" id="coverImage" hidden />
        </>
      ) : (
        <img src={image} />
      )}
    </section>
  );
};

export default CoverImage;
