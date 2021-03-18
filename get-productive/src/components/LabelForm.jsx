import { Link } from "react-router-dom";

function LabelForm({ label }) {
  
  return (
    <div>
      <Link to="/details" >{label.fields.label}</Link>
    </div>

  )
}

export default LabelForm;