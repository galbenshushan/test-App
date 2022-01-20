import { createSlice } from '@reduxjs/toolkit'

const answersSlice = createSlice({
    name: 'answers',
    initialState: {
        answers: [],
        correct: 0,
        justCount: 0,
        total:3
    },
    reducers: {
        addAnswers(state, action) {
            state.answers.push(action.payload);
            state.justCount += 1;
            if (action.payload.correct_answer === action.payload.user_answer) {
                state.correct += 1
            }
        },
        
    }
})

export const answersActions = answersSlice.actions;

export default answersSlice