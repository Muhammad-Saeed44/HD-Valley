import React from "react";

export default function Spinner() {
  return (
    <>
      <center style={{marginTop:"8px"}}>
        {" "}
        <div className="spinner-border m-5 "  role="status">
          <span className="sr-only"></span>
        </div>
      </center>
    </>
  );
}
