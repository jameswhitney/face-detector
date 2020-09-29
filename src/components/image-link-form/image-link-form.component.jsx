import React from "react";
import "./image-link-form.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => (
  <div>
    <p className="f3 white">{`This app will detect faces within photos`}</p>
    <div className="center">
      <div className="pa4 br3 shadow-5 form center">
        <input
          className="f4 pa2 w-70 center"
          type="text"
          onChange={onInputChange}
        />
        <button
          className="f4 w-30 grow link ph3 pv2 dib white bg-light-purple pointer"
          onClick={onButtonSubmit}
        >
          Detect
        </button>
      </div>
    </div>
  </div>
);

export default ImageLinkForm;
