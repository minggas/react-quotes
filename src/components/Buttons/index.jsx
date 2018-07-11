import React from 'react';
import './style.css';

function Buttons(props) {
    const end = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURIComponent('"' + props.quote + '" ' + props.author);
    return (
      <div className="buttons">
        <a id="tweet-quote" href={end} target="_blank">
          <i className="fa fa-twitter-square" />
        </a>
        <button id="new-quote" onClick={props.onClick}>
          <strong>New Quote</strong>
        </button>
      </div>
    );
  }

  export default Buttons;