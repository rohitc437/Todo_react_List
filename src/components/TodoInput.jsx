import {useState} from "react";
import {nanoid} from "nanoid";
import "./todoInput.css";


function TodoInput ({handleTodoList}) {
    const [todo, setTodo] = useState("");
    const handleChange = ({target}) => {
        setTodo(target.value);
    }

    const handleClick = () => {
        let data = {
            id : nanoid(4),
            text : todo,
            status : false
        }
        handleTodoList(data, setTodo);
    }


    return (
        <div className = "todoInput">
            <input className = "input" type = "text" onChange = {handleChange} placeholder = "Add some text" value = {todo} />
            <button className = "button" onClick = {handleClick}>Add</button>
        </div>
    )
}

export default TodoInput;