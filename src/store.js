import { configureStore } from "@reduxjs/toolkit";
import vampireReducer from './vampireSlice';

export const store = configureStore({
    reducer: {
        vampire: vampireReducer,
    }
})