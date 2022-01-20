import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setItemToLocalStorage } from '../helpers/localStorage';
import { examineeActions } from '../store/examineeSlice';
import DynamicButton from '../UI/DynamicButton';

const InitialForm = ({ enterTest }) => {

    const [err, setErr] = useState(' ')

    const errHandeler = () => nameRef.current.value !== '' ? setErr('') : setErr('Please enter your name!')

    const dispatch = useDispatch()

    const nameRef = useRef('')

    const toUpper = (x) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase().trim();

    const getNameFromRef = () => {
        const tempUser = nameRef.current.value.trim()
        if (tempUser !== '' && tempUser.match("^[a-zA-Z_]*$")) {
            const username = toUpper(tempUser)
            enterTest(1)
            setItemToLocalStorage('examinee', username)
            dispatch(examineeActions.setExamineeNameHandler(username))
        } else setErr('Please enter a valid name!')
    }

    const keysEvents = (e) => e.key === 'Enter' && getNameFromRef()

    return (
        <div tabIndex='0' onKeyDown={keysEvents} className=''>
            <h1>Welcome to the Test</h1>
            <h2>Enter Your Name</h2>
            <h6>Please make sure your name includes only English characters!</h6>
            <br />
            <div>
                <input
                    onBlur={errHandeler}
                    className='input-design'
                    onChange={errHandeler}
                    ref={nameRef}
                    placeholder="Enter Your Name here" />
                <p className='err'>{err}</p>
            </div>
            {nameRef.current.value &&
                <DynamicButton func={getNameFromRef} text='Start Test' />
            }
        </div>
    );
};

export default InitialForm;
