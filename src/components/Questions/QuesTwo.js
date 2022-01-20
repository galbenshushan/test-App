import React, { useRef, useState } from 'react';
import DynamicButton from '../../UI/DynamicButton';

const QuesTwo = ({ examinee, addToAnswers, indx }) => {

    const [err, setErr] = useState('')

    const [userAnswer, setUserAnswer] = useState(null)

    const question = 'complete the sentence';

    const correct = 'not to be'

    const inputRef = useRef('')

    const answerHandler = (e) => {
        setErr('')
        const validAnswer = e.target.value.toLowerCase().trim()
        setUserAnswer(validAnswer)
    };

    const sendAnswer = () => addToAnswers({ question: question, user_answer: userAnswer, correct_answer: correct })

    const keysEvents = (e) => {
        if (e.key === 'Enter'
            && inputRef.current.value !== ''
            && inputRef.current.value !== undefined
            && userAnswer !== null) {
            sendAnswer()
        }
    }

    console.log( inputRef.current.value);
    return (
        <div tabIndex='0' onKeyDown={keysEvents} className=''>
            <div>
                <h2>Question no.{indx}</h2>
                <h5>{question}</h5>
                <p style={{ fontWeight: '600', color: 'red' }}>{err}</p>
                <div>
                    To be or <input onChange={answerHandler} onBlur={answerHandler} ref={inputRef} style={{ width: '7rem' }} /> that is the question!
                </div>
            </div>

            {inputRef.current.value !== '' && inputRef.current.value !== undefined && userAnswer !== null && <>
                <>{examinee.name === '' ? '' : examinee.name}, please click when you sure. <br /></>
                {/* <DynamicButton func={sendAnswer} text='Previous' /> */}
                <DynamicButton func={sendAnswer} text='Next' />
            </>}
        </div>
    )
};

export default QuesTwo;
