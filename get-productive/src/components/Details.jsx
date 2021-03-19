import React from 'react'
import { useParams } from "react-router-dom";

export default function Details(props) {
  const {tasks} =  props
  const params = useParams();
  const filter = tasks.filter(task => task.fields.task === params.task)
  if (!filter) {
    return (<h1>Loading ...</h1>)
  }
  return (
    <div>
      {filter.map(task => {
        return (
          <div>
            {task.fields.details.id}
          </div>
      )})}
      {/* <h2>{`details for task# ${params.id}`}</h2> */}
    </div>
  )
}
