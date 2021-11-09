import {useState} from "react";

import TodoInput  from "./TodoInput";
import TodoLista from "./TodoList";
import "./todo.css";
function Todo() {
    const [TodoList, setTodoList] = useState([]);
    const [showFiltered, setShowFiltered] = useState(false);
    const handleAddTodo = (todo, setTodo) => {
        setTodoList([...TodoList, todo])
        setTodo("");
    }


    const handleToggleItem = (id) => {
        const updateList = TodoList.map((value)=> {
            if(id === value.id) {
                value.status = !value.status;
            }
            return value;
        })
        setTodoList(updateList);
    }

    return (
        <div className = "container">
            <TodoInput className = "todoInput" handleTodoList = {handleAddTodo} />
            <TodoLista className = "ShowTodo"  list = {showFiltered ? TodoList.filter((e) => !e.status) : TodoList} handleToggle = {handleToggleItem} todo = {TodoList} />
            <button className = "click" onClick = {() => { 
                setShowFiltered(!showFiltered);
                // const updated = TodoList.map((e) => !e.status);
                // setTodoList(updated);

            }} >{showFiltered ? "Show All" : "Show Not completed" }</button>
            <TodoLista className = "ShowTodo"  list = {showFiltered ? TodoList.filter((e) => e.status) : []} handleToggle = {handleToggleItem} todo = {TodoList} />

        </div>
    )
}
export {Todo};