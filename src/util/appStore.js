import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from './userSlice'; // Import the correct `userReducer`
import { moviesReducer } from "./movieSlice";
const appStore = configureStore({
    reducer: {
        user: userReducer, // Use the correct reducer here
        movies: moviesReducer
    },
});

export default appStore;
