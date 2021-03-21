import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { baseURL, config } from "../services";

export default function TaskList(props) {
  const params = useParams();
  const {tasks} = props
  const filtered = tasks.filter(task => task.fields.label === params.label)
  if (!filtered) {
    return( <h1>Loading ...</h1>)
  }

  const remove = async (id) => {

  const taskURL = `${baseURL}/${id}`
    await axios.delete(taskURL, config);
    props.setToggleFetch((curr)=> !curr)
}
    
  return (
    <div>
    <h2>{`Task list for ${params.label}`}</h2>
    <div className="tasks">
      {filtered.map(task => {
        return (
          <div className="detail-heading"> 
            <Link to={`/details/${task.id}`}>
            <li>{task.fields.task}</li>
            </Link>
            <button onClick={()=> remove(task.id)} >Delete</button> 
          </div>
    
        )
      })}
      </div>
    </div>
  )
}
