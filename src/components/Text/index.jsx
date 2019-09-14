import React from 'react';
import './style.css';

function Text(props) {
  return (
    <div id="wrapper" className={props.className}>
      <p id="text" className="quote quote-text">
        {props.quote}
      </p>
      <p id="author" className="quote quote-author">
        <strong>{props.author}</strong>
      </p>
    </div>
  );
}

export default Text;