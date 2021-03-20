import { useState } from "react"
import { baseURL, config } from "../services";
import axios from "axios";

function DetailsForm(props) {
  const [details, setDetails] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(`ganamos2`)
    const fields = {
      details,
      date,
      time,
    }
    await axios.post(baseURL,{fields},config)
  }
  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor="details">New Task detail: </label>
        <input required id="details" type="textarea" value={details} onChange={(e)=> setDetails(e.target.value)} />
      <label htmlFor="time"> Time:</label>
      <input required id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      <label htmlFor="date">Date: </label>
      <input required id="date" type="date" value={date} onChange={(e)=> setDate(e.target.valueAsDate)}/>
      <button type="submit">Create</button>
    </form>
  )
}

export default DetailsForm;