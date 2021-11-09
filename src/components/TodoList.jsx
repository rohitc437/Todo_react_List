import "./todoList.css";



function TodoList({todo, handleToggle, list}) {
    console.log(list);
    return (
        <div className = "todoList">
            {list.map((e) => (
                !e.status ? 
                <div className = "item" key = {e.id} >
                <input className = "checkbox" type = "checkbox" value = {e.status} onClick = {() => { 
                    handleToggle(e.id);

                }}/>
                
                {e.text}
                <img className = "star" src = "https://th.bing.com/th/id/R.d3eb5159c6db15d99205f12c44308110?rik=f4HqWAVph9yF%2bg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fdownload_287015.png&ehk=twcNno6rAM2gCawlAsc71PhMMTfhVSincoybXIDaSdc%3d&risl=&pid=ImgRaw&r=0" alt = "star" />
                </div> : <div className = "cross item" key = {e.id} >
                <input className = "checkbox" type = "checkbox" value = {e.status} onClick = {() => { 
                    handleToggle(e.id);

                }}/>
                
                {e.text}
                <img className = "star" src = "https://th.bing.com/th/id/R.d3eb5159c6db15d99205f12c44308110?rik=f4HqWAVph9yF%2bg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fdownload_287015.png&ehk=twcNno6rAM2gCawlAsc71PhMMTfhVSincoybXIDaSdc%3d&risl=&pid=ImgRaw&r=0" alt = "star" />
                </div>
            ))}
           
        </div>
    )
}
export default TodoList;