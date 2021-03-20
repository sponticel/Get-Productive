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
    <div className="detail">
      <p>{task.fields.details}</p>
      <p>{`Due on ${newDate}`}</p>
      <label for="Completed">Completed</label>
      <input type="checkbox" checked={task.fields.completed}/>
    </div>
  )
}
