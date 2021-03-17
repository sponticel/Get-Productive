

function Taskform(props) {
  const {task, details, date, completed } = props.task.fields;
  return (
    <div>
      <h3>{task}</h3>
      <h4>{date}</h4>
    </div>

  )
}

export default Taskform;