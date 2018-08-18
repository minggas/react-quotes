import React from "react";

export default () => {
  const ribbonStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    border: 0
  };
  return (
    <a href="https://github.com/minggas/react-quotes">
      <img
        style={ribbonStyle}
        src="https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png"
        alt="Fork me on GitHub"
      />
    </a>
  );
};
