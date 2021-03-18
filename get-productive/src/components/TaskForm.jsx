// Source used for drag and drop feature: https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/#what-is-drag-and-drop
import React from "react"


function Taskform(props) {
  const {task,date} = props.task.fields;
  return (
    <div>
      <h3>{task}</h3>
      <h4>{date}</h4>
    </div>

  )
}

export default Taskform;