import { Link } from "react-router-dom";

function Labels() {
  
  return (
    <div>
        <Link to="/tasks/Personal" style={{ textDecoration: 'none' }}><h2>Personal</h2></Link>
        <Link to="/tasks/Work" style={{ textDecoration: 'none' }}><h2>Work</h2></Link>
        <Link to="/tasks/Health" style={{ textDecoration: 'none' }}><h2>Health</h2></Link>
        <Link to="/tasks/Project" style={{ textDecoration: 'none' }}><h2>Project</h2></Link>
        <Link to="/tasks/Errands" style={{ textDecoration: 'none' }}><h2>Errands</h2></Link>
    </div>
  )
}

export default Labels;