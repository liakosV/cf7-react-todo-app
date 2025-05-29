import {useState} from "react";

type Action =
    | {type: "ADD"; payload: string}
    | {type: "DELETE"; payload: string}

type todoFormProps = {
    dispatch: React.Dispatch<Action>,
}

const TodoForm = ({dispatch}: todoFormProps) => {
    const [text, setText] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim() !== "") {
            dispatch({type: "ADD", payload: text});
            setText("");
        }
    };

    return (
        <>
            <form className="flex gap-4 mb-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="flex-1 border p-2 rounded"
                    placeholder="New Task..."
                    value={text}
                    onChange={handleChange}
                />
                <button
                    className="bg-cf-dark-gray text-white px-4 py-2 rounded"
                    type="submit"
                >
                    Add
                </button>
            </form>
        </>
    )
}

export default TodoForm;