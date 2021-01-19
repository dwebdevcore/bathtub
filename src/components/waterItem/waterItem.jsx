import React from "react";

import './waterItem.scss';

function WaterItem({
                       level,
                       text = 'water level' }) {
    return (
        <div className="water-container__item">
            <span>{text + level}</span>
        </div>
    );
}

export default WaterItem;
