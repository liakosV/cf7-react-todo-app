export type TodoProps = {
    id: number;
    text: string;
    completed: boolean;
}

export type Action =
    | {type: "ADD"; payload: string}
    | {type: "DELETE"; payload: string}
    | {type: "EDIT"; payload: {id: number, newText: string} }
    | {type: "COMPLETE"; payload: number }


export type TodoListProps = {
    todos: TodoProps[];
    dispatch: React.Dispatch<Action>
}

export type todoFormProps = {
    dispatch: React.Dispatch<Action>,
}