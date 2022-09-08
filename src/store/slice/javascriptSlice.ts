import { createSlice, PayloadAction } from "@reduxjs/toolkit"


export interface jsState {
    jsCode: string
}

const initialState: jsState = {
    jsCode: '',
}

export const javascriptSlice = createSlice({
    name: 'javascript',
    initialState,
    reducers: {
        setJs: (state, action: PayloadAction<string>) => {
            state.jsCode = action.payload 
        }
    }
})

export const { setJs } = javascriptSlice.actions 

export default javascriptSlice.reducer