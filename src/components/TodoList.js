import React from 'react';
import Todo from './Todo';

const TodoList = ({setTodos, todos, todosFiltered}) => {
    return(
    <div className="todo-container">
      <ul className="todo-list">
        {todosFiltered.map(todo => (
          <Todo setTodos={setTodos} id={todo.id} completed={todo.completed} todos={todos} key={todo.id} text={todo.text}/>
        ))}
      </ul>
    </div>
    );
}

export default TodoList;