import { useParams, Link } from "react-router-dom";

export default function TaskList(props) {
  const params = useParams();
  const {tasks} = props
  const filtered = tasks.filter(task => task.fields.label === params.label)
  if (!filtered) {
    return( <h1>Loading ...</h1>)
  }
    
  return (
    <div>
      {filtered.map(task => {
        return (
        <Link to={`/details/${task.id}`}>
          <li>{task.fields.task}</li>
          </Link>
        )})}
    </div>
  )
}
