import React from "react";

export default props => {
  const authorStyle = {
    textAlign: "center",
    marginTop: 15,
    color: "#911c08"
  };
  const linkStyle = {
    textDecoration: "none",
    color: "#086391"
  };

  return (
    <div style={authorStyle}>
      <span>Designed and Coded by </span>
      <br />
      <a
        style={linkStyle}
        target="_blank"
        href={props.link}
        title={props.title}
      >
        {props.children}
      </a>
    </div>
  );
};
