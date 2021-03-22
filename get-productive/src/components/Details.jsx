import axios from 'axios';
import {useState} from 'react'
import { useParams } from "react-router-dom";
import {baseURL, config} from "../services"

export default function Details(props) {
  const params = useParams();
  const { tasks } = props
  const foundTask = tasks.find(task => task.id === params.id)
  
  const [details, setDetails] = useState();
  const [date, setDate] = useState();
  const [editing, setEditing] = useState(false);

  if (!foundTask) {
    return (<h1>Loading ...</h1>)
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const fields = {
      label: foundTask.fields.label,
      task: foundTask.fields.task,
      details: details ? details : foundTask.fields.details,
      date: date ? date: foundTask.fields.date,
    }
    console.log(fields)
    const updateURL = `${baseURL}/${foundTask.id}`
    await axios.put(updateURL, { fields: fields }, config);
    props.setToggleFetch((curr) => !curr);
    setEditing(false);
  }
  return (
    <div>
      <h1>{`Details for ${foundTask.fields.task}`}</h1>
      <div className="detail">
    {
      editing ?
          <form className="detailForm">
            <textarea
              value={details ? details: foundTask.fields.details}
              rows={5}
              onChange={(e) => setDetails(e.target.value)}
            />

            < input required id="date" type="date"
              value={date ? date: foundTask.fields.date}
              onChange={(e) => setDate(e.target.value)}
              />
            <div></div>
            <button onClick={handleSubmit} type="submit">Submit</button>
            <button onClick={()=> setEditing(false)}>Cancel</button>
        </form >:
          <div>
            <p>{foundTask.fields.details}</p>
            <p>{`Due on ${foundTask.fields.date}`}</p>
            <button onClick={()=> setEditing(true)}>Edit</button>
          </div>      
    }
      </div>
  </div>
  )
}
