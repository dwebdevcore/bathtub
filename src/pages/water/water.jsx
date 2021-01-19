import React, { useEffect, useState } from "react";

import ActionButton from "../../components/actionButton/actionButton";
import WaterItem from "../../components/waterItem/waterItem";

import './water.scss';

let interval;

function Water() {
    const [activeLevel, setActiveLevel] = useState(0);
    const [levels, setLevels] = useState([]);
    const [status, setStatus] = useState('');

    let handleWaterCounter = () => {
        return activeLevel * 20;
    }

    const increaseWaterLevel = () => {
        setStatus('increment')
        interval = setInterval(() => {
            setActiveLevel(prevLevel => prevLevel < 5 ? prevLevel + 1 : prevLevel);
        },2000)
    };

    const decreaseWaterLevel = () => {
        setStatus('decrement')
        interval = setInterval(() => {
            setActiveLevel(prevLevel => prevLevel ? prevLevel - 1 : prevLevel);
        },2000)
    };

    const generateWaterLevel = () => {
        return levels.map((level, index) => {
            return <WaterItem key={index} level={level - 1}/>
        })
    }

    useEffect(() => {
        if(levels.length === 5 || !levels.length){
            clearInterval(interval)
            setStatus('');
        }
    }, [levels])

    useEffect(() => {
        if (status === 'increment' && activeLevel && levels.length < 5) {
            setLevels(prevLevels => [ activeLevel, ...prevLevels]);
        } else if (status === 'decrement' && levels.length > 0) {
            setLevels(prevLevels => prevLevels.slice(1));
        }
    }, [activeLevel]);

    return (
        <div className="water-container">
            <div className="water-container__counter">
                {handleWaterCounter()}
            </div>
            <div className="water-container__content">
                {generateWaterLevel()}
            </div>
            <div className="water-container__btn">
                <ActionButton onClickEvent={increaseWaterLevel} text="+" />
                <ActionButton onClickEvent={decreaseWaterLevel} text="-" />
            </div>
        </div>
    );
}

export default Water;
