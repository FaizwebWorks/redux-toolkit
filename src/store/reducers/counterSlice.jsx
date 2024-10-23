import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        // actions
        increment: (state, action) => {
            state.value = action.payload
            // console.log(action)
        },
        decrement: (state, action) => {
            state.value = action.payload
            // console.log(action)
        }
    }
})

export default counterSlice.reducer
export const { increment } = counterSlice.actions
export const { decrement } = counterSlice.actions