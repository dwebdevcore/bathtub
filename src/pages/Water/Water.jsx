import React, {useEffect, useState} from "react";
import './water.scss';
import Button from "../../components/Button/Button";
import WaterItem from "../../components/WaterItem/WaterItem";
let interval;
function Water() {
    const [activeLevel, setActiveLevel] = useState(0);
    const [levels, setLevels] = useState([]);
    const [inProgress, setProgress] = useState(false)
    const [incremenent, setIncremenent] = useState(false)
    const [decrement, setDecrement] = useState(false)

    const increaseWaterLevel = () => {
        setDecrement(false);
        setIncremenent(true);
        setProgress(true);
        interval = setInterval(() => {
            setActiveLevel(prevLevel => prevLevel + 1);
        },2000)
    };

    const decreaseWaterLevel = () => {
        setProgress(true);
        setIncremenent(false);
        setDecrement(true);
        interval = setInterval(() => {
            setActiveLevel(prevLevel => prevLevel - 1);
        },2000)
    };

    const generateWaterLevel = () => {
        return levels.map((level, index) => {
            return <WaterItem key={index} level={level}/>
        })
    }

    useEffect(() => {
        if (incremenent && activeLevel && levels.length < 5) {
            setLevels(prevLevels => [...prevLevels, activeLevel]);
        } else if (decrement && levels.length > 0) {
            setLevels(prevLevels => prevLevels.slice(0, -1));
        } else {
            clearInterval(interval);
            setProgress(false);
            setIncremenent(false);
            setDecrement(false);
        }
    }, [activeLevel])

    return (
        <>
            <div className="water_container">
                {generateWaterLevel()}
            </div>
            <div className="btn_container">
                <Button onClickEvent={increaseWaterLevel} disabled={inProgress}>+</Button>
                <Button onClickEvent={decreaseWaterLevel} disabled={inProgress}>-</Button>
            </div>
        </>
    );
}

export default Water;
