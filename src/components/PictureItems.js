import React from "react";
const PictureItems = (props) => {
  return (
    <>
      <div className="container my-4">
        <a
          href={props.url}
          target="_blank"
          style={{ border: "0" }}
        >
          <img src={props.imgUrl} style={{ width: "320px", height: "240px" }} />
        </a>
      </div>
    </>
  );
};
export default PictureItems;
