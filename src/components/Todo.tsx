import TodoForm from "./todoForm.tsx";
import {useReducer} from "react";
import TodoList from "./TodoList.tsx";
import type {Action, TodoProps} from "../types.ts";

const todoReducer = (state: TodoProps[], action: Action): TodoProps[] => {
    switch (action.type) {
        case "ADD":
            { const newTodo: TodoProps = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            }
            return [...state, newTodo]; }
        case "DELETE":
            return state.filter(todo => todo.id !== action.payload);
        case "EDIT":
            return state.map( todo =>
                todo.id === action.payload.id
                ? {...todo, text: action.payload.newText}
                : todo
            )
        case "COMPLETE":
            return state.map(todo =>
            todo.id === action.payload
            ? {...todo, completed: !todo.completed}
            : todo
            )

        default:
            return state;

    }
}


const Todo = () => {
    const [todos, dispatch] = useReducer(todoReducer, [])
    // console.log(todos)


    return (
        <>
            <div className="max-w-md mx-auto p-6">
                <h1 className="text-center text-2xl mb-4">To-Do List</h1>
                <TodoForm dispatch={ dispatch } />
                <TodoList todos={todos} dispatch={dispatch}/>
            </div>

        </>
    )
}

export default Todo;