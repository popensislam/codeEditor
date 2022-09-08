import { createSlice, PayloadAction } from "@reduxjs/toolkit"


export interface cssState {
    cssCode: string 
}

const initialState: cssState = {
    cssCode: ''
}

export const htmlSlice = createSlice({
    name: 'css',
    initialState,
    reducers: {
        setCss: (state, action: PayloadAction<string>) => {
            state.cssCode = action.payload
        }
    }
})

export const { setCss } = htmlSlice.actions 
export default htmlSlice.reducer