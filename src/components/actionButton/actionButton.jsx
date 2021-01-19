import React from "react";

import './actionButton.scss';

function ActionButton({
                          text = 'text',
                          onClickEvent,
                          className = '',
                          children,
                          disabled,
                          ...rest
                      }) {
    return (
        <button className={`button_container ${className}`}
                onClick={onClickEvent}
                rest
                disabled={disabled}>
            {text}
        </button>
    );
}

export default ActionButton;
