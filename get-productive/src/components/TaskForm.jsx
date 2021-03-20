// Source used for drag and drop feature: https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/#what-is-drag-and-drop

import { useState } from "react"



function TaskForm(props) {
  const [task, setTask] = useState("");
  // const [completed, setCompleted] = useState(False)

  return (
    <form onSubmit="">
      <label htmlFor="task">Add a new task: </label>
      <input id="task" type="text" value={task} onChange={(e)=> setTask(e.target.value)} />
     
      
    </form>
  )
}

export default TaskForm;