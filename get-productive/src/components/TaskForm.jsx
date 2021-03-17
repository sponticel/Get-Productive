

function Taskform(props) {
  const {task, details, date, completed } = props.task.fields;
  return (
    <div>
      <h3>{task}</h3>
    </div>

  )
}

export default Taskform;