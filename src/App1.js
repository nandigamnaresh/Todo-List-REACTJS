import React, { useState } from 'react'

function App1() {
    const [a,b] = useState('');
    const [c,d] = useState('');

    const sub = ()=>{
      let inp =document.getElementById('aaa').value;
      b(inp);
      if(a==="")
      {
        alert("Enter chey bey")
      }
      let inp1 =document.getElementById('bbb').value;
      d(inp1);
       
      

    }


  return (
    <div>

        <h1>TODO LIST</h1>
        <input type='text' id='aaa'></input>
        <input type='text' id='bbb'></input>
        <button onClick={sub}>ADD</button>
        <h6>{a} &nbsp; {c} &nbsp; &nbsp; {} </h6>
        
    </div>
  )
}

export default App1