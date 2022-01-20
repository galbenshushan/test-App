import React, { useEffect, useState } from 'react';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import DynamicButton from '../../UI/DynamicButton';
import { useSelector } from 'react-redux';

const QuesOne = ({ examinee, addToAnswers, indx }) => {

    const [answers, setAnswers] = useState([])

    const [err, setErr] = useState('')

    const [userAnswer, setUserAnswer] = useState(null)

    const themeSlice = useSelector(state => state.theme)

    const dynamicText = themeSlice === false ? 'white' : 'black'

    const question = 'Who invented Microsoft?';

    const correct = 'Bill Gates'

    const tempAns = [
        { content: 'George Clooney' },
        { content: 'Mark Zuckerberg' },
        { content: 'Alexander Graham Bell' },
        { content: correct }
    ]

    const answerHandler = (e) => {
        setErr('')
        setUserAnswer(e.target.value)
    };

    const sendAnswer = () => addToAnswers({ question: question, user_answer: userAnswer, correct_answer: correct })

    useEffect(() => {
        const shuffled = tempAns.sort((a, b) => 0.5 - Math.random())
        setAnswers(shuffled)
    }, [])

    const keysEvents = (e) => e.key === 'Enter' && sendAnswer()

    return (
        <div tabIndex='0' onKeyDown={keysEvents} className=''>
            <h2>Question no.{indx}</h2>
            <h5>{question}</h5>
            <p style={{ fontWeight: '600', color: 'red' }}>{err}</p>
            <RadioGroup
                style={{ textAlign: 'left', paddingLeft: '15rem' }}
                aria-label="answer"
                defaultValue="banana"
                name="radio-buttons-group">
                {answers.map((answer, idx) => <div key={idx}>
                    <FormControlLabel onClick={answerHandler} value={answer.content} control={<Radio style={{ color: dynamicText }} />} label={`${idx + 1}. ${answer.content} `} />
                    <br />
                </div>)}
            </RadioGroup>
            {userAnswer !== null && <>
                <>{examinee.name === '' ? '' : examinee.name}, please click when you sure. <br /></>
                {/* <DynamicButton func={sendAnswer} text='Previous' /> */}
                <DynamicButton func={sendAnswer} text='Next' />

            </>}
        </div>
    )
};

export default QuesOne;
