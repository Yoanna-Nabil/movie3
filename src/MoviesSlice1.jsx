import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from './AxiosInstance';


export let getAllMovies= createAsyncThunk('movies1/getAllMovies', async () =>{
   let {data}= await axiosInstance.get("/popular")
   return data .results;
})

export let getMoviesId= createAsyncThunk('movies1/getMoviesId', async (userId, thunkAPI) =>{
    let {data}= await axiosInstance.get(`/${userId}`)
    console.log(data)
    return data;
 })

 export let moviesPropagation= createAsyncThunk('movies3/moviesPropagation', async (currentPage) =>{
    let {data}= await axiosInstance.get(`/popular?page=${currentPage}`)
    return data .results;
 
 })

let initialState= {
    movies1: [],
    movies2: [],
    movies3: [],
    currentPage: 1,
}


let moviesSlice1= createSlice({
    name: "movies1",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllMovies.fulfilled, (state, action) =>{
            state.movies1= action.payload
        })

        builder.addCase(getMoviesId.fulfilled, (state, action) =>{
            state.movies2= action.payload
        })

        builder.addCase(moviesPropagation.fulfilled, (state, action) =>{
            state.movies3= action.payload
        })
    },

    reducers: {
        setCurrentPageadd: (state) => {
            state.currentPage ++;
          },
          setCurrentPageaddmin: (state) => {
            state.currentPage --;
          },
    }
})

export const moviesReducer1= moviesSlice1.reducer;
export const { setCurrentPageadd, setCurrentPageaddmin } = moviesSlice1.actions;


