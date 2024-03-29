import React, { useState, useEffect } from 'react';

function App2() {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [
            { id: 1, name: "Prabhas" },
            { id: 2, name: "JR.NTR" },
            { id: 3, name: "Ram" }
        ];
    });






    
    let nextId = todos.length + 1;

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() === "") {
            alert("Please enter valid text");
            return;
        }

        const newTodo = {
            id: nextId++,
            name: inputValue
        };

        setTodos(prevTodos => [...prevTodos, newTodo]);
        setInputValue('');
    };

    const handleDeleteTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };



    
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);




    return (
        <div style={{ margin: "200px 0px 0px 670px", fontSize: "20px" }}>
            <div>
                <input
                    type='text'
                    value={inputValue}
                    onChange={handleChange}
                />
                <button onClick={handleAddTodo}>ADD</button>
            </div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.name} {todo.id}
                        <button onClick={() => handleDeleteTodo(todo.id)}>REMOVE</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App2;
