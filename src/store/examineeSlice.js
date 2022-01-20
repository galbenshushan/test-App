import { createSlice } from '@reduxjs/toolkit'

const examineeSlice = createSlice({
    name: 'examinee',
    initialState: {
        name: ''
    },
    reducers: {
        setExamineeNameHandler(state, action) {
            action.payload !== '' ? state.name = action.payload : state.name = ''
        }
    }
})

export const examineeActions = examineeSlice.actions;

export default examineeSlice