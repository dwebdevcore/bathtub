import React from "react";

import './waterItem.scss';

function WaterItem({
    level,
    text = 'water level',
    className = '',
}) {
    return (
        <div className={`water-container__item ${className}`}>
            <span>{`${text} ${level}`}</span>
        </div>
    );
}

export default WaterItem;
