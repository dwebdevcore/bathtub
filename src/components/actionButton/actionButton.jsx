import React from "react";

import './actionButton.scss';

function ActionButton({
    text = 'text',
    onClickEvent = () => {},
    className = '',
    disabled,
    ...rest
}) {
    return (
        <button onClick={onClickEvent}
                disabled={disabled}
                className={`action-button ${className}`}
                rest>
            {text}
        </button>
    );
}

export default ActionButton;
