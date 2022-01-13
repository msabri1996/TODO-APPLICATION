import Header from "./components/Header";
//import React from "react";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import { useState,useEffect } from "react"
import AddTask from "./components/AddTask";
import About from "./components/About";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

function App() {
  // const name="Brad"
  // const x=true
  const [tasks,setTasks] = useState([])

 // Delete task 

 const deleteTask = async (id) => { 
   await fetch(`http://localhost:5000/tasks/${id}`,{method:"DELETE"})
   setTasks(tasks.filter((task)=>task.id!==id))
  // console.log("delete",id);
}

 // Toggle Reminder

 const toggleReminder = async (id) => {

  const taskToToggle = await fetchTask(id)
  const updTask = {...taskToToggle,reminder:!taskToToggle.reminder}
  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()

   setTasks(tasks.map((task) => task.id === id ? {...task,reminder:data.reminder} : task))
  //console.log(id);
  }

  // Add Task

  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks",{method:"POST",headers:{'Content-type':"application/json"},body:JSON.stringify(task)})

    // const id=Math.floor(Math.random()*10000)+1
    // const newTask = {id,...task}
    // setTasks([...tasks,newTask])
    // //console.log(id);
    // //console.log(task);

    const data=await res.json()

    setTasks([...tasks,data])
  }

  

  const [showAddTask,setShowAddTask]=useState(false)

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  // Fetch Tasks
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  return (
    <Router>
    <div className="container">
      
      {/* <h1>HELLO MAJDOULINE MSABRI</h1>
      <h2>hello {name}</h2>
      <h3>{x ? "yes":"No"}</h3>
      {1*20+3} */}
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {/* {showAddTask && (<AddTask onAdd = {addTask} />)} */}
      {/* {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "No Tasks to show for you"} */}
       <Routes>
       <Route path="/" element={
         (
         <>
            {showAddTask && (<AddTask onAdd = {addTask} />)}
           {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "No Tasks to show for you"}
         </>
       )} />
       <Route path="/about" element={<About/>} />
       </Routes>
       <Footer/>
    </div>
    </Router>
  );
}

// class App extends React.Component{
//   render(){
//     return (
//     <>  
//     <h1>hello class</h1>
//     <Header />
//     </>
//     )
//   }
// }
export default App;
