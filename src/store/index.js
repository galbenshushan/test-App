import { configureStore } from '@reduxjs/toolkit'
import answersSlice from './answersSlice'
import examineeSlice from './examineeSlice'
import themeSlice from './themeSlice'

const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
        examinee: examineeSlice.reducer,
        answers: answersSlice.reducer,
    }
})

export default store