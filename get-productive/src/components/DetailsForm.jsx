import { useState } from "react"


function TaskForm(props) {
  const [detail, setDetail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState();

  return (
    <form onSubmit="">

      <label htmlFor="detail">Add Task Detail: </label>
        <input id="detail" type="text" value="" onChange=" />
      

      <label htmlFor="date"></label>
        <input id="date" type="date" value="" onChange=" />
      
      
      <label htmlFor="time"> </label>
        <input id="time" type="time" value="" onChange=" /> 
    </form>
  )
}
