// Source used for drag and drop feature: https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/#what-is-drag-and-drop
import { useParams} from "react-router-dom";
import { useState } from "react";
import { baseURL, config } from "../services";
import axios from "axios";


function TaskForm(props) {
  const [details, setDetails] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState();

  const params = useParams();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const fields = {
      label: params.label,
      task,
      details,
      date,
    }
    await axios.post(baseURL, { fields: fields }, config);
    props.setToggleFetch((curr) => !curr);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task"></label>
        <input required id="task" type="text" placeholder="Enter new task" value={task} onChange={(e) => setTask(e.target.value)} />
      <label htmlFor="details"></label>
        <input required id="details" type="textarea" placeholder="New task detail" value={details} onChange={(e)=> setDetails(e.target.value)} />
      <label htmlFor="date"></label>
        < input required id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button type="submit">New Task</button>
    </form>
  )
}

export default TaskForm;