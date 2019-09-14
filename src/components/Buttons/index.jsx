import React from "react";

function Buttons(props) {
  const end =
    "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
    encodeURIComponent(props.msg);
  return (
    <div className="buttons">
      <a id="tweet-quote" href={end} target="_blank" rel="noopener noreferrer" className="btn-tweet">
        <IconTwitter />
      </a>
      <button id="new-quote" onClick={props.onClick} className="btn-quote">
        <strong>New Quote</strong>
      </button>
    </div>
  );
}

function IconTwitter(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 612 612"
      className="icon"
    >
      <path d="M612 116.3c-22.5 10-46.7 16.8-72.1 19.8 25.9-15.5 45.8-40.2 55.2-69.4 -24.3 14.4-51.2 24.8-79.8 30.5 -22.9-24.4-55.5-39.7-91.6-39.7 -69.3 0-125.6 56.2-125.6 125.5 0 9.8 1.1 19.4 3.3 28.6C197.1 206.3 104.6 156.3 42.6 80.4c-10.8 18.5-17 40.1-17 63.1 0 43.6 22.2 82 55.8 104.5 -20.6-0.7-39.9-6.3-56.9-15.8v1.6c0 60.8 43.3 111.6 100.7 123.1 -10.5 2.8-21.6 4.4-33.1 4.4 -8.1 0-15.9-0.8-23.6-2.3 16 49.9 62.3 86.2 117.3 87.2 -42.9 33.7-97.1 53.7-155.9 53.7 -10.1 0-20.1-0.6-29.9-1.7 55.6 35.7 121.5 56.5 192.4 56.5 230.9 0 357.2-191.3 357.2-357.2l-0.4-16.3C573.9 163.5 595.2 141.4 612 116.3z" />
    </svg>
  );
}

export default Buttons;
