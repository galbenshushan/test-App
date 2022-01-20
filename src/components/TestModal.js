import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { answersActions } from '../store/answersSlice'
import QuesOne from './Questions/QuesOne';
import QuesTwo from './Questions/QuesTwo';
import QuesThree from './Questions/QuesThree';
import InitialForm from './InitialForm';
import LastPage from './LastPage';
import "./style.css"

const TestModal = ({ animationChecker }) => {

    const arr = [1, 2, 3]

    const [arrToMap, setArrToMap] = useState([])

    const [err, setErr] = useState('')

    const [questionsPosition, setquestionsPosition] = useState(0)

    const dispatch = useDispatch()

    const examinee = useSelector(state => state.examinee)

    const addToAnswers = (questionData) => {
        if (questionData !== null) {
            dispatch(answersActions.addAnswers(questionData))
            setTimeout(() => setquestionsPosition(state => state + 1), 150);
        } else {
            setErr('*You must answer the question');
        }
    }

    const enterTest = (x) => setquestionsPosition(x);

    useEffect(() => {
        const shuffled = arr.sort((a, b) => 0.5 - Math.random())
        setArrToMap(shuffled)
    }, [])

    useEffect(() => animationChecker(questionsPosition), [questionsPosition])

    console.log(arrToMap);
    return (
        <div>
            <div>
                {questionsPosition === 0 && <InitialForm
                    enterTest={enterTest}
                />}
                {questionsPosition === arrToMap[0] && <QuesOne
                    addToAnswers={addToAnswers}
                    examinee={examinee}
                    indx={arrToMap[0]}
                    err={err}
                />}
                {questionsPosition === arrToMap[1] && <QuesTwo
                    addToAnswers={addToAnswers}
                    examinee={examinee}
                    indx={arrToMap[1]}
                    err={err}
                />}
                {questionsPosition === arrToMap[2] && <QuesThree
                    addToAnswers={addToAnswers}
                    indx={arrToMap[2]}
                    examinee={examinee}
                />}
                {questionsPosition === 4 && <LastPage
                    addToAnswers={addToAnswers}
                    examinee={examinee}
                />}
            </div>
        </div>
    );
}

export default TestModal


