import React from 'react'
import { useParams } from "react-router-dom";

export default function Details(props) {
  const {tasks} =  props
  const params = useParams();
  console.log(tasks)
  const task = tasks.find(task => task.id === params.id)
  console.log(task)
  if (!task) {
    return (<h1>Loading ...</h1>)
  }
  const newDate = Date(task.fields.date)
  console.log(newDate)
  return (
    <div>
      <li><h3>{task.fields.details}</h3></li>
      <h3>{`Due on ${newDate}`}</h3>
      <label for="Completed">Completed</label>
      <input type="checkbox" checked={task.fields.completed}/>
    </div>
  )
}
