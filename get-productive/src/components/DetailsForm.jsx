import { useState } from "react"


function TaskForm(props) {
  const [detail, setDetail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <form onSubmit="">
      <label htmlFor="">
        <input type="text" value=" onChange=" />
      </label>
    </form>
  )
}
