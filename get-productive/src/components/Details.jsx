import React from 'react'
import { useParams, Link } from "react-router-dom";

export default function Details(props) {
  const {tasks} =  props
  const params = useParams();
  return (
    <div>
      Task Details
      {`deails for task# ${params.id}`}
    </div>
  )
}
