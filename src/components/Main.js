import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TestModal from './TestModal';

const Main = () => {

    const [flag, setFlag] = useState(null)

    const [animateAgain, setAnimateAgain] = useState(-1)

    const themeSlice = useSelector(state => state.theme)

    const dynamicText = themeSlice === false ? 'white' : 'black'

    const dynamicBack = themeSlice === false ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)'

    const animationChecker = (x) => setAnimateAgain(x);

    const keysEvents = (e, x) => {
        if (e.key === 'Enter') {
        }
    }

    useEffect(() => {
        setFlag(null)
        setTimeout(() => setFlag(false), 1000)
    }, [animateAgain]);

    return (
        <div className={flag === false ? 'main' : 'main animate__animated animate__backInLeft'} onKeyDown={keysEvents}>
            <div
                className="formContainer"
                style={{ zIndex: '99', color: dynamicText, background: dynamicBack }}
                tabIndex="0" >
                <TestModal keysEvents={keysEvents} animationChecker={animationChecker} />
            </div>
        </div>
    )

};

export default Main;
