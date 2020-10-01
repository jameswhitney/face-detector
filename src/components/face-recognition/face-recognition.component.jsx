import React from "react";
import "./face-recognition.style.css";

const FaceRecognition = ({ imgUrl, box }) => (
  <div className="center ma">
    <div className="absolute mt2">
      <img id="image-input" alt="" src={imgUrl} width="500px" height="auto" />
      <div
        className="bounding-box"
        style={{
          top: box.topRow,
          right: box.rightCol,
          bottom: box.bottomRow,
          left: box.leftCol,
        }}
      ></div>
    </div>
  </div>
);

export default FaceRecognition;
