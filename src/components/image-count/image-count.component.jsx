import React from "react";

const ImageCount = ({ name, entries }) => (
  <React.Fragment>
    <div className="white f3">{`${name}, your current head count is...`}</div>
    <div className="white f3">{`${entries}!`}</div>
  </React.Fragment>
);

export default ImageCount;
