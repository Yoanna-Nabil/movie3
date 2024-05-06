import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer1 } from "./MoviesSlice1";
;


export let store= configureStore({
    reducer: {
        movies1: moviesReducer1,
    }
})