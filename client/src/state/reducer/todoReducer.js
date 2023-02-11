import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const addTodoApi = createAsyncThunk('user/Add', async (data) => {
    try {
        console.log("Api hitted")
        const response = await axios.post(
            "http://localhost:8080/todo/add",
            { item: data },
            {
                headers: {
                    'Authorization': `Basic ${localStorage.getItem('token')}`
                }
            }
        );
        // If you want to get something back 
        return response.data;
    } catch (err) {
        console.error(err)
    }
})

export const readTodoApi = createAsyncThunk('user/read', async () => {
    try {
        const userTodo = await axios.get(
            "http://localhost:8080/todo/",
            {
                headers: {
                    'Authorization': `Basic ${localStorage.getItem('token')}`
                }
            });
        // If you want to get something back
        console.log("User Todo", userTodo);
        return userTodo.data;
    } catch (err) {
        console.error(err)
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
    extraReducers: (muneed) => {
        muneed.addCase(addTodoApi.fulfilled, (state, action) => {
            state.list = action.payload
            state.status = "succeeded"
            console.log("succeeded")
        });
        muneed.addCase(addTodoApi.pending, (state, action) => {
            state.status = "loading"
            console.log("pending...")
        });
        muneed.addCase(addTodoApi.rejected, (state, action) => {
            state.status = "failed"
            // state.error = "error"
        });
        muneed.addCase(readTodoApi.fulfilled, (state, action) => {
            state.list = action.payload;
            console.log("todoList==>", state.list)
        })
    }
})

export default todoSlice.reducer
