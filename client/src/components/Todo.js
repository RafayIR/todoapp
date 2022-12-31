import React, { useState , useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoApi } from '../state/reducer/todoReducer';
import { readTodoApi } from '../state/reducer/todoReducer';

const Todo = () => {
    // const tododata = useSelector((state) => state.todoList);
    const dispatch = useDispatch();

    useEffect(() => {
        let interval = setInterval(()=>dispatch(readTodoApi()),5000);
        return () => clearInterval(interval)
    }, [])


    const [todo, setTodo] = useState("");

   
    const addTodo = () => {

    if( todo !== '')
        dispatch(addTodoApi(todo))
        setTodo('');
    }




    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} />
                        <button className="btn-primary" onClick={addTodo}>Add Todo</button>
                    </div>
                </div>
            </div>



            <ShowMessges />
        </>
    );
}


function ShowMessges() {
    const userTodo = useSelector( state => state.todoList.list);

    return (
        <>
            <div> 
               <h1> { userTodo } </h1>
            </div>
        
        </>
    )
}


export default Todo;
