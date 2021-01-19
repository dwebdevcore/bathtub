import React, {useState} from "react";
import './button.scss';

function Button(props) {
    const content = props.children;
    const handleClick = props.onClickEvent;
    return (
        <button className="button_container" onClick={() => handleClick(true)} disabled={props.disabled}>
            {content ? content : ''}
        </button>
    );
}

export default Button;
