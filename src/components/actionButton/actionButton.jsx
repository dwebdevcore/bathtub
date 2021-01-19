import React from "react";

import './actionButton.scss';

function ActionButton({
                          text = 'text',
                          onClickEvent,
                          className = '',
                          children,
                          ...rest
                      }) {
    return (
        <button className={`button_container ${className}`}
                onClick={onClickEvent}
                rest>
            {text}
        </button>
    );
}

export default ActionButton;
