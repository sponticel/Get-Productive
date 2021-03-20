import { useState } from "react"


function TaskForm(props) {
  const [detail, setDetail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState(1);

  return (
    <form onSubmit="">

      <label htmlFor="detail">Add Task Detail: </label>
        <input id="detail" type="text" value={detail} onChange={(e)=> setDetail(e.target.vaule)} />
      

      <label htmlFor="date">Enter date of task: </label>
      <input id="date" type="date" value={date} onChange={(e)=> setDate(e.target.valueAsDate)}/>
      
      
      <label htmlFor="time"> Enter time of task</label>
      <input id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} />
    </form>
  )
}

export default TaskForm;