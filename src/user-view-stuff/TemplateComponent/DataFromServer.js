import React from 'react'
import { useState, useEffect} from "react"
import SideSection from './SideSection'
import axios from 'axios'
import AsideUserPlan from "./AsideUserPlan"

const DataFromServer = () => {
    const [tasks, setTask] = useState ([]) 

    useEffect(() =>{
        const getTasks = async () => {
          const Taskfromserver = await fetchtask()
          setTask(Taskfromserver)
          console.log(Taskfromserver);
        }
       
        getTasks()
      }, [])


    const fetchtask = async () => {
       try{
        const response =  await axios.get(`http://localhost:7000/userroutes`)
        return response.data
       }catch(e){
           console.log(e);
       }
    }
    console.log(tasks);

  return (
    <>
      {tasks.map((task) =>{
       return <SideSection task={task}/>
      })}
    </>
  )
}

export default DataFromServer