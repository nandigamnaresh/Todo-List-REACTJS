import React, { useState ,useEffect} from 'react'
import './App2.css'

function App2() {
    const[view,viewf]=useState('')
    const[x,y]=useState("");
    const [c,d] =useState("");
    const [a,b] = useState(()=>{
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) :

        [

    {

        id:1,
        name:"YASH",
        movie:"KGF"


    },
    {

        id:2,
        name:"NTR",
        movie:"RRR"

    },
    {

        id:3,
        name:"RAM",
        movie:"RRR"

    }

]
});






const chinna= (e)=>{
    d(e.target.value)

}
const chinna1= (e)=>{
    y(e.target.value)

}



let nextId = a.length + 1;


const but =()=>{

    if(c=="" || x=="")
    {

        alert("Please enter valid text");
        document.getElementById('aaa').style.border='2px solid red';
        document.getElementById('ccc').style.border='2px solid red';
        document.getElementById('bbb').style.color="red"
    }

    else
    {
        const naresh =[...a,{
            id: nextId++,
            name:c,
            movie:x
        }
        ]
        b(naresh);
        d("")
        y("")
        document.getElementById('bbb').innerHTML="";
        document.getElementById('aaa').style.border='2px solid green';

    }

}
// console.log(nextId)

useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(a));
}, [a]);












    function deleteTodo(id) {
        let filteredTodos = a.filter(
              (todo) => {
                    return todo.id != id;
              }
        )
        b(filteredTodos)


  }


  

  const chinnodu=(e)=>{viewf(e.target.value)}


  const full = a.filter(todo =>
    todo.name.toLowerCase().includes(view.toLowerCase())
);







  return (
    <>

    <div id='main' >
    




        <div >
            <input type='text' id='aaa' value={c}   onChange={chinna}      placeholder='✌️ HERO NAME'/> &nbsp;
            <input type='text' id='ccc' value={x}   onChange={chinna1}  placeholder='🎥 MOVIE NAME'/> &nbsp;
            <button     onClick={but}   id='but' >ADD</button> 
            <input type='text' id='aaa' placeholder='❤️ Search bar' onChange={chinnodu} value={view} style={{marginTop:"15px"}}/>
            <p id='bbb'></p> 
        </div>




        <ul id='ul'>

            {
                full.map((data,z)=>
                {
                    return <h3 id='h' key={a.id}>{data.id}.{data.name} <span id='movie'>{data.movie} </span> &nbsp; &nbsp; &nbsp;  <button onClick={()=>{deleteTodo(data.id)}} id='rem'>REMOVE..☠️ </button> </h3>
                })
            }

        </ul>




    </div>
    </>
  )
}

export default App2