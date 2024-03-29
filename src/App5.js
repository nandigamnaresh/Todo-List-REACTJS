import React, { useState ,useEffect} from 'react';
// import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState(()=>{
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) :[]});








  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue }]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };




  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
  




  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Add a new todo..."
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            <span>
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;