import React from 'react';

const TodoItem = (props) => {

    const completedStyles = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }


    return (
        <div className="todo-item">
            <input 
            type="checkbox" 
            checked={props.task.completed}
            onChange={()=> props.handleChange(props.task.id)}
          />
            <p style={props.task.completed ? completedStyles : null}> {props.task.text}</p>
        </div>
    )
}
export default TodoItem;