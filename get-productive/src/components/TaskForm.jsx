// Source used for drag and drop feature: https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/#what-is-drag-and-drop

import { useState } from "react"



function TaskForm(props) {
  const [task, setTask] = useState("");
  
  return (
    <form onSubmit="">
      <label htmlFor="">
        <input type="text" value=" onChange=" />
      </label>
    </form>
  )
}

export default TaskForm;