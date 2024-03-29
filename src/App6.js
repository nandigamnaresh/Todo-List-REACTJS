import React, { useState, useEffect } from 'react';
import './App2.css';

function App2() {
    const [x, y] = useState('');
    const [c, d] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [
            { id: 1, name: 'YASH', movie: 'KGF' },
            { id: 2, name: 'NTR', movie: 'RRR' },
            { id: 3, name: 'RAM', movie: 'RRR' }
        ];
    });

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = () => {
        todos.filter(data5=>data5.text.includes(searchQuery))
    };

    const handleAdd = () => {
        if (c === '' || x === '') {
            alert('Please enter valid text');
            document.getElementById('aaa').style.border = '2px solid red';
            document.getElementById('ccc').style.border = '2px solid red';
            document.getElementById('bbb').style.color = 'red';
        } else {
            const newTodo = { id: todos.length + 1, name: c, movie: x };
            setTodos([...todos, newTodo]);
            d('');
            y('');
            document.getElementById('bbb').innerHTML = '';
            document.getElementById('aaa').style.border = '2px solid green';
        }
    };

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const deleteTodo = (id) => {
        const filteredTodos = todos.filter(todo => todo.id !== id);
        setTodos(filteredTodos);
    };

    return (
        <div id='main'>
            <div>
                <input
                    type='text'
                    id='aaa'
                    value={c}
                    onChange={(e) => d(e.target.value)}
                    placeholder='HERO NAME'
                />
                &nbsp;
                <input
                    type='text'
                    id='ccc'
                    value={x}
                    onChange={(e) => y(e.target.value)}
                    placeholder='MOVIE NAME'
                />
                &nbsp;
                <button onClick={handleAdd} id='but'>
                    ADD
                </button>
                <p id='bbb'></p>
            </div>

            {/* Search Bar */}
            <div>
                <input
                    type='text'
                    value={searchQuery}
                    onChange={handleChange}
                    placeholder='Search...'
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            <ul id='ul'>
                {todos.map((data) => (
                    <li key={data.id}>
                        {data.id}.{data.name} <span id='movie'>{data.movie}</span>&nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(data.id)} id='rem'>
                            REMOVE..☠️
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App2;
