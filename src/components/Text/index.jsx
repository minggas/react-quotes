import React from 'react';
import './style.css';

function Text(props) {
    return (
        <div className="text">
            <p id="text" className="quote-text">
                {props.quote}
            </p>
            <p id="author" className="quote-author">
                {props.author}
            </p>
        </div>
    );
}

export default Text;