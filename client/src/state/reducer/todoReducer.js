
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const addTodoApi = createAsyncThunk('user/Add', async (data) => {
    try {
        console.log("Api hitted")
        const response = await axios.post(process.env.REACT_APP_SERVER_URL + "todo/", {item:data});
        // If you want to get something back
        return response.data;
    } catch (err) {
        console.error(err)
    }
})


export const readTodoApi = createAsyncThunk( 'user/read', async (data) => {
    try{
        console.log('read Api hitted')
        const todoUser = await axios.get( process.env.REACT_APP_SERVER_URL + 'todo/', { item : data})
        return todoUser.data;
    }catch (err) {
        console.error(err);
    }
})

const initialState = {
    list: [],
    status: "idle",
};


const todoSlice = createSlice({
    name: "todoList",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addTodoApi.fulfilled, (state, action) => {
            state.list = action.payload
            state.status = "succeeded"
            console.log("succeeded")
        });
        builder.addCase(addTodoApi.pending, (state, action) => {
            state.status = "loading"
            console.log("pending...")
        });
        builder.addCase(addTodoApi.rejected, (state, action) => {
            state.status = "failed"
            // state.error = "error"
        });
        builder.addCase(readTodoApi.fulfilled, (state, action) => {
            state.list = action.payload;
            state.status = "succeeded";
        })
    }
})

export default todoSlice.reducer
