export type TodoProps = {
    id: number;
    text: string;
}

export type Action =
    | {type: "ADD"; payload: string}
    | {type: "DELETE"; payload: string}
    | {type: "EDIT"; payload: {id: number, newText: string} };

export type Todo = {
    id: number;
    text: string;
}

export type TodoListProps = {
    todos: Todo[];
    dispatch: React.Dispatch<Action>
}

export type todoFormProps = {
    dispatch: React.Dispatch<Action>,
}