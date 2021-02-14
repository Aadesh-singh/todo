import React from 'react';
import todoData from './components/todoData';
import TodoItem from './components/TodoItem';
import css from './index.css';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            todo : todoData
        }
    this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(id){
        console.log("pinched ",id);
        this.setState(prevState=> {
            const updatedTodo = prevState.todo.map(item => {
                if(item.id === id){
                    item.completed = !item.completed
                }
                return item;
            });
            return {
                todo: updatedTodo
            }
        });
    }
    
 
    render(){
        const TodoComponent = this.state.todo.map(item => <TodoItem key={item.id} task={item} handleChange={this.handleChange}   />)
        return (
            <div className="todo-list">
                {TodoComponent}
            </div>
        )
    }
}

export default App;