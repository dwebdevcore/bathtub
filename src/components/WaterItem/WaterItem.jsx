import React, {useState} from "react";
import './water-item.scss';

function WaterItem(props) {

    return (
        <div className="water_container__item">
            <span>water level {props.level}</span>
        </div>
    );
}

export default WaterItem;
