import React from 'react';
import './style.css';

function Text(props) {
    return (
        <div className="text">
            <div id="text" className="quote-text" dangerouslySetInnerHTML={props.quote} />
            <p id="author" className="quote-author">
                {props.author}
            </p>
        </div>
    );
}

export default Text;