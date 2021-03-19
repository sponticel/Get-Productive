import { Link } from "react-router-dom";

function LabelForm(props) {
  const {label} = props.task.fields
  return (
    <div>
      <Link to={`/tasks/${label}`} >{label}</Link>
    </div>

  )
}

export default LabelForm;