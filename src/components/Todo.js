import React from 'react';

const Todo = ({id, completed, text, setTodos, todos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter(todo => (todo.id !== id)));
    }
    const completeHandler = () => {
        setTodos(todos.map(todo => {
            if(todo.id === id){
                return{...todo, completed: !todo.completed}
            }
            return todo;
        }));
    }
    return(
    <div className="todo">
        <li className={`todo-item ${completed ? "completed" : ""}`}>{text}</li>
        <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
        <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
    </div>
    );
}

export default Todo;