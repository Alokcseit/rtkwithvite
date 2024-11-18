import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1; // Increment the count
        },
        decrement: (state) => {
            state.count -= 1; // Decrement the count
        },
        reset: (state) => {
            state.count = 0; // Reset the count to 0
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload; // Increment by a specific value
        },
    },
});

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
