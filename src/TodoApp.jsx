import React from 'react'
import { useGetTodoByIdQuery, useGetTodosQuery } from './store/api/todos.Api'
import { useState } from 'react';

export const TodoApp = () => {
    const [state, setstate] = useState(1);

    const {data: todos= [], isLoading} = useGetTodosQuery();
    const {data: todoID=[], isLoading: loading} = useGetTodoByIdQuery(state);

    const incrementState = ()=>{
        setstate(state + 1)
    }
    const decrementState = ()=>{
        if(state>1)setstate(state - 1)
    }

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isLoading: {isLoading?'True':'False'}</h4>
            <pre>{JSON.stringify(todoID)}</pre>

            <button disabled={state>1?false:true} onClick={()=>{decrementState()}}>
                Prev Todo
            </button>
            
            <button onClick={()=>{incrementState()}}>
                Next Todo
            </button>
            <ul>
               {todos.map((todo)=>{
                return(
                    <li key={todo.id}><strong>{todo.completed ? 'DONE - ':'Pending - '}</strong>{todo.title}</li>
                )
               })}
            </ul>
            
        </>
    )
}
