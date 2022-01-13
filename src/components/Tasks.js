// const tasks =[
//     {
//         id:1,
//         text:"Doctor's Appointment",
//         day: "February 18 at 4h30 pm",
//         reminder:true
//     },
//     {
//         id:2,
//         text:"SPORT",
//         day: "January 20 at 8h30 am",
//         reminder:true
//     },
//     {
//         id:3,
//         text:"Meeting",
//         day: "March 5th at 4h30 pm",
//         reminder:false
//     }
// ]

// import { useState } from "react"

import Task from "./Task"

const Tasks = ({tasks,onDelete,onToggle}) => {
    // const [tasks,setTasks] = useState([
    //         {
    //             id:1,
    //             text:"Doctor's Appointment",
    //             day: "February 18 at 4h30 pm",
    //             reminder:true
    //         },
    //         {
    //             id:2,
    //             text:"SPORT",
    //             day: "January 20 at 8h30 am",
    //             reminder:true
    //         },
    //         {
    //             id:3,
    //             text:"Meeting",
    //             day: "March 5th at 4h30 pm",
    //             reminder:false
    //         }
    //     ])
        //setTasks([...tasks,{id:4,text:"Meeting",day: "March 5th at 4h30 pm",reminder:false}])
    return (
        
        <>
         {tasks.map((task)=>(<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>))}   
        </>
    )
}

export default Tasks
