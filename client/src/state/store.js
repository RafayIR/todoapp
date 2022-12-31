import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './reducer/todoReducer'


const store = configureStore({
    reducer:{
        todoList:todoReducer
    }
})

export default store;