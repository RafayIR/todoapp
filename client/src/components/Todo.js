import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';
import { addTodoApi, readTodoApi } from '../state/reducer/todoReducer';
import axios from 'axios';

const Todo = () => {

    const navigate = useNavigate();


    const readTodo = useSelector((state) => state.todoList.list);
    const dispatch = useDispatch();


    useEffect(() => {
        let interval = setInterval(() => dispatch(readTodoApi()), 5000);
        return () => clearInterval(interval)
    }, [])


    const [todo, setTodo] = useState("");


    const addTodo = () => {
        if (todo !== '')
            dispatch(addTodoApi(todo))
        setTodo('');
    }

    const logout = () => {
        localStorage.clear()
        navigate('/');
    }
    // const deleteTodo = async (item) => {
    //     try {
    //         const response = await axios.delete(
    //             "http://localhost:8080/todo",
    //             {
    //                 headers: {
    //                     'Authorization': `Basic ${localStorage.getItem('token')}`
    //                 }
    //             }
    //         );

    //     } catch (err) {
    //         console.error(err)
    //         // alert("Please Enter Valid Credentials");
    //     }
    // }

    if (!localStorage.getItem('token')?.length) {
        return < Navigate to="/" />
    }



    return (
        <>
            <div className="text-center container">
                <div className="p-5 row">
                    <div className="col-md-6 text-start">
                        <div className="todo-info"><h3 className='text-white'>{localStorage.getItem('email')}</h3></div>
                    </div>
                    <div className="col-md-6 text-end">
                        <button className="btn-secondary py-2 px-4" onClick={logout}>Logout</button>
                    </div>
                    <div className="col-md-12">
                        <h1>Todo App: </h1>
                        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
                        <button className="btn-primary" onClick={addTodo}>Add Todo</button>
                        {/* <button className="btn-danger" onClick={deleteTodo}>Delete All</button> */}

                        <hr />
                        {/* Todo List Render */}

                        <ul className='todoData'>
                            {readTodo.map((item, index) => {
                                return (
                                    <li key={index}>
                                        {item}
                                        {/* <button className="btn-primary" onClick={() => deleteTodo(item)}>Delete</button> */}
                                    </li>
                                )
                            })}
                        </ul>

                    </div>
                </div>
            </div>
        </>
    );
}



export default Todo;

