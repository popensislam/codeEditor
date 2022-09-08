import { configureStore } from "@reduxjs/toolkit";
import jsReducer from './slice/javascriptSlice'
import htmlReducer from './slice/htmlSlice'
import cssReducer from './slice/cssSlice'

export const store = configureStore({
    reducer: {
        js: jsReducer,
        html: htmlReducer,
        css: cssReducer
    }
})


export type RootState = ReturnType<typeof store.getState> 

export type AppDispatch = typeof store.dispatch