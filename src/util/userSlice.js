import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: null,
    },
    reducers: {
        addUser: (state, action) => {
            state.value = action.payload; // Update state value
        },
        removeUser: (state) => {
            state.value = null; // Clear state value
        },
    },
});

export const { addUser, removeUser } = userSlice.actions; // Export actions
export const userReducer = userSlice.reducer; // Export the reducer
