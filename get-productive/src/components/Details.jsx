import React from 'react'
import { useParams } from "react-router-dom";

export default function Details(props) {
  const {tasks} =  props
  const params = useParams();
  console.log("detail form",params.label)
  const task = tasks.find(task => task.id === params.id)
  console.log(task)
  
  if (!task) {
    return (<h1>Loading ...</h1>)
  }
  
  return (
    <div>
    <h2>{`Task list for ${params.tasks}`}</h2>
    <div className="detail">
      <p>{task.fields.details}</p>
      <p>{`Due on ${task.fields.date}`}</p>
      <label for="Completed"></label>
        <input type="checkbox" checked={task.fields.completed} />
      </div>
      </div>
  )
}
