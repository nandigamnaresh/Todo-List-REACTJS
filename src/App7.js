import React, { useState } from 'react';
// import './Todo2.css'

function TodoList() {
  const [tasks, setTasks] = useState(["Gopikrishna"]);
  const [inputValue, setInputValue] = useState('');



  const [searchList, setSearchList] = useState('');
  const handleSearchChange = (event) => {
    setSearchList(event.target.value);
  };

  const handleInputChange = (ele) => {
    setInputValue(ele.target.value);
  };



//   const handleSearchChange = (event) => {
//     setSearchList(event.target.value);
//   };





  const addTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
    if(inputValue === ''){
      alert('Write some task')
    }
  };

  const removeTask = (indexremove) => {
    setTasks(prevTasks => prevTasks.filter((task, index) => index !== indexremove));
  };

  const filteredTasks = tasks.filter(task =>
    task.toLowerCase().includes(searchList.toLowerCase())
  );
  

  return (
    <div className='main'>
      <h1 className='head'>To-Do List</h1>

      <input className='inp1' type="text" value={searchList} onChange={handleSearchChange} placeholder="Search tasks"/><br/>



      <input className='inp' type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter a task"/>
      <button className='bttn' onClick={addTask}>Add Task</button>
      {/* <input className='inp1' type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search tasks"/> */}

     



      <ul className='rslt'>
        {filteredTasks.map((task, index) => (
          <li className='rslt1' key={index}> {task}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
    
  );
}

export default TodoList;