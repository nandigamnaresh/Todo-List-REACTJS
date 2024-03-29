import React, { useState, useEffect } from 'react';
import './App2.css';

function App2() {
    const [searchQuery, setSearchQuery] = useState('');
    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [
            {
                id: 1,
                name: 'YASH',
                movie: 'KGF'
            },
            {
                id: 2,
                name: 'NTR',
                movie: 'RRR'
            },
            {
                id: 3,
                name: 'RAM',
                movie: 'RRR'
            }
        ];
    });

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleNewTodoInputChange = (e) => {
        setNewTodo(e.target.value);
    };

    const filteredTodos = todos.filter(todo =>
        todo.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const addTodo = () => {
        if (newTodo.trim() === '') {
            alert('Please enter valid text');
            return;
        }
        const newTodoObj = {
            id: todos.length + 1,
            name: newTodo,
            movie: ''
        };
        setTodos(prevTodos => [...prevTodos, newTodoObj]);
        setNewTodo('');
    };

    const deleteTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <div id='main'>
            <div>
                <input
                    type='text'
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    placeholder='Search Hero Name'
                />
            </div>

            <div>
                <input
                    type='text'
                    value={newTodo}
                    onChange={handleNewTodoInputChange}
                    placeholder='Add New Todo'
                />
                <button onClick={addTodo}>ADD</button>
            </div>

            <ul>
                {filteredTodos.map(todo => (
                    <li key={todo.id}>
                        {todo.name} ({todo.movie})
                        <button onClick={() => deleteTodo(todo.id)}>REMOVE</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App2;
