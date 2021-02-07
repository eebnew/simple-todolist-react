import React, {useState, useEffect} from 'react';
import './App.css';
//components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [todosFiltered, setTodosFiltered] = useState([]);
  
  const filterHandler = () => {
    switch (filter) {
      case "completed":
        setTodosFiltered(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setTodosFiltered(todos.filter(todo => todo.completed === false));
        break;
      default:
        setTodosFiltered(todos);
        break;
      }
    }
    
    const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
    const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }

  useEffect(()=>{
    getLocalTodos();
  }, []);

  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  }, [todos, filter]);
  
  
  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form setFilter={setFilter} todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
      <TodoList todosFiltered={todosFiltered} setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
