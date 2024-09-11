import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from './userSlice'; // Import the correct `userReducer`

const appStore = configureStore({
    reducer: {
        user: userReducer, // Use the correct reducer here
    },
});

export default appStore;
