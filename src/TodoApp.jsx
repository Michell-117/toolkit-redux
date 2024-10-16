import React from 'react'
import { useGetTodosQuery } from './store/api/todos.Api'

export const TodoApp = () => {
    const {data: todos= [], isLoading} = useGetTodosQuery();
    // console.log(algo)

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isLoading: {isLoading?'True':'False'}</h4>
            {/* <h4>isFetching...</h4> */}
            <pre>...</pre>
            <ul>
               {todos.map((todo)=>{
                return(
                    <li key={todo.id}><strong>{todo.completed ? 'DONE - ':'Pending - '}</strong>{todo.title}</li>
                )
               })}
            </ul>
            <button>
                Next Todo
            </button>
        </>
    )
}
