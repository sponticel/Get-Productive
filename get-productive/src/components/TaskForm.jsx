// Source used for drag and drop feature: https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/#what-is-drag-and-drop

import { useState } from "react";
import { baseURL, config } from "../services";
import axios from "axios";


function TaskForm(props) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState(new Date());
  // const [completed, setCompleted] = useState(False)
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(`ganamos1`)
    const fields = {
      task,
      date,
    }
    await axios.post(baseURL, { fields }, config);
    props.setToggleFetch((curr) => !curr);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Enter a new task: </label>
      <input required id="task" type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <label htmlFor="date">Enter date of task: </label>
      <input required id="date" type="date" value={date} onChange={(e)=> setDate(e.target.valueAsDate)}/>
      <button type="submit">New Task</button>
      
    </form>
  )
}

export default TaskForm;