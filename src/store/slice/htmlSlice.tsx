import { createSlice, PayloadAction } from "@reduxjs/toolkit"



export interface htmlState {
    htmlCode: string 
}

const initialState: htmlState = {
    htmlCode: ''
}


export const htmlSlice = createSlice({
    name: 'html',
    initialState,
    reducers: {
        setHtml: (state, action: PayloadAction<string> ) => {
            state.htmlCode = action.payload
        }
    }
})

export const { setHtml } = htmlSlice.actions 
export default htmlSlice.reducer