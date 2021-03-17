

function Taskform(props) {
  const {task, details, date, completed } = props.label.fields;
  return (
    <div>Create your Task List here!
      <h3>{task}</h3>
    </div>

  )
}

export default Taskform;