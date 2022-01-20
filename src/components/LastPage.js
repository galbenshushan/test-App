import React from 'react'
import { useSelector } from 'react-redux'

const LastPage = () => {

    const answers = useSelector(state => state.answers)

    const examinee = useSelector(state => state.examinee)

    console.log(answers.correct);
    console.log(answers.total);
    return (
        <div>
            <div>
                <h2>You end the test!</h2>
                <h5>Dear {examinee.name}</h5>
                <h5>You answered {answers.correct} questions correctly out of {answers.total}</h5>
                <h5>{answers.correct / answers.total === 1 && "Congratulations it's an A+!"}</h5>
                <h5>{answers.correct / answers.total < 1 && answers.correct / answers.total > 0 && "You get better from time to time!"}</h5>
                <h5>{answers.correct === 0  && "You must get better!"}</h5>
                <br /><br />
                <h2>Thank you!</h2>
            </div>
        </div>
    )
}

export default LastPage
